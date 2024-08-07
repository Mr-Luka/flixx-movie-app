const global = {
    currentPage: window.location.pathname
}
console.log(global.currentPage) // getting a current page
// If I click shows, it will show: /shows.html


async function displayPopularMovies(){
    const {results} = await fetchAPIData('movie/popular'); // {} destructuring
    // console.log(results)
    results.forEach(movie=> {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            ${
                movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />` : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;
        document.querySelector('#popular-movies').appendChild(div);
    })
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
    const API_KEY = '5ffe25a4c577dde1c72e53c30bb92fd2';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);

    const data = await response.json();
    return data;
}

// Highlight active link (movies, TV Shows)
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === global.currentPage) { // checking if the link is on the page we are at
            link.classList.add('active'); 
        }
    })
}


// Init app - checking on what page we are (home, movies, tv-shows, movie details, tv-details)
function init() { // page router
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displayPopularMovies();
            break;
        case '/shows.html':
            console.log('Shows');
            break;
        case '/movie-details.html':
            console.log('Movie details');
            break;
        case '/tv-details.html':
            console.log('TV details');
            break;
        case '/search.html':
            console.log('Search');
            break;
    }
    highlightActiveLink(); // it will fire off only on the page we are at
}

document.addEventListener('DOMContentLoaded', init);