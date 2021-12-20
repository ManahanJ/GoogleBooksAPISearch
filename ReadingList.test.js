import ReadingList from "./ReadingList"
import Book from "./Book"

describe('Manging Reading List', () => {

    it('is created empty', () => {
        const readingList = new ReadingList();

        expect(readingList.getBooks().length).toBe(0)
    });

    it('one book is saved with all info', () => {
        const readingList = new ReadingList();
        const savedBook = new Book('F. Scott Fitzgerald', 'The Great Gatsby', 'Books R US');

        readingList.saveBook(savedBook)

        expect(readingList.getBooks().length).toBe(1)
        expect(readingList.getBooks()[0].author).toBe('F. Scott Fitzgerald');
        expect(readingList.getBooks()[0].title).toBe('The Great Gatsby');
        expect(readingList.getBooks()[0].publishingCompany).toBe('Books R US');
    });

    it('more than one books are saved with all info', () => {
        const readingList = new ReadingList();
        const firstSavedBook = new Book('F. Scott Fitzgerald', 'The Great Gatsby', 'Books R US');
        const secondSavedBook = new Book('J. D. Salinger', 'The Catcher in the Rye', 'Books R US');

        readingList.saveBook(firstSavedBook)
        readingList.saveBook(secondSavedBook)

        expect(readingList.getBooks().length).toBeGreaterThan(1)
        expect(readingList.getBooks()[0].author).toBe('F. Scott Fitzgerald');
        expect(readingList.getBooks()[0].title).toBe('The Great Gatsby');
        expect(readingList.getBooks()[0].publishingCompany).toBe('Books R US');
        expect(readingList.getBooks()[1].author).toBe('J. D. Salinger');
        expect(readingList.getBooks()[1].title).toBe('The Catcher in the Rye');
        expect(readingList.getBooks()[1].publishingCompany).toBe('Books R US');
    })

})