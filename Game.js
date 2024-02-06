import Country from "./Country";

class Game {
    #score
    donnes = []
    countryIndex
    currentCountry

    constructor(donnes) {
        this.#score = 0;
        this.donnes = donnes;
        this.countryIndex = 0;
        this.currentCountry = new Country(this.donnes[this.countryIndex]);
    }

    addPoint() {
        this.#score ++;
    }

    gameOver() {
        return this.countryIndex >= this.donnes.length;
    }

    nextCountry() {
        if (!this.gameOver()) {
            this.countryIndex++;
            this.currentCountry = new Country(this.donnes[this.countryIndex]);
        }
    }

}

export default Game;

/*
donnes.forEach((element) => {
    this.donnes.push(
        new Country(element)
    );
});*/