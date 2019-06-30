export class Pokemon {
  public name: string;
  public imagePath: string;
  public id: number;

  constructor(id: number, name: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.imagePath = 'https://the-pokedex.s3.eu-west-2.amazonaws.com/' + titleCaseWord(this.name) + '.gif';

    // this.imagePath = 'https://pkmneclipse.net/images/letsgo/kanto-normal/Charizard_MegaY.gif;
  }}
function titleCaseWord(word: string) {
    if (!word) { return word; }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
