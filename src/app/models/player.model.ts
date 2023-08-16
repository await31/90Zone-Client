export interface Player {
    id: string;
    name: string;
    position: string;
    dateOfBirth: string;
    age: string;
    nationality: string[];
    height: string;
    foot: string;
    joinedOn: string;
    signedFrom: string;
    contract: string;
    marketValue: string;
  }

export interface Club {
    id: string;
    clubName: string;
    seasonYear: string;
    players: Player[];
  }