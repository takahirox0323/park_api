export type ParkRequest = {
  name: string;
  address: string;
  description: string;
  prefectureId: number;
  areaId: number;
  countryId: number;
  parkUrl: string;
  openingTime: string;
  price: number;
  categoryId: number;
  parkTypeId: number;
  createdUserId: number;
};

export type ParkDeleteRequest = {
  id: number;
};
