const api_key = process.env.api_key;

export async function getMoviesAndStoreThem() {

    try {
        let fetchMovies = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key='+api_key)

        if (fetchMovies.ok){
        let response = await fetchMovies.json()
        return response.results
        }
        
        else {
            throw new Error("Auth failed")
        }

    } catch (error) {
        return error;
    }
    
}
