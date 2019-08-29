# Trips

##### This repo is built as a two part application:

- Client (Front-End): https://github.com/JHankins09/trips-client
- API (Back-End): https://github.com/JHankins09/trips-API


## Getting Started

### Client Install, Setup, and Contributing
1. Fork and clone [this](https://github.com/JHankins09/trips-client) repository.
1. To contribute, be sure to checkout to a new branch for your work.
  - Can be done in command line with ```git checkout -b <your-branch-name-here>```
1. Install dependencies by running the following in your command line: ```npm install```.
  - All required NPM packages are present in package.json
2. To launch the app in a local browser, additionally run the command ```npm start``` in the command line.

###### NOTE: You need to be running the trips API locally to interact with the local client.

### API Install and setup
1. Fork and clone [this](https://github.com/JHankins09/trips-API) repository.
1. To contribute, be sure to checkout to a new branch for your work.
  - Can be done in command line with ```git checkout -b <your-branch-name-here>```
1. Install dependencies by running the following in your command line: ```npm install```.
   - All required NPM packages are present in package.json
2. To launch the api (required to run local browser Client) run the command ```npm run server``` in the command line

---

### Overview
This app is meant to provide a space to plan, build, and review different types of trips for those with an adventurous spirit! Natively built to accomidate RoadTrips, Camping, Hiking, or Biking, the app allows for flexible addition of locations, as well as a 'peaks and pits' feature to review the pros and cons of visited destinations.

### Planning

#### Initial Stories
+ As a visitor, I want to be able to create an account and become a user.
+ As a user, I want to be able to log in, log out, and change my password.
+ As a visitor, I want to be able to see published trips.
+ As a user, I want to be able to create or delete trips.
+ As a user, I want to be able to add, remove or edit destinations to my trips.
+ As a user, I want to be able to distinguish completed vs planned trips.
+ As a user, I want to decide whether my trips will be made public or kept private.

#### Stretch Stories
+ As a user, I want to see my trip plotted on a map.
+ As a user, I want to search public trips by destination.
+ As a user, I want to be able to select my transportation method on my trip.
+ As a user, I want to be able to rate my and public trips.

#### SUPER Stretch Stories
+ As a user, I want to be able to rate destinations individually.
+ As a user, I want to be able to search destinations by rating before I add them to my trip.
+ As a user, I want to be able to read other users pit’s and peaks of a destination before I add it to my trip.

---

#### Initial Wire framing

##### ERD
![image](https://media.git.generalassemb.ly/user/21061/files/6c9cc980-c7ea-11e9-921d-229c82b0ca30)

#### WireFrame
![image](https://media.git.generalassemb.ly/user/21061/files/7cb4a900-c7ea-11e9-934d-c832900597ef)

#### Application Screenshot

![image](https://media.git.generalassemb.ly/user/21061/files/13e85d80-ca84-11e9-8744-3bfc8b90a85b)

#### API Route Table

Verb         |	URI Pattern
------------ | -------------
GET | /trips
GET | /trips/:id
POST | /trips
PATCH | /trips/:id
DELETE | /trips/:id
GET | /destinations
GET | /destinations/:id
POST | /destinations
PATCH | /destinations/:id
DELETE | /destinations/:id

---

#### This project was planned to be built in 3 primary parts:
  1. Build out API
  * Build out API to allow for user, trips, destinations
  * Apply relationships that allow users to create, manipulte or delete trips, as well as destinations. Additional relationships built for trips to maintain destinations as a property.
  * Allow for users to view only self built trips.
  2. Development of Client
  * Include user authentication functionality including sign-up, sign-in, change-password, etc.
  * Build Trip content for creating and viewing trips - as well as ability to delete
  * Build out Destination functionality to create Destinations, include them in the selected Trip, and edit or delete them.
  3. Style client to improve user flow and set base for future functionality implimentation.

### Development Process

Majority of time was spent working with React to preform API calls. This was extremely difficult. Further exposure to React will go a long way into being able to fully leverage React with it's axios component.

Front end was initially a challenge as React is a new technology, however over the course of development, my understanding and comfort seemed to grow quickly. While my final output is a ways off from my initial intentions, I am happy with the product and am excited to continue to build on it moving forward.

### Problem Solving Strategy

All components were built to be as transferable as possible. This allowed for solving of one problem to scale out to a number of additional elements within the build.

Majority of problems were experience in th Client side, and refrences to the [React.JS](https://reactjs.org/) online documentation was hugely helpful.

---

## Unresolved issues / features for future release

- Responsive Design
  * Mobile UI
  * Tablet UI

- Interactive UI
  * Stronger form usage
  * Higher sign-up rate upon visit

- AWS/Image calls to allow for destination specific photo albums.

- Public facing catalog for completed trips, with the possibility of chat for users to pose questions and ideas to each-other.

- Stronger UI with animations and interactive components.

- Change alerts to 'push notification' style, ideally to easy the clutter in the bottom of the app.

- Fully utilize the 'Tool bar' feature.

- SEO enabled

## Built With (technologies used)

### Front End Client
- JavaScript
- React.JS
- JSX
- JSON
- Axios
- CSS
- HTML

### Back End API
- JavaScript
- Mongo.DB
- Express.API

## Versioning
V.1 -> released 6/29/19

## Author
### [James B. Hankins](https://jhankins09.github.io/)

LinkedIn:   https://www.linkedin.com/in/james-hankins/
GitHub:     https://github.com/JHankins09

## Acknowledgments
This project is built as the result of participating in General Assembly Boston's Software Engineering Immersive course.
