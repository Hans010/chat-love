# Chat Love

_This project is part of the **"You have to start somewhere"** React Project Series_

Simple chat app with **React**, **express** and **socket.io**. 
Chat app has multiple rooms (pre-defined in initial
state).
Users have a random generated username

## Getting started

#### Install dependencies

```sh
npm install
```

#### Start server
```sh
node src/server/index.js
```

#### Start React app
```sh
npm start
```


### Known Issues

When app is launched, state may not be updated with new messages. When any change is made to the codebase, state updates
normally. Still working on it. I've added a console.log in Store.js:23 for demonstration purposes.

### Next steps

- Add CSS styling
- Add initial input for username
- Separate Backend from Frontend files allowing deployment on two different servers
- Finish preparing app for deployment

## Release History

* 0.1.1
    * Updated README.md
    * Added Procfile for later Heroku deployment
    * Added a second package.json for server
* 0.1.0
    * App is running despite identified issue. It is possible to send and receive messages and switch between rooms.

* 0.0.1
    * Work in progress