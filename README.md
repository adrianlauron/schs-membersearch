# Member Search Portal

A single-page application (SPA) for users to search members with either the policy or member card numbers.

## Backend Setup
Browse to the express/ folder and run `npm install` in the terminal to install the libraries.

## Running the backend
In the terminal, run `npm start` to start the development server. The API is listening at port 3000. It also uses `ts-node-dev` to monitor the changes and automatically restarts the app.

## Frontend Setup
Browse to the membersearchportal-ng/ and run `npm install` to install the libraries

## Running the frontend
Run `ng serve --open` in the terminal to start the Angular project and automatically open the portal in the browser.


## Considerations and Decisions

- I have used Angular for front-end code as I am more familiar with it compared to the latest versions of React.
- I utilised [PrimeNG](https://www.primefaces.org/primeng) for Angular-based UI component library: With PrimeNG's extensive UI and form components, it improves the user interface of the portal.
- I noticed that the date of birth in MOCK_DATA.json file is in `DD/MM/YYYY` format, I have used [moment js](https://momentjs.com) to give me the capability to format the dates when loading data to MongoDB database.
- I used MongoDB for NoSQL database as this is what I am more familiar with.
- I used Jest for unit testing in the API side, but it is not that extensive.
- I have noticed that there's no use case for the date field in the search form, as such I just set it as a static display and shows the current date.
- For initial loading of data to MongoDB database, I created a `load` API (http://localhost:3000/api/load) to transfer data from MOCK_DATA.json to MongoDB database.

## Limitations
- A local MongoDB server should initially be installed as the app is dependent on MongoDB connection.
- The search results will display everything including past searches. I think it is a good idea to implement a paging feature for the cards that will just limit the number of searches displayed and the user can just iterate through the pages.
- It would also be a good idea to implement a clear search results feature so users can clear out those previous searches.

## Design Patterns
- For the API, I have utilised a repository pattern.
- For the Frontend, I used a service layer approach, where services that interact with the API are separated and can be accessed by all components.

## Things I could have improved on
- I would utilise the date field to search for member's date of birth instead of service date so it will be aligned to the use case of the portal.
- I would also create extensive unit test methods for backend while utilising Jest. I am really keen on learning how to use Jest for unit testing especially for Node or Express projects.
- Since Angular projects came with Karma unit test functionalities, I would really like to expand my knowledge on using that technology for unit testing Angular projects.
- I would really want to refactor the frontend source codes to implement a repository pattern with dependency injection (DI). This would tie nicely to my intention on improving the unit testing I mentioned above.
- I explored the idea of implementing DI on Express JS APIs and I am really interested in implementing that. With DI, I could decouple the database connection and I can replace it with the mock data provided, or any data sources.
- For UX side of things, I want to implement a popup notification if no search results found for a given query so the users know when checking the search results page.
