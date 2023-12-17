export default class Team {
  constructor() {
    this.characters = [];
  }

  add(character) {
    if (!this.characters.includes(character)) {
      this.characters.push(character);
    } else {
      throw new Error(`Character ${character.name} is already in the team.`);
    }
  }

  * [Symbol.iterator]() {
    for (const character of this.characters) {
      yield character;
    }
  }
}
