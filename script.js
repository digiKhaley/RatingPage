let star1 = document.querySelector(".star1")
let star2 = document.querySelector(".star2")
let star3 = document.querySelector(".star3")
let star4 = document.querySelector(".star4")
let star5 = document.querySelector(".star5")
let btn = document.querySelector("button")
let stars = false

let modal = document.querySelector("#modal-container")
let pModal = document.querySelector("p")

star1.addEventListener("click", () => {
    star1.className = "ri-star-fill"
    star2.className = "ri-star-line"
    star3.className = "ri-star-line"
    star4.className = "ri-star-line"
    star5.className = "ri-star-line"

    stars = true
    btn.textContent = "Remove All Ratings 😭💔"

    modal.classList.add("show")
    pModal.textContent = "😢 Oh no! We're heartbroken! 💔"
})

star2.addEventListener("click", () => {
    star1.className = "ri-star-fill"
    star2.className = "ri-star-fill"
    star3.className = "ri-star-line"
    star4.className = "ri-star-line"
    star5.className = "ri-star-line"

    stars = true
    btn.textContent = "Remove All Ratings 😭💔"

    modal.classList.add("show")
    pModal.textContent = "🥺 Thanks for trying us out! We're working to improve."
})

star3.addEventListener("click", () => {
    star1.className = "ri-star-fill"
    star2.className = "ri-star-fill"
    star3.className = "ri-star-fill"
    star4.className = "ri-star-line"
    star5.className = "ri-star-line"

    stars = true
    btn.textContent = "Remove All Ratings 😭💔"

    modal.classList.add("show")
    pModal.textContent = "🙂 Not bad! We would do better."
})

star4.addEventListener("click", () => {
    star1.className = "ri-star-fill"
    star2.className = "ri-star-fill"
    star3.className = "ri-star-fill"
    star4.className = "ri-star-fill"
    star5.className = "ri-star-line"

    stars = true
    btn.textContent = "Remove All Ratings 😭💔"

    modal.classList.add("show")
    pModal.textContent = "😃 Yay! Thanks a lot! Almost perfect - just one more star next time? 🌟"
})

star5.addEventListener("click", () => {
    star1.className = "ri-star-fill"
    star2.className = "ri-star-fill"
    star3.className = "ri-star-fill"
    star4.className = "ri-star-fill"
    star5.className = "ri-star-fill"

    stars = true
    btn.textContent = "Remove All Ratings 😭💔"

    modal.classList.add("show")
    pModal.textContent = "🥳 Woohoo! You're amazing! Thanks for the 5-star love! 💖✨💯"
})


btn.addEventListener("mouseenter", () => {
    if (stars === true) {
        btn.textContent = "Please don't 😖🙏"
    }
})

btn.addEventListener("click", () => {
    star1.className = "ri-star-line"
    star2.className = "ri-star-line"
    star3.className = "ri-star-line"
    star4.className = "ri-star-line"
    star5.className = "ri-star-line"


    if (stars === false || stars === "removed") {
        btn.textContent = "..."
    } else {
        stars = "removed"
        btn.textContent = "You Removed it 😭💔💔"
    }
})

btn.addEventListener("mouseleave", () => {
    if (stars === true) {
        btn.textContent = "Remove All Ratings 😭💔"
    } else if (stars === "removed") {
        btn.textContent = "You Removed it 😭💔💔"
    } else if (stars === false) {
        btn.textContent = "..."
    }
})

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show")
    }
})

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("show")
    }
});