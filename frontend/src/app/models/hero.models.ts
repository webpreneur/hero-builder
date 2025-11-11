export interface Characteristics {
  stamina: number;
  strength: number;
  speed: number;
}

export interface HeroDetails {
  powers: string[];
  characteristics: Characteristics;
}

export interface HeroPower {
  name: string;
  icon: string;
  description?: string;
}

export interface HeroPowersData {
  HeroPowers: HeroPower[];
}
