const buttons = document.querySelectorAll("button");

for (let i =0 ; i < buttons.length; i++){
    buttons[i].addEventListener("click",function() {
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat ="";

        if( joueur === robot) {
            resultat = "Equality";

        }
        else 
        if( (joueur === "Rock" && robot ==="Scissors") || 
        (joueur === "Paper" && robot === "Rock") || 
        (joueur === "Scissors" && robot === "Paper")){
            resultat = " You win ";
        }
        else {
            resultat = "You loose";
        }

        document.querySelector(".resultat").innerHTML =`
        Joueur : ${joueur} </br>
        Robot : ${robot} <br>
        ${resultat}`;
        // console.log(`Joueur : ${joueur} VS Robot : ${robot}`)
    });
}