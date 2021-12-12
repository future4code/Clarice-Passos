export class Pokemon {
        Row: number;
        Name: string;
        Pokedex_Number: number;
        Img_name?: string;
        Generation?: number;
        Evolution_Stage?: string;
        Evolved?: number;
        FamilyID?: string;
        Cross_Gen?: string;
        Type1: string;
        Type2?: string;
        Weather1?: string;
        Weather2?: string;
        STAT_TOTAL?: number;
        ATK?: number;
        DEF?: number;
        STA?: number;
        Legendary?: number;
        Aquireable?: number;
        Spawns?: number;
        Regional?: number;
        Raidable?: number;
        Hatchable?: number;
        Shiny?: number;
        Nest?: number;
        New?: number;
        NotGettable?: number;
        Future_Evolve?: number;
        CP40?: number;
        CP39?: number 
  constructor(Row:number, Name:string, Pokedex_Number: number, Type1: string) 
  {
    this.Row = Row;
    this.Name = Name;
    this.Pokedex_Number = Pokedex_Number;
    this.Type1 = Type1
  }

}

