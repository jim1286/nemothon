export interface getMultiDestinationDirectionsResponse {
  trans_id: string;
  routes: [
    {
      result_code: number;
      result_msg: string;
      key: string;
      summary: {
        distance: number;
        duration: number;
      };
    }
  ];
}
