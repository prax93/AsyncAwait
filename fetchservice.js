
export async function getMoviesAndStoreThem() {

    try {
        let fetchedMovies = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=xxx')

        if (fetchedMovies.ok){

        let response = await fetchedMovies.json()
        return response.results

        }
        else {
            throw new Error("Auth failed")
        }

    } catch (error) {
        return error;
    }
    
}
