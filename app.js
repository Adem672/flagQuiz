import { shuffle } from "lodash";
import Game from "./Game";

const tableauPays = [];
const getPays = () => {
    const pays = fetch("https://restcountries.com/v3.1/all").then((resultat) => resultat.json());
    pays.then((data) => {
        const tableauPays = shuffle(data);
        console.log(tableauPays);
        const currentGame = new Game(tableauPays);

        const button = document.querySelector("button");
        const text = document.querySelector("text");
        button.addEventListener("click", function (e) {
            e.preventDefault(e);
            try {
                if (currentGame.gameOver == false) {
                    if (currentGame.currentCountry.checkAnswer(text.value)) {
                        currentGame.addPoint;
                    }
                    currentGame.nextCountry;
                }
            } catch (e) {
                message(e.message, true)
            }
        });
    });
}
getPays();

