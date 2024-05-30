const btnRef = document.querySelector("button#expand")
const galleryRef = document.querySelector("section#gallery")

btnRef.addEventListener("click", () => {
    if (!galleryRef.classList.contains("expanded")) {
        galleryRef.classList.add("expanded")
        btnRef.textContent = "Pokaż mniej"
    } else {
        galleryRef.classList.remove("expanded")
        btnRef.textContent = "Pokaż więcej"
    }
})

document.addEventListener("scroll", () => {
    let bounds = galleryRef.getBoundingClientRect()
    if (bounds.top+bounds.height*2<window.scrollY || bounds.top>window.scrollY) {
        // console.log("a")
        galleryRef.classList.add("non-fixed-btn")
    } else {
        galleryRef.classList.remove("non-fixed-btn")
    }
})