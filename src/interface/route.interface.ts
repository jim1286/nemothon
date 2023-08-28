export interface Location {
  name: string;
  address: string;
  latitude: string;
  longitude: string;
}

export interface Station extends Location {
  duration: number;
}

export interface Destination {
  x: string;
  y: string;
  key: string;
}

export interface Origin {
  x: string;
  y: string;
}

export interface Estimated {
  distance: number;
  duration: number;
}

export interface Route {
  name: number;
  stationList: Station[];
}

export interface Result {
  taxiFee: number;
  timeReduction: number;
  stationName: string;
  address: string;
}
