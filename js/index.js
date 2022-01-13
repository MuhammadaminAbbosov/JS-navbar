let menuBtn = document.getElementById("menuBtn")
let aside = document.getElementById("aside")
let close = document.getElementById("close")

menuBtn.addEventListener("click", function(e) {
    e.preventDefault()

    aside.classList.toggle("active")
})

close.addEventListener("click", function(e) {
    e.preventDefault()

    aside.classList.toggle("active")
})
