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

export const fetchPraticiens = async (inputValue: string) => {
  const response = await axiosInstance.get(
    `${basePath}/patriciens?search=${inputValue}`
  );
  const data = response.data;
  return data.map((praticien: Praticien) => ({
    value: praticien.orderNumber,
    label: `${praticien.firstName} ${praticien.lastName}`,
  }));
};
