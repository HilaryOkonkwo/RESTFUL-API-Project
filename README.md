# RESTFUL-API-Project
A simple Express.js REST API project that demonstrates how to create a basic movie management API with CRUD operations.

## Express REST API Tutorial
This is a RESTFUL API project that demonstrates how to create a basic movie management API with CRUD operations.

## Prerequisites

 1. Node.js (v14 or higher)

 2. npm (Node Package Manager)

 3. Postman 

 4. Nodemon

## Getting Started

 1. Clone the repository:
    git clone https://github.com/HilaryOkonkwo/RESTFUL-API-Project.git

    cd express-rest-tutorial

 2. Install dependencies:

    npm install

 3. Start the server:

    nodemon server.js

  The server will start running on http://localhost:3000

## API Endpoints

### Get All Movies
- **GET** `/movies`
- Returns a list of all movies

### Get Movie by ID
- **GET** `/movies/:id`
- Returns a specific movie by its ID

### Create New Movie
- **POST** `/movies`
- Creates a new movie
- Required fields in request body:
  ```json
  {
    "title": "Movie Title",
    "genre": "Movie Genre",
    "year": 2024
  }
  ```

### Update Movie
- **PUT** `/movies/:id`
- Updates an existing movie
- Required fields in request body:
  ```json
  {
    "title": "Updated Title",
    "genre": "Updated Genre",
    "year": 2024
  }
  ```

### Delete Movie
- **DELETE** `/movies/:id`
- Deletes a movie by its ID

## Testing with Thunder Client

1. Download and install Postman for Desktop from your preferred browser

2. Click on the Postman icon in your desktop 

3. Create a new request collection for the movie API

4. Test each endpoint using the following examples:

### Create a Movie
- Method: POST
- URL: `http://localhost:8000/movies`
- Body (JSON):
  ```json
  {
    "title": "The Matrix",
    "genre": "Sci-Fi",
    "year": 1999
  }
  ```

### Get All Movies
- Method: GET
- URL: `http://localhost:8000/movies`

### Get Movie by ID
- Method: GET
- URL: `http://localhost:8000/movies/1`

### Update Movie
- Method: PUT
- URL: `http://localhost:8000/movies/1`
- Body (JSON):
  ```json
  {
    "title": "The Matrix Reloaded",
    "genre": "Sci-Fi",
    "year": 2003
  }
  ```

### Delete Movie
- Method: DELETE
- URL: `http://localhost:8000/movies/1`

## Error Handling

The API includes basic error handling:
- 400: Bad Request (missing required fields)
- 404: Not Found (movie not found)
- 500: Internal Server Error

## Note

This is a demonstration project using in-memory storage. In a production environment, you would want to:
- Use a proper database (MongoDB, PostgreSQL, etc.)
- Implement proper authentication and authorization
- Use environment variables for configuration
- Implement proper error handling
- Add logging 

## License
  This Project is licensed under the [MIT](https://github.com/HilaryOkonkwo/RESTFUL-API-Project/blob/main/LICENSE)

## Contact
Feel free to connect via:

Email:somtoochukwuhilary@gmail.com

Github: https://github.com/HilaryOkonkwo

Mobile No: +2348164514675