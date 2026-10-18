var modeBtn = document.getElementById("modeBtn");

if (localStorage.getItem("mode") == "dark") {
    document.body.classList.add("dark");
    modeBtn.textContent = "Light Mode";
}

modeBtn.onclick = function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
        modeBtn.textContent = "Light Mode";
    } else {
        localStorage.setItem("mode", "light");
        modeBtn.textContent = "Dark Mode";
    }
};

var synButtons = document.getElementsByClassName("synBtn");

for (var i = 0; i < synButtons.length; i++) {
    synButtons[i].onclick = function () {
        var text = this.nextElementSibling;
        if (text.style.display == "block") {
            text.style.display = "none";
            this.textContent = "Show Synopsis";
        } else {
            text.style.display = "block";
            this.textContent = "Hide Synopsis";
        }
    };
}

var likeBtn = document.querySelector(".likeBtn");

if (likeBtn) {
    if (localStorage.getItem(likeBtn.id) == "liked") {
        likeBtn.textContent = "Liked!";
    }
    likeBtn.onclick = function () {
        if (localStorage.getItem(likeBtn.id) == "liked") {
            localStorage.removeItem(likeBtn.id);
            likeBtn.textContent = "Like";
        } else {
            localStorage.setItem(likeBtn.id, "liked");
            likeBtn.textContent = "Liked!";
        }
    };
}

var search = document.getElementById("search");
var genre = document.getElementById("genre");

function filterBooks() {
    var cards = document.querySelectorAll("#books .card");
    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].querySelector("h3").textContent.toLowerCase();
        var okTitle = title.includes(search.value.toLowerCase());
        var okGenre = genre.value == "" || cards[i].dataset.genre == genre.value;
        if (okTitle && okGenre) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

if (search) {
    search.oninput = filterBooks;
    genre.onchange = filterBooks;
}