# MLB-Ballpark-Tracker

# Description

An open source MERN (MongoDB,Express.js,React.js,Node.js) project that allows users to plan trips to MLB Ballparks. Users can create trips, find pre-game bar/food options and document their trips with pictures, comments, tips.

# Features:

        Express.js / React.js / Node.js -
        - User Table for authentication/state cookies
        - BallPark Table for address, stadium name, etc
        - TODO: build out features list
        - Routing (CRUD operations)

        MongoDB and Mongoose - Database
        - Models
        - Seeds

        Undiscussed Technology
        Yelp API
        Google Geolocation API
        TODO: Include any other API calls

        MVC Folder Structure

        Authentication

        Express Sessions

        Cookies Usage

        Heroku Deployed

# Dependencies:

concurrently 5.3.0

## Client

bcrypt 5.0.0
bootstrap 5.0.1
bootswatch 5.0.1
apollo/client 3.3.6
graphql 15.4.0
react 17.0.1
react-dom 17.0.1
react-router-dom 5.2.0
react-scripts 4.0.1

## Server

apollo-server-express 2.19.0
express 4.17.1
mongoose 5.11.6
dotenv 8.2.0
nodemon
express 4.17.1
express-session 1.17.2
moment 2.29.1

# Installation

        STEPS:
        -Run seed.js
        -Run server.js

# Roadmap

        Add Features
        - Trips

# Authors and acknowledgment

GiantRobot76 (Jon Bowman),
V1brance (Sam Brookshire),
jongregory75 (Jon Gregory),
samrobers (Sam Roberson).

# License

Open Source

# DEPLOYMENT STUFF

> **Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

- [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)

- [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)

## Submission on BCS

You are required to submit the following:

- The URL to the deployed application

- The URL to the GitHub repository
