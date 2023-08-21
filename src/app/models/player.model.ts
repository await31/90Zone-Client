export interface Club {
  id: string;
  url: string;
  name: string;
  officialName: string;
  image: string;
  legalForm: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  tel: string;
  fax: string;
  website: string;
  foundedOn: string;
  members: string;
  membersDate: string;
  otherSports: string[];
  colors: string[];
  stadiumName: string;
  stadiumSeats: string;
  currentTransferRecord: string;
  currentMarketValue: string;
  squad: Squad;
  league: League;
  historicalCrests: string[];
}

export interface Squad {
  size: string;
  averageAge: string;
  foreigners: string;
  nationalTeamPlayers: string;
}

export interface League {
  id: string;
  name: string;
  countryID: string;
  countryName: string;
  tier: string;
}

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
    marketValue:string; 
    status:string;
    currentClub: Club; 
}
