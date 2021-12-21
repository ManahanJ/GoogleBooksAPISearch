import Book from './Book.js';

export default class BookListCreate {
    constructor(querySearch) {
        this.querySearch = querySearch;
    }

    async getBooks(queryTerm) {
        let jsonBookList = await this.querySearch.googleQuery(queryTerm);
        let bookList = [];
        if (jsonBookList !== undefined) {
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
        return bookList.slice(0,5);
    }
}