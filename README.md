# BharatX Forms (MERN Stack Website) 
Google Forms clone built using MERN Stack. Making it easier to create and share forms.

 

## Features of website-

#### Creator Side :-     
- View & manage forms.
- Add Questions of the type paragraph, short-input, checkboxes, multiple choice.
- Change theme color of the form
- Delete the form.
- Share the form link or the shortened url.
- View Responses

#### Responder Side-
- Answer the questions.
- Submit another response.
- Check implemented to make sure that the creator does not submit a response.
- Submit the form.


## View deployed site- 
https://bharat-x-forms.vercel.app/


### Made Using
-------------------------------------------------------------------------------------------------------------
Back-end Side :-
- [NodeJS](https://nodejs.org/en/docs/)
- [ExpressJS](https://expressjs.com/en/4x/api.html)
- [MongoDB](https://www.mongodb.com/)([Mongoose](mongoosejs.com/docs/)/[connect-mongo](https://www.npmjs.com/package/connect-mongo))
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

Front-end Side :-
- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Javascript](https://www.javascript.com/)
- [TailwindCSS](https://tailwindcss.com/)


<!-- GETTING STARTED -->

## Getting Started

Follow the below guide to launch project on local machine.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```
- node
- mongod

### Installation

1. Get MongoDB URI
2. Clone the repo
   ```sh
   git clone https://github.com/gauravbhag51/BharatX-Forms.git
   ```
3. Install server NPM packages
   ```sh
   cd server && npm install
   ```
4. Install client NPM packages
   ```sh
   cd client && npm install
   ```
5. Enter your API in `./server/.env`

   ```js
   PORT = "ENTER PORT NUMBER";
   MONGODB_URI_DEV = "ENTER MONGO DATABASE DEVELOPMENT URI";
   MONGODB_URI_PROD = "ENTER MONGO DATABASE PRODUCTION URI";
   APP_ACCESS_TOKEN_SECRET = "ENTER TOKEN SECRET";
   APP_SECRET = "ENTER APP SECRET";
   ```

6. Start two terminals for each process

7. Start your server
   ```sh
    cd server && npm run dev
   ```
8. Start your server
   ```sh
    cd client && npm run start
   ```
