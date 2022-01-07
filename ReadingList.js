import Books from './Books.js';
export default class ReadingList {
    constructor() {
        this.readingList = [];
    }

    getBooks() {
        return new Books(this.readingList);
    }

    saveBook(book) {
        this.readingList.push(book);
    }
}