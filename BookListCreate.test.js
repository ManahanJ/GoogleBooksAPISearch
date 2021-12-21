import BookListCreate from './BookListCreate'

describe ( 'Managing Results from Mock Query', () => {
    //Should be 10 elements long with more verbose fields, the number of elements was shortened to 6 and most fields were excluded for the sake of brevity in tests
    const mockData = [
        {
            volumeInfo: {
                title: 'Harry',
                subtitle: 'Life, Loss, and Love',
                authors: [
                    'Katie Nicholl'
                ],
                publisher: 'Hachette Books',
                publishedDate: '2018-03-20',
            }
        },
        {
            volumeInfo: {
                title: 'Playing Harry Potter',
                subtitle: 'Essays and Interviews on Fandom and Performance',
                authors: [
                    'Lisa S. Brenner'
                ],
                publisher: 'McFarland',
                publishedDate: '2015-06-11',
            }
        },
        {
            volumeInfo: {
                subtitle: 'The Real Story',
                publishedDate: '2020-06-25',
            }
        },
        {
            volumeInfo: {
                title: 'Harry Potter and Convergence Culture',
                subtitle: 'Essays on Fandom and the Expanding Potterverse',
                authors: [
                    'fake author book 4'
                ],
                publisher: 'McFarland',
                publishedDate: '2018-02-09'
            }
        },
        {
            volumeInfo: {
                title: 'Harry Potter Page to Screen: Updated Edition',
                subtitle: 'The Complete Filmmaking Journey',
                authors: [
                    'fake author 1 book 5',
                    'fake author 2 book 5'
                ],
                publisher: 'Harper Design',
                publishedDate: '2018-11-13'
            }
        },
        {
            volumeInfo: {
                title: "Harry's Farewell",
                subtitle: 'Interpreting and Teaching the Truman Presidency',
                authors: [
                    'fake author 1 book 6',
                    'fake author 2 book 6',
                    'fake author 3 book 6',
                    'fake author 4 book 6'
                ],
                publishedDate: '2004'
            }
        }
    ];

    it('returns list of books with relevant information results from query of the word Harry', async () => {
        class MockQueryResults {
            async googleQuery() {
                return mockData;
            }
        }

        const bookListCreator = new BookListCreate(new MockQueryResults());
        const bookList = await bookListCreator.getBooks("Harry");

        expect(bookList.length).toBe(5);
        expect(bookList[4].title).toBe('Harry Potter Page to Screen: Updated Edition');
        expect(bookList[4].authors).toStrictEqual(['fake author 1 book 5', 'fake author 2 book 5']);
        expect(bookList[4].publisher).toBe('Harper Design');

        expect(bookList[2].title).toBe('Unknown Title');
        expect(bookList[2].authors).toStrictEqual(['Unknown Authors']);
        expect(bookList[2].publisher).toBe('Unknown Publisher');
    })
})