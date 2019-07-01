export class Pokemon {
  public name: string;
  public imagePath: string;
  public id: number;
  public type1: string;
  public type2: string;


  constructor(id: number, name: string, imagePath: string, type1: string, type2: string) {
    this.id = id;
    this.name = name;
    this.imagePath = 'https://the-pokedex.s3.eu-west-2.amazonaws.com/' + titleCaseWord(this.name) + '.gif';
    this.type1 = type1;
    this.type2 = type2;
  }}

function titleCaseWord(word: string) {
    if (!word) { return word; }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
