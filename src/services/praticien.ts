import { Praticien } from "@/types/models";
import axiosInstance from "@/utils/axiosInstance";

const basePath = "/praticien";

export const addPraticien = (praticien: Praticien) =>
  axiosInstance.post(basePath, {
    ...praticien,
    specialties: {
      connect: praticien.specialties.map((specialty) => ({ id: specialty })),
    },
    materiels: {
      connect: praticien.materiels.map((materiel) => ({ id: materiel })),
    },
  });

export const updatePraticien = (orderNumber: string, praticien: Praticien) =>
  axiosInstance.put(`${basePath}/${orderNumber}`, praticien);

export const deletePraticien = (orderNumber: string) =>
  axiosInstance.delete(`${basePath}/${orderNumber}`);

export const getPraticien = (orderNumber: string) =>
  axiosInstance.get(`${basePath}/${orderNumber}`);

export const listPraticiens = () => axiosInstance.get(basePath);

export const fetchPendingParticiens = () =>
  axiosInstance.get(basePath + "/pending");

export const fetchPraticiens = (searchTerm: string) => {
  const url = `${basePath + "/name" + "?name=" + searchTerm}`;
  return axiosInstance.get(url);
};
