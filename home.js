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

window.onload = function () {
	getArtistCards()
}





const searchInput = document.getElementById("search-input").value
console.log("HELLO")
const getArtistCards = () => {
	container.innerHTML = ""
	console.log("hello")
	const searchInput = document.getElementById("search-input").value
	fetch(
		`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput}`
	)
		.then((resolution) => resolution.json())
		.then((resolution) => {
			console.log("HI")
			console.log(resolution)
			console.log(resolution.data)
			data = resolution.data
			data.forEach((object) => {
				createTheCard(object)
			})
		})
}

const container = document.getElementById("row")

const createTheCard = (search) => {
	const artistTemplate = `
           <div class="card col-6 col-md-4 col-lg-2">
            <div class="album-container card">
                <img src="${search.album.cover_medium}" class="img-fluid" onclick="albumPage()">
                    <img id="logo" src="spotifylogo.png" width="30" height="30" alt="">
                        <p class="album-artist card-text">${search.title}</p>
            </div>
        </div>
        `

	container.innerHTML += artistTemplate
}

const albumPage = () => {
    fetch(
			`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput}`
		)
			.then((resolution) => resolution.json())
			.then((resolution) => {
				data = resolution.data
				return data
			})
            console.log(data)
    let wholePage = document.querySelector("#wholepage")
    wholePage.innerHTML = 
			`<div class="content-page">
				<div class="container p-5">
					<div class="row">
						<div class="col-12 col-md-4" id="headerBox">
							<div class="d-flex justify-content-center justify-content-md-end">
								<div class="text-center">
									<img
										src="${data[0].album.cover_medium}"
										alt=""
										class="cover"
									/>
									<h2 class="mt-2 mb-0">
										Bohemian Rhapsody (The Original Soundtrack)
									</h2>
									<a href="artist.html">
										<p class="d-none d-md-block smallest-grey-text mb-4">
											Queen
										</p>
									</a>
									<button
										type="button"
										class="d-none d-md-inline btn btn-primary btn-round px-45"
									>
										PLAY
									</button>
									<p class="d-none d-md-block smallest-grey-text mb-4 mt-2">
										1974 • 16 SONGS
									</p>
									<p class="d-none d-md-block medium-white-text pointer">
										<i class="far fa-heart mr-3"></i> •••
									</p>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-8">
							<div class="col-12 rd d-flex pb-2 mt-5 mt-md-0">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">20th Century Fox Fanfare</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">0:25</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Somebody To Love</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">4:56</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Doing All Right</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">3:17</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">
										Keep Yourself Alive - Live At The Rainbow
									</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">3:56</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Killer Queen</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">2:59</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Fat Bottomed Girls</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">4:38</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Bohemian Rhapsody</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">5:55</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Now I'm Here</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">4:26</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Crazy Little Thing Called Love</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">2:43</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">
										Love Of My Life - Live At Rock In Rio
									</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">4:29</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">We Will Rock You - Movie Mix</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">2:09</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Another One Bites The Dust</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">3:35</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">I Want To Break Free</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">4:43</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Under Pressure</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">4:04</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Who Wants To Live Forever</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">4:14</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Bohemian Rhapsody - Live Aid</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">2:28</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Radio Gaga - Live Aid</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">4:06</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Ay-Oh - Live Aid</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">0:41</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Hammer To Fail - Live Aid</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">4:04</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">
										We Are The Champions - Live Aid
									</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">3:57</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Bohemian Rhapsody - Live Aid</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">2:28</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">Don't Stop Me Now - Revisited</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">3:38</p>
								</div>
							</div>
							<div class="col-12 rd d-flex py-2">
								<div class="rd d-flex align-content-start py-1 px-2">
									<i class="fas fa-music smallest-grey-text"></i>
								</div>
								<div class="song">
									<p class="small-white-text">The Show Must Go On</p>
									<p class="smallest-grey-text">Queen</p>
								</div>
								<div class="ml-auto">
									<p class="smallest-serif-text">4:32</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`}


// template for card <div class="row no-gutters">
// <div class="col-6 col-md-4 col-lg-2">
//     <div class="album-container card">
//         <img src="spice.jpg" class="img-fluid">
//         <img id="logo" src="spotifylogo.png" width="30" height="30" alt="">
//         <p class="album-artist card-text">The Spice Girls</p>
//     </div>
// </div>

// const loadAlbumHeader = () => {
//     console.log(searchInput)
// }

// // ;<div class="d-flex justify-content-center justify-content-md-end">
// 	<div class="text-center">
// 		<img
// 			src="https://m.media-amazon.com/images/I/812nvM0bG-L._SS500_.jpg"
// 			alt=""
// 			class="cover"
// 		/>
// 		<h2 class="mt-2 mb-0">Bohemian Rhapsody (The Original Soundtrack)</h2>
// 		<a href="artist.html">
// 			<p class="d-none d-md-block smallest-grey-text mb-4">Queen</p>
// 		</a>
// 		<button
// 			type="button"
// 			class="d-none d-md-inline btn btn-primary btn-round px-45"
// 		>
// 			PLAY
// 		</button>
// 		<p class="d-none d-md-block smallest-grey-text mb-4 mt-2">
// 			1974 • 16 SONGS
// 		</p>
// 		<p class="d-none d-md-block medium-white-text pointer">
// 			<i class="far fa-heart mr-3"></i> •••
// 		</p>
// 	</div>
// </div>

// export function loadAlbumHeader(){}

let parentDivs = document.querySelectorAll(
	"body > div > div > div > div.col-12.col-md-8 > div"
)
// console.log(parentDivs[0].firstElementChild.innerHTML)

const changeToPlay = (e) => {
	let parent = e.currentTarget
	let iconDiv = parent.firstElementChild
	iconDiv.innerHTML = '<i class="far fa-play-circle icon-grey-md"></i>'
}
const changeToNote = (e) => {
	let parent = e.currentTarget
	let iconDiv = parent.firstElementChild
	iconDiv.innerHTML = '<i class="fas fa-music smallest-grey-text"></i>'
}

parentDivs.forEach((x) => {
	x.onmouseover = changeToPlay
	x.onmouseout = changeToNote
})
