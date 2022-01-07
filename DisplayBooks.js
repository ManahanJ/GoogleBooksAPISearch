export default class DisplayList {
    displayList(books) {
        let bookNum = 1;
        let foundBooks = false;
        while(books.getBook(bookNum) != undefined) {
            foundBooks = true;

            const title = books.getBook(bookNum).title;
            const authors = books.getBook(bookNum).authors.join(', ');
            const publisher = books.getBook(bookNum).publisher;
            
            console.log(bookNum + ': "' + title + '" written by: ' + authors + ' and published by: ' + publisher);
            bookNum++;
        }

        if(!foundBooks) {
            console.log('Sorry! There are no books to be displayed.')
        }
        console.log('\r\n');
    }
}