function genRandom(number) {
    return Math.floor(Math.random() * number);
}

const messageFill = {
    _day: ["horrible", "very bad", "bad", "not great", "normal", "not bad", "good", "great", "terrific"],
    _area: ["health", "love life", "work", "responisibilities", "friends", "finances", "relatives"],
    getMessage () {
        const randomDay = genRandom(this._day.length);
        const randomLuckArea = genRandom(this._area.length);
        let randomConcernArea;
        do {
        randomConcernArea = genRandom(this._area.length);
        } while (randomConcernArea === randomLuckArea);
        console.log(`Today is a ${this._day[randomDay]} day.\nYou will have good fortune with your ${this._area[randomLuckArea]}.\nBe careful with and pay special attention to your ${this._area[randomConcernArea]}.`);
    }
}