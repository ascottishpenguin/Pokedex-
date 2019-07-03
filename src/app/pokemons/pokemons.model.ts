export class Pokemon {
  public name: string;
  public imagePath: string;
  public id: number;
  public type1: string;
  public type2: string;
  public stats: PokemonStats;

  constructor(id: number, name: string, imagePath: string, type1: string, type2?: string) {
    this.id = id;
    this.name = name;
    this.imagePath = 'https://the-pokedex.s3.eu-west-2.amazonaws.com/' + titleCaseWord(this.name) + '.gif';
    this.type1 = type1;
    if (type2) {
    this.type2 = type2;
    }


    function titleCaseWord(word: string) {
      if (!word) { return word; }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
  }
  setStats (stats: Array <any>) {
    console.log(stats);
    this.stats = new PokemonStats(stats);
  }
}



export class PokemonStats {
  speed: number;
  speciald: number;
  speciala: number;
  attack: number;
  defense: number;
  hp: number;


constructor(input: Array <any>) {
 this.speed = input.find(x => x.stats = x.stat.name === 'speed').base_stat;
 this.speciald = input.find(x => x.stats = x.stat.name === 'special-defense').base_stat;
 this.speciala = input.find(x => x.stats = x.stat.name === 'special-attack').base_stat;
 this.attack = input.find(x => x.stats = x.stat.name === 'attack').base_stat;
 this.defense = input.find(x => x.stats = x.stat.name === 'defense').base_stat;
 this.hp = input.find(x => x.stats = x.stat.name === 'hp').base_stat;
}
}
