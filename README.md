# OrderToB - RESTful API Node.js

<p align="center">
  <a href="https://ordertob.com/" target="blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4fNOm7OS4aGfHPvNE_taRPKIUuQ6ID4fYg&s" width="120" alt="ordertob Logo" /></a>
</p>

## Introduction

The goal of this project is to create a REST API for fetching data on movies and TV shows, including relevant information such as actors, directors, etc. Route protection will be implemented using JWT.

## Main Features:

#### JWT Token Authentication
Users will be able to log in with credentials, where the system will first validate the username and password, then provide a token that will be used to access and interact with the other endpoints.

#### Data Persistence
The system will persist data in a relational database like PostgreSQL, using an ORM to better structure and organize the models.

#### Task Management
Once authenticated, the system will allow users to access a movie list, retrieve specific episode information from a TV show, and also add or create actors.

## Description

The API was developed with a monolithic architecture and a hexagonal architecture pattern.

Postgres was chosen as the database for this project. Although it's a small-scale application, there are various relationships between entities, which makes a relational database the best option. This choice will allow for better organization and clearer structure.

The main features and components of the design are as follows:

1) **Use of Data Models**: Data models are used for entities such as Actors, Movies, Directors, and TV Shows.

2) **Use of Endpoints**: Specific endpoints are used for each functionality, allowing the retrieval of the necessary information from the database.

## Technologies Used

**Main Language**: Typescript

**Runtime**: Node.js

**Framework**: Native Node.js + Express.js

**Database**: PostgreSQL (Relational Database)

**Library**: Sequelize

## Running and Using the API

Below are the steps to set up the server and use the RESTful API:

Before everything, you will need to create a `.env` file with the necessary environment variables for running the project.

`DATABASE_HOST=`

`DATABASE_PORT=`

`DATABASE_USER=`

`DATABASE_PASSWORD=`

`DATABASE_NAME=`

### Locally

1. Open the terminal or command line on your computer.

2. Navigate to the location where you want to clone the repository using the `cd` command (e.g., `cd folder/destination`).

3. Clone the repository by executing the following command:
        git clone <REPOSITORY_URL>
    
    Replace `<REPOSITORY_URL>` with the URL of the repository on GitHub.

4. Once the repository is cloned successfully, navigate to the project directory using `cd` (e.g., `cd project_name`).

5. Install the project's dependencies by running the following command:

        `npm install`

    This will install all the dependencies defined in the `package.json` file.

6. Ensure that you have a running instance of PostgreSQL. You can install PGadmin and run a PostgreSQL server.

7. Configure the database connection by creating a `.env` file and filling in the necessary data for the connection.

8. Start the server by running one of the following commands:

    - `npm start`: to start the server with Express.

        This will start the server and it will be ready to receive requests on the specified port.

9. Now you can start making HTTP requests to the different endpoints using tools like Postman or Insomnia. For example:

        `http://localhost:3001/<SPECIFIC_ENDPOINT>`

You are now ready to clone the repository, set up the server, and use the API locally!

## Important Notes - Things to Highlight

In this section, I will comment on some improvements and additional considerations for the project. While many additional features could be implemented, I will focus on what I would have added to improve the requested service.

- **Add Missing Endpoints**: For full functionality, it would be ideal to add the complete CRUD, meaning for each model or entity, you could establish full CRUD operations. For example, updating movies, adding new ones, deleting actors with cascading deletions, etc.

- **Add Docker**: To avoid issues running the project locally on different machines, it would be ideal to add Docker to containerize the project.

- **Add Testing**: It's essential that our project has a testing section. Testing specific functionalities or end-to-end tests using tools like Jest is a must.

- **Add Documentation**: While this README exists, it's crucial to document the entire API in detail, with something like SWAGGER. This should describe what each endpoint does, what data needs to be passed, the architecture used, and other important information so that someone else who needs to modify this can read and understand it.

Each of these suggestions was not implemented solely due to time constraints, but it seemed important to mention how I would improve and expand the application.
