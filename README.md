# Mini Message Board

A Mini Message Board application built using Express and EJS. This project allows users to post messages and view them on a message board.

## Features

- Post new messages with an author name.
- View all messages on the message board.
- Error handling for invalid inputs and not found resources.

## Prerequisites

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/blue0206/mini-message-board.git
    cd mini-message-board
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Running the Project

To run the project, you need to follow these steps:

1. **Build the Project:**

   Compile TypeScript, copy assets to the dist directory, and clean any preexisting assets:

   ```bash
   npm run build
   ```

2. **Start the Server:**

   You can start the server in two ways:

   - **Without nodemon (Requires restart after changes):**

     ```bash
     npm run start
     ```

   - **Development Mode (with nodemon):**

     ```bash
     npm run dev
     ```

## Scripts

- `npm run start`: Start the server.
- `npm run dev`: Start the server in development mode with nodemon.
- `npm run build`: Compile TypeScript, copy assets, and clean the dist directory.
- `npm run clean`: Remove the dist directory.
- `npm run tsc`: Compile TypeScript files.
- `npm run copy-assets`: Copy static assets to the dist directory.

## Project Structure

- `src/`: Contains the TypeScript source files.
- `views/`: Contains EJS templates for rendering views.
- `public/`: Contains static assets like CSS and JavaScript files.
- `dist/`: Contains the compiled JavaScript files and assets (generated after build).

## Conclusion

The Mini Message Board project is a simple example of how to create a web application with Express, TypeScript, and EJS. It demonstrates the basics of routing, templating, and error handling. 
