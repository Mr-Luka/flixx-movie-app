const global = {
    currentPage: window.location.pathname
}
console.log(global.currentPage) // getting a current page
// If I click shows, it will show: /shows.html


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
function init() {
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
    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);