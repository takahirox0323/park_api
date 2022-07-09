export type UserRequest = {
  familyName: string;
  givenName: string;
  sexId: number;
  age: number;
  createdUserId: string;
};

export type UserDeleteRequest = {
  id: number;
};
