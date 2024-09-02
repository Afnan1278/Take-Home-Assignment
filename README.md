# Chat Session

This project is a web application for managing chat sessions. It provides features to view and filter chat sessions.

## To install the project dependencies, run:
npm install

## To start the development server, run:
npm start

### To build the application for production, run:
npm run build

### To run the tests, use:
npm test


## What Application Does
The Chat Session application allows users to:

View a list of chat sessions.
Filter chat sessions by date.
View detailed information about each chat session.
Manage chat sessions through a user-friendly interface.


### Decisions Taken
1. Technology Stack: The application is built using React for the frontend, with TypeScript for type safety. We use axios for making HTTP requests and dayjs for date manipulation.

2. State Management: We use React's built-in state management for local component state and @tanstack/react-query for server state management.

3. UI Components: The UI is built using Material-UI (@mui/material) for a consistent and responsive design.

4. Testing: We use @testing-library/react and @testing-library/jest-dom for unit and integration tests to ensure the reliability of our components.

5. Environment Configuration: Environment-specific configurations are managed using .env files. The backend URL is configured in the .env file.

6. Code Quality: We enforce code quality and consistency using ESLint with the react-app and react-app/jest configurations.



