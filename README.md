# VBrain

This is a Brain MRI database, possibly more...

## How to use it?

For front end:

```
cd frontend
npm install
npm start
```

For back end:

```
cd backend
npm install
npm run server
```

To build the application:

```
npm run build
```

### Todo List

- log in functionality
  - hash password :white_check_mark:
  - able to create the user in the database :white_check_mark:
  - no 2 user can have duplicate email :white_check_mark:
  - password at least 6 digit length
  - able to retreive user information
  - fail when password incrorrect
  - fail when email/password not valid
  - fail when email not registered yet
  - instead of sending error messages indivisually, try to throw error and handle by a single error handler
