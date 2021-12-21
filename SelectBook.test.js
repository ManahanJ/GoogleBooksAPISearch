import Book from './Book';
import SelectBook from './SelectBook'

describe ( 'Testing selecting feature of results from the list of books from the query', () => {

    it('selected book is saved to the reading list', () => {
        const bookSelector = new SelectBook();

        const bookNumber = 3;
        const bookOne = new Book('Harry Potter Page to Screen: Updated Edition', ['fake author 1 book 1', 'fake author 2 book 1'], 'Harper Design');
        const bookTwo = new Book("The Little Engine that Simply Won't", ['fake author 1 book 2'], 'Jacob Jingle Studio');
        const bookThree = new Book('Do Androids Dream of Anything At All?', ['fake author 1 book 3'], 'Blade Runner Studio');
        const bookFour = new Book('Deeper That The Ocean' ['fake author 1 book 4', 'fake author 2 book 4', 'fake author 3 book 4'], 'No Sleep');
        const bookFive = new Book('The Might', ['fake author 1 book 5'], '8th Light');
        const bookList = [bookOne, bookTwo, bookThree, bookFour, bookFive]

        const book = bookSelector.selectBook(bookNumber, bookList);
        
        expect(book.title).toBe('Do Androids Dream of Anything At All?');
    })
})