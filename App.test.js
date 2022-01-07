import Books from "./Books";
import saveBook from './App';
import { jest } from '@jest/globals'

describe ( 'Integration tests for App level functions', () => {

    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    const mockBooksData = [
        [
            {
                title: 'BookFoundTitle',
                authors: ['BookFoundAuthor'],
                publisher: 'BookFoundPublisher'
            }
        ]
    ];

    class MockReadingList {
        constructor() {
            this.book;
        }

        saveBook(book) {
            this.book = book;
        }
    };

    it('saveBook is not called if there are no books found by or returned from the google books api', async () => {

        const readingList = new MockReadingList();
        const books = new Books([]);
        saveBook(readingList, books, 1);

        expect(readingList.book).toBe(undefined);
    });

    it('saveBook is called if there are book(s) found by or returned from the google books api', async () => {

        const readingList = new MockReadingList();
        const books = new Books(mockBooksData);
        saveBook(readingList, books, 1);

        expect(readingList.book).toBe(mockBooksData[0]);
    });
})