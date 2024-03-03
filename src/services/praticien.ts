import { Praticien } from "next-auth";
import axiosInstance from "@/utils/axiosInstance";

const basePath = "/praticien";

export const addPraticien = (praticien: Praticien) =>
  axiosInstance.post(basePath, praticien);

export const updatePraticien = (orderNumber: string, praticien: Praticien) =>
  axiosInstance.put(`${basePath}/${orderNumber}`, praticien);

export const deletePraticien = (orderNumber: string) =>
  axiosInstance.delete(`${basePath}/${orderNumber}`);

export const getPraticien = (orderNumber: string) =>
  axiosInstance.get(`${basePath}/${orderNumber}`);

export const listPraticiens = () => axiosInstance.get(basePath);
