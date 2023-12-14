import { getMoviesAndStoreThem } from "./fetchservice.js";

let moviesList = []

moviesList = await getMoviesAndStoreThem()

if(!moviesList instanceof Error){

  moviesList.forEach(element => {
    console.log(element.id)
  })

}
else{
  console.log(moviesList)
}
