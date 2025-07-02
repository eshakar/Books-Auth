import Book from '../schema/bookModel.js';

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

export const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

export const createBook = async (req, res) => {
  const { title, author, genre, publishedYear } = req.body;
  const newBook = await Book.create({ title, author, genre, publishedYear, userId: req.user.id });
  res.status(201).json(newBook);
};

export const updateBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  if (book.userId.toString() !== req.user.id) return res.status(403).json({ message: 'Forbidden' });
  Object.assign(book, req.body);
  await book.save();
  res.json(book);
};

export const deleteBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  if (book.userId.toString() !== req.user.id) return res.status(403).json({ message: 'Forbidden' });
  await book.remove();
  res.status(204).end();
};

const bookController = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};

export default bookController;
