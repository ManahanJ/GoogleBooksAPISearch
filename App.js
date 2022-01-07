import readline from 'readline';
import dotenv from 'dotenv';
import DisplayBooks from './DisplayBooks.js';
import ReadingList from './ReadingList.js';
import QuerySearch from './QuerySearch.js';
import Library from './Library.js';
dotenv.config();

async function App() {
    let exit = false;
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const readingList = new ReadingList();
    const query = new QuerySearch();
    const formattedBooks = new DisplayBooks();

    const awaitingUserInput = async () => {
        while(!exit) {
            displayStartingPrompt();
            const initialInput = await retrieveUserInput('Please enter a number associated with the action you want to do and then press enter: ', userInput);
            if(initialInput == 1) {
                await searchBook(query, readingList, formattedBooks, userInput);
            }
            else if(initialInput == 2) {
                formattedBooks.displayList(readingList.getBooks());
            }
            else if(initialInput == 3) {
                exit = true;
            }
            else {
                console.log("ALERT: Invalid selection, please try entering again!\r\n");
            }
        }
        console.log("Exiting the Program!");
        userInput.close();
    }
    awaitingUserInput();
}

function displayStartingPrompt() {
    console.log('1. Search for Book\r\n');
    console.log('2. View ReadingList\r\n');
    console.log('3. Exit\r\n');
}

async function retrieveUserInput(prompt, communication) {
    const userInput = await new Promise(resolve => {
        communication.question(prompt, resolve);
    });
    console.clear();
    return userInput
}

async function searchBook(query, readingList, formattedBooks, userInput) {
    const library = new Library(query);
    const searchInput = await retrieveUserInput('Please enter a book name or key word to search and then press enter: ', userInput);
    const books = await library.getBooks(searchInput);

    formattedBooks.displayList(books);
    const savedBookNumber = await retrieveUserInput('Please enter a number associated with the book you want to save to your reading list and then press enter, if no books were found or to save nothing just press enter: ', userInput);
    saveBook(readingList, books, savedBookNumber);
}

export default function saveBook(readingList, books, savedBookNumber) {
    const selectedBook = books.getBook(savedBookNumber);
    if(!savedBookNumber) {
        console.log('No book has been saved like requested. \r\n')
    }
    else if(selectedBook == undefined){
        console.log('ALERT: No book has been saved, please enter in a number that is associated with a displayed book next time! \r\n')
    }
    else{
        readingList.saveBook(selectedBook);
        console.log('The book "' + selectedBook.title + '" has been saved to your reading list!\r\n');
    }
}

App();