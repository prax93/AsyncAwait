import { getMoviesAndStoreThem } from "./fetchservice.js";

let moviesList = []

async function getMovies() {
  try {
    let movies = await getMoviesAndStoreThem()

    if(!movies.error){
      return movies
    }
    else {
      throw new Error(movies.error.message)
    }

  } catch (error) {
    return error
  }
}

moviesList = await getMovies()

if(!moviesList instanceof Error){

  moviesList.forEach(element => {
    console.log(element.id)
  })

}
else{
  console.log(moviesList.message)
}
