document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button")
    button.addEventListener(`click`, questLoad);
});

function questLoad() {
    let questBox = document.getElementById(`quest`)
    let questList = []

    // number of entries
    questBox.innerText = questList[Math.floor(Math.random() * )]
}