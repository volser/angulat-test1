import { CharacterStatus, CharacterGender } from './character.model';

export interface CharacterFilter {
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
}
