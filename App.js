import readline from 'readline';
import dotenv from 'dotenv';
import DisplayList from './DisplayList.js';
import ReadingList from './ReadingList.js';
import QuerySearch from './QuerySearch.js';
import BookListCreate from './BookListCreate.js';
import SelectBook from './SelectBook.js';
dotenv.config()

async function App() {
    let exit = false;
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const readingList = new ReadingList();
    const query = new QuerySearch();
    const formattedList = new DisplayList();

    const awaitingUserInput = async () => {
        while(!exit) {
            displayStartingPrompt();
            const initialInput = await retrieveUserInput('Please enter a number assosciated with the action you want to do and then press enter: ', userInput);
            if(initialInput == 1) {
                await searchBook(query, readingList, formattedList, userInput);
            }
            else if(initialInput == 2) {
                formattedList.displayList(readingList.getBooks());
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

async function searchBook(query, readingList, formattedList, userInput) {
    const queryResults = new BookListCreate(query);
    const searchInput = await retrieveUserInput('Please enter a book name or key word to search and then press enter: ', userInput);
    const bookList = await queryResults.getBooks(searchInput);

    formattedList.displayList(bookList);
    if(bookList.length) {
        const savedBookNumber = await retrieveUserInput('Please enter a number assosciated with the book you want to save to your reading list and then press enter or to save nothing just press enter: ', userInput);
        saveBook(readingList, bookList, savedBookNumber);
    }
}

function saveBook(readingList, bookList, savedBookNumber) {
    const bookSelector = new SelectBook();
    if(savedBookNumber > 0 && savedBookNumber <= bookList.length) {
        const selectedBook = bookSelector.selectBook(savedBookNumber, bookList);
        readingList.saveBook(selectedBook);
        console.log('The book "' + selectedBook.title + '" has been saved to your reading list!\r\n');
    }
    else if(!savedBookNumber) {
        console.log('No book has been saved like requested. \r\n')
    }
    else {
        console.log('ALERT: No book has been saved, please enter in a number that is assosciated with a displayed book next time! \r\n')
    }
}

App();