
/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

// const fishList = () => {
//     // Iterate the collection of fish objects
//     for (const currentFishObject of fishCollection) {

//         // Convert the current fish to its HTML representation
//         const fishHTML = fishConverter(currentFishObject)

//         // Find the <article> element in index.html
//         const fishArticleElement = document.querySelector(".fishList")

//         // Put the fish HTML representation inside the <article> element
//         fishArticleElement.innerHTML += fishHTML
//     }
// }

const fishArticleElement = document.querySelector(".fishList")

const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

// Function to show soldier fish in the browser
const showSoldierFish = () => {
    const fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}


// Function to show common fish in the browser
const showOtherFish = () => {
    const fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}


const fishList = () => {
    // Invoke all three functions here
    showHolyFish()
    showSoldierFish()
    showOtherFish()
}