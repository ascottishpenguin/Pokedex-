export class PokemonDetail {
  public description: string;

  constructor(description: string) {
    this.description = description;
    console.log(this.description);

    // this.imagePath = 'https://pkmneclipse.net/images/letsgo/kanto-normal/Charizard_MegaY.gif;
  }}
// function titleCaseWord(word: string) {
//     if (!word) { return word; }
//     return word[0].toUpperCase() + word.substr(1).toLowerCase();
//   }
