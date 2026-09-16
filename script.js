// =====================================================
// GAMEX - JAVASCRIPT
// =====================================================


// ================= SEARCH =================

const searchBtn = document.getElementById("searchBtn");
const searchSection = document.getElementById("searchSection");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {

    searchSection.classList.toggle("show");

    if (searchSection.classList.contains("show")) {
        searchInput.focus();
    }

});


// ================= SEARCH GAMES =================

searchInput.addEventListener("input", () => {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const games =
        document.querySelectorAll(".game-card");

    games.forEach(game => {

        const gameName =
            game.querySelector("h3")
                .textContent
                .toLowerCase();

        if (gameName.includes(searchText)) {
            game.style.display = "";
        } else {
            game.style.display = "none";
        }

    });

});


// ================= DARK / LIGHT MODE =================

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (
        document.body.classList.contains("light-mode")
    ) {

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "gamex-theme",
            "light"
        );

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "gamex-theme",
            "dark"
        );

    }

});


// Load saved theme

const savedTheme =
    localStorage.getItem("gamex-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeBtn.textContent = "☀️";

}


// ================= EXPLORE BUTTON =================

const exploreBtn =
    document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {

    document.querySelector(".games-section")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// ================= TRENDING BUTTON =================

const trendingBtn =
    document.querySelector(".secondary-btn");

trendingBtn.addEventListener("click", () => {

    document.querySelector(".games-section")
        .scrollIntoView({
            behavior: "smooth"
        });

});

// ================= PLAY BUTTONS =================

const playButtons = document.querySelectorAll(".play-btn");

playButtons.forEach(button => {

    button.addEventListener("click", () => {

        const gameName = button
            .closest(".game-card")
            .querySelector("h3")
            .textContent;

        if (gameName === "Snake") {

            window.location.href = "games/snake.html";

        }

        else if (gameName === "Tic-Tac-Toe") {

            window.location.href = "games/tictactoe.html";

        }

        else if (gameName === "Tetris") {

            window.location.href = "games/tetris.html";

        }

        else if (gameName === "Pong") {

            window.location.href = "games/pong.html";

        }

        else if (gameName === "Memory Cards") {

            window.location.href = "games/memory.html";

        }

        else if (gameName === "Endless Runner") {

            window.location.href = "games/runner.html";

        }

        else if (gameName === "2048") {

            window.location.href = "games/2048.html";

        }
        else if (gameName === "Minesweeper") {

            window.location.href = "games/minesweeper.html";

}         
        else if (gameName === "Flappy Bird") {

         window.location.href = "games/flappy.html";

}
        else if (gameName === "Car Racing") {
           window.location.href = "games/car.html";
}
        else if (gameName === "Bike Racing") {
    window.location.href = "games/bike.html";
}

        else {

            alert(
                gameName +
                " will be available soon! 🎮"
            );

        }

    });

});
  

// ================= MOBILE MENU =================

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    if (navbar.style.display === "flex") {

        navbar.style.display = "none";

    } else {

        navbar.style.display = "flex";

        navbar.style.position = "absolute";

        navbar.style.top = "75px";

        navbar.style.left = "0";

        navbar.style.width = "100%";

        navbar.style.padding = "20px";

        navbar.style.flexDirection = "column";

        navbar.style.background = "#0f0f16";

        navbar.style.borderBottom =
            "1px solid #292936";

    }

});


// ================= WELCOME MESSAGE =================

console.log(
    "🎮 GameX loaded successfully!"
);