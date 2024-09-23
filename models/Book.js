const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    publishedDate: { type: Date },
    pageCount: { type: Number },
    coverImage: { type: Buffer, required: true },
    coverImageType: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' } // Referensi ke User
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
