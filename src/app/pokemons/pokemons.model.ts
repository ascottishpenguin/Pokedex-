export class Pokemon {
  public name: string;
  public imagePath: string;
  public id: number;

  constructor(id: number, name: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.imagePath = "https://img.pokemondb.net/artwork/" + this.name + ".jpg";
  }}
