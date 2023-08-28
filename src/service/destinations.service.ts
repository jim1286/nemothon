import {
  ApiResponse,
  getMultiDestinationDirectionsRequest,
  getMultiDestinationDirectionsResponse,
} from "@/interface";
import { ApiService } from ".";

const DESTINATIONS_URL = "/destinations";

export const getMultiDestinationDirections = async (
  params: getMultiDestinationDirectionsRequest
): Promise<getMultiDestinationDirectionsResponse> => {
  const uri = `${DESTINATIONS_URL}/directions`;
  const res: ApiResponse = await ApiService.post(uri, params);

  return res.data;
};
