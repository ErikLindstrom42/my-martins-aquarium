
/*
Responsible for generating a list of quote HTML
representations, and putting in the browser
*/

const quoteList = () => {
    // Iterate the collection of quote objects
    for (const currentQuoteObject of quoteCollection) {

        // Convert the current quote to its HTML representation
        const quoteHTML = quoteConverter(currentQuoteObject)

        // Find the <article> element in index.html
        const quoteArticleElement = document.querySelector(".quoteList")

        // Put the quote HTML representation inside the <article> element
        quoteArticleElement.innerHTML += quoteHTML
    }
}