const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const borrowingSchema = new Schema({
    bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    borrowedAt: { type: Date, default: Date.now },
    returnDate: { type: Date },
});

const Borrowing = mongoose.model('Borrowing', borrowingSchema);
module.exports = Borrowing;
