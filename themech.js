const themeBtn = document.querySelector(".them-btn")

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light"

const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon"

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme")
    themeBtn.classList.toggle("sun")

    localStorage.setItem("saved-theme", getCurrentTheme())
    localStorage.setItem("saved-icon", getCurrentIcon())
})

const savedTheme = localStorage.getItem("saved-theme")
const savedIcon = localStorage.getItem("saved-icon")

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme")
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun")

}