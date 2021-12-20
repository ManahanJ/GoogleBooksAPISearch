export default class ReadingList {
    constructor() {
        this.readingList = []
    }

    getBooks() {
        return this.readingList
    }

    saveBook(book) {
        this.readingList.push(book)
    }
}