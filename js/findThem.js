const sendBtn = document.querySelector("#send")
const cardList = document.querySelector("#cardList")
const txtArea = document.querySelector("textarea")

function addCard(card) {
    let el = document.createElement("div")
    let header = document.createElement("h3")
    let headerTx = document.createTextNode(card.title)
    header.appendChild(headerTx)
    el.appendChild(header)

    let desc = document.createElement("p")
    let descTx = document.createTextNode(card.desc)
    desc.appendChild(descTx)
    el.appendChild(desc)

    let timeIcon = document.createElement("img")
    timeIcon.src = "img/time_icon.svg"
    el.appendChild(timeIcon)

    let time = document.createElement("span")
    let timeTx = document.createTextNode(card.timeLength)
    time.appendChild(timeTx)
    el.appendChild(time)

    let priceIcon = document.createElement("img")
    priceIcon.src = "img/price_icon.svg"
    el.appendChild(priceIcon)

    let price = document.createElement("span")
    let priceTx = document.createTextNode(card.price + "zł")
    price.appendChild(priceTx)
    el.appendChild(price)

    cardList.appendChild(el)
}

function clear() {
    cardList.innerHTML = ""
}
document.querySelector("button[type=reset]").addEventListener("click", clear)

function handleSend() {
    cardList.innerHTML = ""
    const cards = [
        {
            title: "Masaż leczniczy",
            desc: "Relaksacja mięśni i poprawa krążenia.",
            price: 89.99,
            timeLength: "45 min",
            regex: /masa[żz]|mi[ęe][sś]nie|kr[ąa]żenie|relaks|leczenie|terapia/i
        },
        {
            title: "Kinezyterapia",
            desc: "Ćwiczenia terapeutyczne dla zdrowia stawów.",
            price: 74.99,
            timeLength: "60 min",
            regex: /kinezy|terapia|[ćc]wiczenia|staw[óo]w|rozci[ąa]ganie|ruch|terapia ruchowa/i
        },
        {
            title: "Terapia manualna",
            desc: "Techniki manualne dla złagodzenia bólu.",
            price: 99.99,
            timeLength: "40 min",
            regex: /terapia|manualna|manualne|b[óo]l|kr[ęe]gos[łl]up|kr[ęe]gos[łl]upa|plec|techniki|manualne/i
        },
        {
            title: "Fizykoterapia",
            desc: "Zabiegi z użyciem prądów i ultradźwięków.",
            price: 59.99,
            timeLength: "30 min",
            regex: /fizyko|terapia|pr[ąa]dy|ultrad[źz]wi[ęe]ki|elektro|terapia|zabiegi|fizyko|terapeut|yczne/i
        },
        {
            title: "Terapia punktów spustowych",
            desc: "Redukcja napięcia mięśniowego przez nacisk.",
            price: 79.99,
            timeLength: "35 min",
            regex: /punkty|spustowe|napi[ęe]cie|nacisk|mi[ęe]śnie|trigger|points/i
        },
        {
            title: "Rehabilitacja sportowa",
            desc: "Powrót do formy po urazach sportowych.",
            price: 109.99,
            timeLength: "50 min",
            regex: /rehab|ilitacja|sportowa|uraz|kontuzja|sport|powr[óo]t do|form|rekon|wale|scencja/i
        },
        {
            title: "Masaż relaksacyjny",
            desc: "Złagodzenie stresu i napięcia mięśniowego.",
            price: 69.99,
            timeLength: "60 min",
            regex: /masa[żz]|relaksacyjny|relaks|stres|napi[ęe]cie|relaksacja|odpoczynek|spok[óo]j/i
        },
        {
            title: "Terapia powięziowa",
            desc: "Techniki rozluźniające powięź.",
            price: 84.99,
            timeLength: "45 min",
            regex: /powi[ęe][źz]|rozlu[źz]nianie|fascia|techniki|powi[ęe]ziowe/i
        },
        {
            title: "Elektrostymulacja",
            desc: "Stymulacja mięśni prądami terapeutycznymi.",
            price: 54.99,
            timeLength: "25 min",
            regex: /elektro|stymulacja|pr[aą]d|mi[ęe][sś]nie|pr[ąa]dy|stymulacja|mi[ęe][sś][nń]/i
        },
        {
            title: "Krioterapia",
            desc: "Zabiegi z użyciem zimna dla redukcji bólu.",
            price: 49.99,
            timeLength: "20 min",
            regex: /krioterapia|zimno|redukcja b[óo]lu|ch[łl]odzenie|kriostymulacja/i
        },
        {
            title: "Masaż sportowy",
            desc: "Regeneracja po intensywnym wysiłku fizycznym.",
            price: 79.99,
            timeLength: "55 min",
            regex: /masa[żz] sportowy|regeneracja|wysi[łl]ek|sport|mi[ęe]śnie|regeneracja|powysi[łl]|kowa/i
        },
        {
            title: "Hydroterapia",
            desc: "Terapia wodna dla relaksu i zdrowia.",
            price: 64.99,
            timeLength: "30 min",
            regex: /hydro|terapia|wodna|relaks|zdrowie|wodna|basen|woda/i
        },
        {
            title: "Ultradźwięki",
            desc: "Zabiegi ultradźwiękowe na bóle mięśniowe.",
            price: 44.99,
            timeLength: "20 min",
            regex: /ultrad[źz]wi[ęe]ki|mi[ęe]śnie|b[óo]l|zabiegi ultrad[źz]wi[ęe]kowe/i
        },
        {
            title: "Terapia laserowa",
            desc: "Zabiegi laserowe na stany zapalne.",
            price: 69.99,
            timeLength: "30 min",
            regex: /laser|stany|zapalne|laserowa|laser|leczenie|laserem|laso|terapia/i
        },
        {
            title: "Terapia manualna stawów",
            desc: "Manipulacja stawów dla poprawy ruchomości.",
            price: 94.99,
            timeLength: "40 min",
            regex: /staw[óo]w|manipulacja|ruchomo[śs][ćc]|terapia|manualn|stawy|mobilizacja/i
        },
        {
            title: "Terapia ciepłem",
            desc: "Zabiegi cieplne na bóle mięśniowe.",
            price: 59.99,
            timeLength: "25 min",
            regex: /ciep[łl]o|cieplne|mi[ęe]śnie|b[óo]l|terapia cieplna|zabiegi cieplne/i
        },
        {
            title: "Terapia ultradźwiękowa",
            desc: "Redukcja bólu przez fale ultradźwiękowe.",
            price: 49.99,
            timeLength: "20 min",
            regex: /ultrad[źz]wi[ęe]kowa|redukcja|b[óo]lu|fale|ultrad[źz]wi[ęe]kowe|leczenie|ultrad[źz]wi[ęe]kami/i
        },
        {
            title: "Terapia magnetyczna",
            desc: "Zabiegi magnetyczne na stany zapalne.",
            price: 74.99,
            timeLength: "35 min",
            regex: /magnetyczna|stany|zapalne|terapia|magnetyczna|magnetoterapia|zabiegi|magnetyczne/i
        },
        {
            title: "Terapia falami uderzeniowymi",
            desc: "Intensywna terapia na przewlekły ból.",
            price: 99.99,
            timeLength: "40 min",
            regex: /fale|uderzeniowe|intensywna|przewlek[łl]y|b[óo]l|terapia|falami|uderzeniowymi|fala|uderzeniowa/i
        },
        {
            title: "Rehabilitacja pooperacyjna",
            desc: "Powrót do sprawności po operacji.",
            price: 129.99,
            timeLength: "60 min",
            regex: /pooperacyjna|sprawno[śs][ćc]|operacja|rehabilitacja|powr[óo]t|do|sprawno[śs]ci|rehabilitacja|po|operacji/i
        },
    ];
    let filteredCards = []
    cards.forEach(card => {
        if (card.regex.test(txtArea.value)) {
            filteredCards.push(card)
        }
    })
    filteredCards.forEach(card => {
        addCard(card)
    })
    // addCard(cards[Math.floor(Math.random()*cards.length)])
}

sendBtn.addEventListener("click", handleSend)