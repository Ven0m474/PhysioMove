document.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--scroll-y-px", -window.scrollY + "px")
    document.documentElement.style.setProperty("--scroll-y-deg", -window.scrollY + "deg")
    window.scrollY > 0 ? document.body.classList.add("scroll-non-zero") : document.body.classList.remove("scroll-non-zero")
})