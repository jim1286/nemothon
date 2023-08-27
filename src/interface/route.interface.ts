export interface Location {
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  last?: number;
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

export interface SuggestionBusRouteList {
  origin: Location;
  busRouteList: BusRoute[];
  estimated: Estimated;
}

export interface BusRoute {
  busNumber: number;
  busStationList: Location[];
}
