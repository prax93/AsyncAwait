import { getMoviesAndStoreThem } from "./fetchservice.js";

let moviesList = []

async function getMovies() {
  try {
    let movies = await getMoviesAndStoreThem()

    if(movies.error){
      throw new Error(movies.error)
    }
    else {
      return movies
    }

  } catch (error) {
    console.log(error.message)
  }
}

moviesList = await getMovies()

moviesList.forEach(element => {
  console.log(element.id)
});