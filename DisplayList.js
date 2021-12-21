export default class DisplayList {
    displayList(bookList) {
        let formattedBookList = bookList.map(function(unformattedbookList, index) {
            const bookNumber = index + 1;

            const title = unformattedbookList.title;

            const authors = unformattedbookList.authors.join(', ');

            const publisher = unformattedbookList.publisher;

            return String(bookNumber + '. "' + title + '" written by: ' + authors + ' and published by: ' + publisher);
        });
        if(!formattedBookList.length) {
            console.log('Sorry! There are no books to be displayed.\r\n')
        }
        else {
            formattedBookList.forEach(book => console.log(book));
            console.log("\r\n");
        }
    }
}