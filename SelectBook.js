export default class SelectBook {
    selectBook(bookNumber, bookList) {
        const bookIndex = bookNumber - 1;
        return bookList[bookIndex];
    }
}