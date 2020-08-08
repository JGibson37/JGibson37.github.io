

const addEventListeners = () =>{
    const kata = document.getElementById("kata")
    kata.addEventListener("click", () =>{
        let kataModal = document.getElementById("kata-modal")
        kataModal.style.display = "block"
        let span = document.getElementsByClassName("close-kata")[0];
        span.addEventListener("click", () =>{
            kataModal.style.display= "none"
        })
    })
    const virutalPet = document.getElementById("pet")
    virutalPet.addEventListener("click", () =>{
        let petModal = document.getElementById("pet-modal")
        petModal.style.display = "block"
        let span = document.getElementsByClassName("close-pet")[0];
        span.addEventListener("click", () =>{
            petModal.style.display= "none"
        })
    })
    const codey = document.getElementById("codey")
    codey.addEventListener("click", () =>{
        let codeyModal = document.getElementById("codey-modal")
        codeyModal.style.display = "block"
        let span = document.getElementsByClassName("close-codey")[0];
        span.addEventListener("click", () =>{
            codeyModal.style.display= "none"
        })
    })
    const portfolio = document.getElementById("portfolio")
    portfolio.addEventListener("click", () =>{
        let portfolioModal = document.getElementById("portfolio-modal")
        portfolioModal.style.display = "block"
        let span = document.getElementsByClassName("close-portfolio")[0];
        span.addEventListener("click", () =>{
            portfolioModal.style.display= "none"
        })
    })
    const artists = document.getElementById("artists")
    artists.addEventListener("click", () =>{
        let artistsModal = document.getElementById("artists-modal")
        artistsModal.style.display = "block"
        let span = document.getElementsByClassName("close-artists")[0];
        span.addEventListener("click", () =>{
            artistsModal.style.display= "none"
        })
    })
}

addEventListeners()