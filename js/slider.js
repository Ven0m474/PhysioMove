let curImage = 0
const sliderRef = document.querySelector("#sliderImg")

const imgs = [
    "gallery1.jpg",
    "gallery2.jpg",
    "gallery3.jpg",
    "gallery4.jpg",
    // "gallery5.jpg",
    // "gallery6.jpg",
    // "gallery7.jpg",
    "gallery8.jpg",
    "gallery9.jpg",
    "gallery10.jpg"
]
function decImg() {
    curImage--
    if (curImage<0) {
        curImage = imgs.length-1;
    }
    sliderRef.src = `img/${imgs[curImage]}`
}
function incImg() {
    curImage++
    if (curImage>=imgs.length) {
        curImage = 0;
    }
    sliderRef.src = `img/${imgs[curImage]}`
    console.log(`img/${imgs[curImage]}`)
}
const sliderBtns = document.querySelectorAll("#slider button")
sliderBtns[0].addEventListener("click", decImg)
sliderBtns[1].addEventListener("click", incImg)