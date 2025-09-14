import api from "./axios";

export type CreateUserReq = { nickname: string };
export type CreateUserRes = { id: string; nickname: string; createdAt: string };

export const createUser = async (payload: CreateUserReq) => {
  const res = await api.post<CreateUserRes>("/user", payload);
  return res.data;
};
