const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    try {
        const books = await Book.find().skip(skip).limit(limit);
        res.json(books);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.addBook = async (req, res) => {
    const { title, description, publishedDate, pageCount, coverImage, coverImageType, userId } = req.body;
    try {
        const newBook = new Book({
            title,
            description,
            publishedDate,
            pageCount,
            coverImage: Buffer.from(coverImage, 'base64'),
            coverImageType,
            userId
        });
        await newBook.save();
        res.status(201).json('Book added!');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, description, publishedDate, pageCount, coverImage, coverImageType } = req.body;
    try {
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        book.title = title;
        book.description = description;
        book.publishedDate = publishedDate;
        book.pageCount = pageCount;
        book.coverImage = Buffer.from(coverImage, 'base64');
        book.coverImageType = coverImageType;

        await book.save();
        res.json('Book updated!');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        await Book.findByIdAndDelete(id);
        res.json('Book deleted.');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
