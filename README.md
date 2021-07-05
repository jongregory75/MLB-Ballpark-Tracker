# MLB-Ballpark-Tracker

# Description

An open source MERN (MongoDB,Express.js,React.js,Node.js) project that allows users to plan trips to MLB Ballparks. Find stadium information, pre-game bar/food options, in-game food options.

# Features:

### MongoDB, Express.js / React.js / Node.js

### MongoDB / Mongoose

- Profile Table for authentication/state JWT
- BallPark Table for address, stadium name, etc
- BarInfo Table for pre-game bars to checkout
- InsidePark Table for in-game best of food options
- npm run seed to seed collections

### React

- dynamically generated page content
- division rendering components
- BarInfo, BallPark, InsidePark components to render database queries

- MVC Folder Structure
- Authentication
- Express Sessions
- Heroku Deployed

# Dependencies:

concurrently: 5.3.0

## Client

- @apollo/client: ^3.3.6
- @popperjs/core: ^2.9.2
- @testing-library/jest-dom: ^5.11.6
- @testing-library/react: ^11.2.2
- @testing-library/user-event: ^12.5.0
- bcryptjs: ^2.4.3
- bootstrap: ^5.0.2
- graphql: ^15.5.1
- jwt-decode: ^2.2.0
- react: ^17.0.1
- react-dom: ^17.0.1
- react-router-dom: ^5.2.0
- react-scripts: 4.0.1

## Server

- apollo-server-express 2.19.0
- express 4.17.1
- mongoose 5.11.6
- dotenv 8.2.0
- express 4.17.1
- express-session 1.17.2
- moment 2.29.1
- apollo-server-express: 2.19.0
- bcrypt: 5.0.1
- express: 4.17.1
- graphql: 15.5.1
- jsonwebtoken: 8.5.1
- mongoose: 5.11.6
- nodemon": 2.0.8

# Installation

STEPS:
-'npm i' to install node modules

-'npm run seed' to seed BallPark/Team, BarInfo, InsideParkInfo

-npm run start

# Roadmap

- Additional in-game information
- Add google geolocation for mapping bars in proximity to stadium
- Ability to generate "Trip"
  - tie into travel management, hotels/airfare/etc
  - tie into tickets, will need game schedule DB

# Authors and acknowledgment

GiantRobot76 (Jon Bowman),
V1brance (Sam Brookshire),
jongregory75 (Jon Gregory),
samrobers (Sam Roberson).

# License

Open Source

# Links

Heroku Deployment: https://calm-lake-10775.herokuapp.com/

GitHub Repository: https://github.com/jongregory75/MLB-Ballpark-Tracker
