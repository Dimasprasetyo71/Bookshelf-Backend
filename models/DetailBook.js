const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailBookSchema = new Schema({
    bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    summary: { type: String, required: true },
    author: { type: String, required: true },
    publicationYear: { type: Number },
    isbn: { type: String, unique: true },
    pages: { type: Number },
    language: { type: String },
    publisher: { type: String },
    coverImage: { type: Buffer },
    coverImageType: { type: String },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }] // Referensi ke kategori
});

const DetailBook = mongoose.model('DetailBook', detailBookSchema);
module.exports = DetailBook;
