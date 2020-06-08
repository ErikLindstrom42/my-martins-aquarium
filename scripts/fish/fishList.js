
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

const fishTypeDropdown = document.querySelector(".typeChoice")

const clearFishList = () => contentTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", clickEvent => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
        displayFish()
    }
    else if (userChoice === "soldier") {
        clearFishList()
        showHolyFish()
        displayFish()
    }
    else if (userChoice === "plebs") {
        clearFishList()
        showHolyFish()
        displayFish()
    }

    else {
        clearFishList()
        showOtherFish()
        displayFish()
    }
    
})


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


// const fishList = () => {
//     // Invoke all three functions here
//     showHolyFish()
//     showSoldierFish()
//     showOtherFish()
// }


const fishList = () => {
    getFish().then(
        () => {
            /*
                If you don't invoke these functions inside this
                callback function for the then() method, they won't
                render anything because there is no data retrieved
                from the API yet
            */
            showHolyFish()
            showSoldierFish()
            showCommonFish()
        }
    )
}