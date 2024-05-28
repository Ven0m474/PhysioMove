const sendBtn = document.querySelector("#send")
const cardList = document.querySelector("#cardList")

function addCard(title = "xD") {
    let el = document.createElement("div")
    let tx = document.createTextNode(title)
    el.appendChild(tx)
    cardList.appendChild(el)
}

sendBtn.addEventListener("click", addCard)