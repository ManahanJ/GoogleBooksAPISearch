#  bookworm

## Description
bookwork is a command line application that allows users to search for books using the Google Books API, save books they select to a reading list, and then view their custom reading list!

This application was developed using bottom up TDD with a top level application coordinating the interaction of the various components.

## Commands

- npm run start - Starts the application
- npm run test - Executes the unit testing suite

## API Key
In order to surpass the free request limit for the Google Books API, you may provide an API key in the .env directory. Always ensure to keep this API key safe and never push it to a public repository.

## Technologies
- Node.js
- Jest
- node-fetch
- Dotenv

## Further Improvements

In the future some improvements that could be made to this repo include:

- Integration testing around the top level application App.js
    - More specifically, integration tests around the SearchBooks functionality  would enhance test coverage and enable further changes to be made with confidence
    - Testing at the application level could be enabled by mocking user input
- Unit test coverage over SaveBooks at the App.js level was enabled by refactoring App.js and would further improve coverage
- More robust error handling
    - Errors in the API response could be handled on a more granular level
- Extracting common validation logic
    - Validation could be refactored to be reusable