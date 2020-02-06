export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterLink;
  location: CharacterLink;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterLink {
  name: string;
  url: string;
}

export enum CharacterStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

export enum CharacterGender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  unknown = 'unknown',
}
