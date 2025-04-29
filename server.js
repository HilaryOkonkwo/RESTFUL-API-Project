import express from 'express';
const app = express();

app.use(express.json());

//Adding a Middleware for Validation. The Middleware performs validation on incoming requests before they reach the route handlers.
const validateMovie =(req, res, next) => {
    if(!req.body.title || !req.body.genre || !req.body.year){
        return res.status(400).send('Ttle, Genre and Year are required');
    }
    //If all required fields are provided, it calls next() to pass control to the next middleware or route.
    next();
}

const movies =[];

//Getting all Movies
app.get('/movies', (req, res) => {
    res.json(movies);
    console.log(movies)
})

//Getting a movie by Id
app.get('/movies/:id', (req, res)=>{
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send("Movie not found");
    res.json(movie);
})

//Add a New Movie(Post Method)
app.post('/movies', validateMovie, (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
      };
      movies.push(movie);
      res.status(201).json(movie);
})

//Update a Movie(Put Method)
app.put('/movies/:id', validateMovie, (req, res)=> {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not found');
  
    movie.title = req.body.title;
    movie.genre = req.body.genre;
    movie.year = req.body.year;
  
    res.json(movie);
})

//Delete a Movie(Delete Method)
app.delete('/movies/:id', (req, res) => {
    const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
    if (movieIndex === -1) return res.status(404).send('Movie not found');
  
    const deletedMovie = movies.splice(movieIndex, 1);
    res.json(deletedMovie);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})