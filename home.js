function switchContent(classOnOff) {
    const trending = document.getElementById("home-trending-content")
    const podcasts = document.getElementById("home-podcast-content")
    const genres = document.getElementById("home-genres-content")
    const newContent = document.getElementById("home-new-content")
    const discover = document.getElementById("home-discover-content")
    switch (classOnOff) {
        case "TRENDING":
            trending.classList.remove("d-none")
            podcasts.classList.add("d-none")
            genres.classList.add("d-none")
            newContent.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "PODCASTS":
            podcasts.classList.remove("d-none")
            trending.classList.add("d-none")
            genres.classList.add("d-none")
            newContent.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "GENRES":
            genres.classList.remove("d-none")
            trending.classList.add("d-none")
            podcasts.classList.add("d-none")
            newContent.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "NEW":
            newContent.classList.remove("d-none")
            trending.classList.add("d-none")
            podcasts.classList.add("d-none")
            genres.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "DISCOVER":
            discover.classList.remove("d-none")
            trending.classList.add("d-none")
            podcasts.classList.add("d-none")
            genres.classList.add("d-none")
            newContent.classList.add("d-none")
            break
        default:
            console.error("Error")
    }
}

// window.onload = function () {
//     ()
// }



console.log("HELLO")
const getArtistCards = () => {
    console.log("hello")
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
        .then(resolution => resolution.json())
        .then(resolution => {
            console.log("HI")
            console.log(resolution)
            for (const artist of resolution) createTheCard(artist)

        })
}

const createTheCard = (artist) => {

    const artistTemplate =
        `
            <div class="card" >
                <img src="${artist.picture}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${artist.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
    container.innerHTML += artistTemplate
}





// template for card <div class="row no-gutters">
// <div class="col-6 col-md-4 col-lg-2">
//     <div class="album-container card">
//         <img src="spice.jpg" class="img-fluid">
//         <img id="logo" src="spotifylogo.png" width="30" height="30" alt="">
//         <p class="album-artist card-text">The Spice Girls</p>
//     </div>
// </div>