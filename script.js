document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button")
    button.addEventListener(`click`, questLoad);
});

function questLoad() {
    let questBox = document.getElementById(`quest`)
    let questList = ["Can only enter through fire exit",
        "Kill a player, if accused you must kys",
        "Kill something (players included)",
        "No 2-handed items",
        "Can't use computer",
        "No bought items",
        "Cant use tp, must die if someone tps them",
        "Has to use inverse",
        "Buddy system",
        "Stalk a player from a distance",
        "Mute (No talking)",
        "Kill a monster",
        "Cant open doors inside the facility",
        "Cant leave the ship",
        "Cant crouch around dogs (only dodging)",
        "Boy who cried wolf (shout random monster names through out)",
        "Must stay out of sight of other players in the building",
        "Crouch only",
        "Roleplay as bear grills"]

    // number of entries
    questBox.innerText = questList[Math.floor(Math.random() * 19)]
}