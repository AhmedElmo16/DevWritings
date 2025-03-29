let active = false;
const activeFilters = [];

function filter(element) {
    const highlightColor = getComputedStyle(document.documentElement)
                            .getPropertyValue('--highlight');

    const secondaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--secondary');

    const articles = Array.from(document.querySelectorAll('.article'));


    if(!activeFilters.includes(element.className)) {
        activeFilters.push(element.className);
        
        active = true;
        element.style.backgroundColor = highlightColor;
    }
    else {
        activeFilters.splice(activeFilters.indexOf(element.className), 1);

        active = false;
        element.style.removeProperty('background-color');
    }

    articles.forEach(article => {
        if(activeFilters.length === 0) {
            article.style.display = 'flex';
        }

        for(let activeFilter of activeFilters) {
            if(article.classList.contains(activeFilter)) {
                article.style.display = 'flex';
                break;
            }
            else {
                article.style.display = 'none';
            }
        }
    })
}
