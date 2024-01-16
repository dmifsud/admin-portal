# Admin Portal
###### By David Mifsud

This project has been custom built as part of an interview prcocess task.

## Tech Stack

- Frontend: Angular (14.1.1)
  - Angular was chosen for this task for several reasons. Mainly due to the case scenario being more of a Backoffice portal, which means heavy emphasis was made on the scalibility in terms of code structure of the whole project. If there was more emphasis on heavy UI logic and customization, React would have been a better choice.
  - Material design was chosen to build UI components that fit the case scenario of the task (i.e. Backoffice portal).
  - NGRX (Redux) was added in to show how easily scalable the project can become without too many workarounds and having a centralized state.
  - SCSS for styling
- Backend: NodeJs/ExpressJs 
  - Was used to build a quick and easy way to simulate a REST API. Implementation has been treated as a prototype for demo purposes.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Prerequisites

Please make sure you have NodeJs installed globally on your machine. This was implemented using `v14.18.1` and also tested on both Linux (Ubuntu) and MacOS using Node `v16.19.0`.

Before running the servers, execute `npm install` for all dependencies required.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

*Note: Please make sure the backend is running as well. See below.*

## Prototype Backend server

Run `npm run backend` for the API calls to run through and test the app.

The application is using a simple custom made JSON based "Database" built purposely for the use of this task.

To test, navigate to `http://localhost:3000/data`. This should list all the data in the JSON file "Database".

*Note: Some of the implemented APIs have a delay of 500ms to simulate network delay on the app.* 


## Testing

Testing has been mainly done on Chrome during development.

As a bonus, the user actions in store can be monitored in real time using this [Chrome Extension Dev Tool](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) to inspect Redux.


## Scalability

1. Use of redux (NGRX)
2. Use of Typings everywhere
3. Reusable components
3. Use of layered services

## Improvements

- Eslint
- Use of Prettier
- NGRX (store-localstorage)
- Styilng theme, mixins, and more globalized variables
- UI Responsiveness
- Centralized config file with different environments
- Unit tests
- Better module/routing structure for lazy loading
- Better error handling, especially in Login form
