const DetailBook = require('../models/DetailBook');

exports.addDetailBook = async (req, res) => {
    const { bookId, summary, author, publicationYear, isbn, pages, language, categories, coverImage, coverImageType } = req.body;
    try {
        const newDetailBook = new DetailBook({
            bookId,
            coverImage: Buffer.from(coverImage, 'base64'),
            coverImageType,
            summary,
            author,
            publicationYear,
            isbn,
            pages,
            language,
            categories
        });
        await newDetailBook.save();
        res.status(201).json('Detail book added!');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getDetailBook = async (req, res) => {
    const { bookId } = req.params;
    try {
        const detailBook = await DetailBook.findOne({ bookId }).populate('categories');
        res.json(detailBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
