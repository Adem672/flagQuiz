class Country {
    #donnes;
    flag;
    translations = [];
    #element;

    constructor(donnes) {
        this.#donnes = donnes;
        this.getFlag();
        this.getTranslations();
        this.#element = this.#generateElement();
    }

    getFlag() {
        return this.flag = this.#donnes.flag;
    }

    getTranslations() {
        let allTranslations = this.#donnes.translations;
        allTranslations = Object.values(allTranslations)

        allTranslations.forEach(element => {
            this.translations.push(
                element.common.toLowerCase()
            )
        });

        this.translations = new Set(this.translations)
    }

    checkAnswer(answer) {
        return this.translations.has(answer);
    }

    #generateElement() {
        // div user
        const flagEl = document.querySelector("#flag");
        // contenu du div
        const contenu = `
        <h1>${this.flag}</h1>`;
        // insertion du contenu
        flagEl.insertAdjacentHTML("afterbegin", contenu);

        return flagEl;
    }
}

export default Country;