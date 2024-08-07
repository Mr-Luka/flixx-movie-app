const global = {
    currentPage: window.location.pathname
}
console.log(global.currentPage) // getting a current page
// If I click shows, it will show: /shows.html


// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
    const API_KEY = '5ffe25a4c577dde1c72e53c30bb92fd2';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);

    const data = await response.json();
    return data
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
            console.log('Home');
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