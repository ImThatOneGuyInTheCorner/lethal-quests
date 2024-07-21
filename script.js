document.addEventListener("DOMContentLoaded", () => {
    let icon = document.getElementById(`icon`)
    icon.style.backgroundImage = "url('icon/Placeholder.png')"
    let button = document.getElementById("button")
    button.addEventListener(`click`, questLoad);

    backAnimLoad()
});

function backAnimLoad() {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    console.log(Math.floor(vw * 1.5))
    let id = null;
    const elem = document.getElementById("back");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 16);
    function frame() {
        if (pos == Math.floor(-vw * 1.5)) {
            clearInterval(id);
            backAnimLoad()
            elem.style.bottom = "0px";
        } else {
            pos--;
            elem.style.bottom = pos + "px";
        }
    }
}

function questLoad() {
    let questBox = document.getElementById(`quest`)
    let questList = ["You can only enter the building through fire exits",
        "Kill a player by the end of the day, if accused or do not succeed you may not leave on the ship/must KYS",
        "Kill a monster by the end of the day or you may not leave on the ship",
        "You may not carry any item that takes both hands to hold",
        "You may not open the terminal at any point",
        "No purchasing or using purchased items",
        "You can not use any teleporter, if someone teleports you, you must KYS",
        "You may only enter the building via inverse tp [If you don't have it then re-roll]",
        "You can only enter/exit the facility if with another player",
        "Stalk a player from a distance, try not to get noticed",
        "Must mute your mic for the entirety of the day",
        "You can not open doors inside the facility",
        "You can not leave the ship",
        "You can not crouch",
        "Shout random monster names throughout the day to scare crewmates",
        "Must stay out of sight of other players in the building",
        "You must only crouch the whole day [If with another player, you can get uppies and jump over small inclines and climb ladders]",
        "Roleplay as Bear Grylls"]
    let nameBox = document.getElementById(`name`)
    let nameList = ["The Fireman",
        "The Murderer",
        "The Poacher",
        "The Weak",
        "The Illiterate",
        "The Cheapskate",
        "The Old-Fashioned",
        "The Daredevil",
        "The Bestie",
        "The Stalker",
        "The Mute",
        "The Confused",
        "The Frightened",
        "Mr. No-Knees",
        "Boy Who Cried Wolf",
        "The Unseen",
        "The Cripple",
        "Bear Grylls"]
    let icon = document.getElementById(`icon`)
    let iconList = ["url('icon/TFi.png')",
        "url('icon/TMu.png')",
        "url('icon/TPo.png')",
        "url('icon/TWe.png')",
        "url('icon/TIl.png')",
        "url('icon/TCe.png')",
        "url('icon/TOl.png')",
        "url('icon/TDa.png')",
        "url('icon/TBe.png')",
        "url('icon/TSt.png')",
        "url('icon/TMute.png')",
        "url('icon/TCo.png')",
        "url('icon/TFr.png')",
        "url('icon/MNo.png')",
        "url('icon/BWh.png')",
        "url('icon/TUn.png')",
        "url('icon/TCr.png')",
        "url('icon/BGr.png')"]

    // number of entries
    let randNum = Math.floor(Math.random() * 18)
    questBox.innerText = questList[randNum]
    nameBox.innerText = nameList[randNum]
    icon.style.backgroundImage = iconList[randNum]

    icon.style.opacity = '0%';
    let classCont = document.getElementById("classCont")
    classCont.style.opacity = '0%';
    let id = null;
    let opa = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (opa == 100) {
            clearInterval(id);
        } else {
            opa++;
            classCont.style.opacity = opa + "%";
            icon.style.opacity = opa + "%";
        }
    }
}