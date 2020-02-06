import { CharacterStatus, CharacterGender } from 'src/models/character.model';

export interface CharacterFilter {
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
}
