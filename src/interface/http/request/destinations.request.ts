import { Destination, Origin } from "@/interface";

export interface getMultiDestinationDirectionsRequest {
  origin: Origin;
  destinations: Destination[];
  radius: number;
}
