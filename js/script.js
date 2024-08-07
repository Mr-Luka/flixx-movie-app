const global = {
    currentPage: window.location.pathname
}
console.log(global.currentPage) // getting a current page
// If I click shows, it will show: /shows.html


// Init app
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
}

document.addEventListener('DOMContentLoaded', init);