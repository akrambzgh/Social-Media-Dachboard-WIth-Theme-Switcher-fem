let switcher = document.querySelector(".switch")
let header = document.querySelector(".header")
let allFansBoxes = document.querySelectorAll(".box")
let allOverviewCards = document.querySelectorAll(".card")
let overviewTitle = document.querySelector(".head")
switcher.onclick = () => {
    switcher.classList.toggle("click")

    header.classList.toggle("dark")

    allFansBoxes.forEach((box) => {
        box.classList.toggle("dark")
    })
    allOverviewCards.forEach((card) => {
        card.classList.toggle("dark")
    })

    document.body.classList.toggle("dark")

    overviewTitle.classList.toggle("white")
}