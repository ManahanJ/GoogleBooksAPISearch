import Book from './Book.js';
import Books from './Books.js';

export default class Library {
    constructor(querySearch) {
        this.querySearch = querySearch;
    }

    async getBooks(queryTerm) {
        let jsonBookList = await this.querySearch.googleQuery(queryTerm);
        let bookList = [];
        if(jsonBookList !== undefined) {
            bookList = jsonBookList.map(function(jsonBook) {
                let title = jsonBook.volumeInfo.title;
                if(title === undefined) {
                    title = 'Unknown Title';
                }
    
                let authors = jsonBook.volumeInfo.authors;
                if(authors === undefined) {
                    authors = ['Unknown Authors'];
                }
    
                let publisher = jsonBook.volumeInfo.publisher;
                if(publisher === undefined) {
                    publisher = 'Unknown Publisher';
                }
    
                const book = new Book(title, authors, publisher);
                return book;
            });
        }
        return new Books(bookList.slice(0,5));
    }
}