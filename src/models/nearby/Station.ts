// Generated by https://quicktype.io

export interface Station {
  id: number;
  name: string;
  latitude: number;
  longtitude: number;
  distanceFromMe: number; //This is a local variable to be initialized based on each user location
  icon: number;
  address: string;
  city: string;
  openHours: string;
  providers: string;
  pictures: string[];
  evses: Evse[];
}

export interface Evse {
  id: number;
  connectors: Connector[];
  available: boolean;
  reservable: boolean;
  pricing: Pricing[];
}

export interface Connector {
  connectorID: number;
  type: string;
  currentType: string;
  maxKwh: number;
}

export interface Pricing {
  name: string;
  priceCents: number;
  currency: string;
  $$ref?: string;
}
