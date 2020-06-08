let fish = []

export const getFish = () => {
    return fetch("http://localhost:8088/fish")
        .then(response => response.json())
        .then(
            allFishFromAPI => {
                console.table(allFishFromAPI)
                fish = allFishFromAPI
            }
        )
}




const fishCollection = [
    {
        name: "Bart",
        food: "algae",
        species: "big mouth billy bass",
        size: 10,
        location: "Jamaica",
        picture: "https://thumbs-prod.si-cdn.com/qXrJJ-l_jMrQbARjnToD0fi-Tsg=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg"
        
    } ,
    {
        name: "Homer",
        food: "fingernails",
        species: "african sea cucumber",
        size: 8,
        location: "Bermuda",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg"
        
    } ,
    {
        name: "Marge",
        food: "shrimp lips",
        species: "atlantic pickle",
        size: 6,
        location: "Tijuana",
        picture: "https://www.thisiscolossal.com/wp-content/uploads/2019/06/tsubaki-12-960x768@2x.jpg"
        
    } ,
    {
        name: "Lisa",
        food: "ketchup",
        species: "parrothead",
        size: 7,
        location: "Northern Antartica",
        picture: "https://images.immediate.co.uk/production/volatile/sites/4/2019/10/GettyImages-1165950279-07fd10d.jpg?webp=true&quality=90&crop=4px%2C80px%2C931px%2C401px&resize=931%2C395"
        
    } ,
    {
        name: "Otto",
        food: "eggs over-easy",
        species: "juggalo",
        size: 5,
        location: "Western Narnia",
        picture: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        
    }
]


// 3, 6, 9, 12, etc... fish
const mostHolyFish = () => {
    const holyFish = []

    for (fish of fishCollection) {
        if(fish.size % 3 === 0) {
            holyFish.push(fish)
        }
        
    }
    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
    const soldierFishies=[]
    for (fish of fishCollection) {
        if(fish.size % 5 === 0 && fish.size % 3 !==0) {
            soldierFishies.push(fish)
        }
        
        
    }
    return soldierFishies
}

// Any fish not a multiple of 3 or 5
const nonHolyFish = () => {
    const nonHolyFishies=[]
    for (fish of fishCollection) {
        if(fish.size % 5 !== 0 && fish.size % 3 !==0) {
            nonHolyFishies.push(fish)
        }
        
        
    }
    return nonHolyFishies
}