export default class Team {
  constructor() {
    this.characters = [];
  }

  add(character) {
    if (!this.characters.includes(character)) {
      this.characters.push(character);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Character ${character.name} is already in the team.`);
    }
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.characters.length; i += 1) {
      yield this.characters[i];
    }
  }
}
