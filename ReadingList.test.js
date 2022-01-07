import ReadingList from './ReadingList'
import Book from './Book'

describe('Manging Reading List', () => {

    it('is created empty', () => {
        const readingList = new ReadingList();

        expect(readingList.getBooks().books.length).toBe(0)
    });

    it('one book is saved with all info', () => {
        const readingList = new ReadingList();
        const unsavedBook = new Book('The Great Gatsby', ['F. Scott Fitzgerald'], 'Books R US');

        readingList.saveBook(unsavedBook);

        expect(readingList.getBooks().books.length).toBe(1);
        expect(readingList.getBooks().books[0].title).toBe('The Great Gatsby');
        expect(readingList.getBooks().books[0].authors).toStrictEqual(['F. Scott Fitzgerald']);
        expect(readingList.getBooks().books[0].publisher).toBe('Books R US');
    });

    it('more than one books are saved with all info', () => {
        const readingList = new ReadingList();
        const firstUnsavedBook = new Book('The Great Gatsby', ['F. Scott Fitzgerald'], 'Books R US');
        const secondUnsavedBook = new Book('The Catcher in the Rye', ['J. D. Salinger'], 'Books R US');

        readingList.saveBook(firstUnsavedBook);
        readingList.saveBook(secondUnsavedBook);

        expect(readingList.getBooks().books.length).toBeGreaterThan(1);
        expect(readingList.getBooks().books[0].title).toBe('The Great Gatsby');
        expect(readingList.getBooks().books[0].authors).toStrictEqual(['F. Scott Fitzgerald']);
        expect(readingList.getBooks().books[0].publisher).toBe('Books R US');
        expect(readingList.getBooks().books[1].title).toBe('The Catcher in the Rye');
        expect(readingList.getBooks().books[1].authors).toStrictEqual(['J. D. Salinger']);
        expect(readingList.getBooks().books[1].publisher).toBe('Books R US');
    })
})