export default class Books {
    constructor (books) {
        this.books = books;
    }

    getBook(bookNumber) {
        const bookIndex = bookNumber-1;
        return this.books[bookIndex];
    }
}