interface Praticien {
  orderNumber: string;
  firstName: string;
  lastName: string;
  RPPSNumber: string | null;
  cabinetNumber: string;
  mobileNumber: string;
  email: string;
  cityId: number;
  status: "ACTIVE" | "INACTIVE" | "PENDING";
  specialties: Specialty[]; // Assuming Specialty is another interface
  materiels: Materiel[]; // Assuming Materiel is another interface
}

interface City {
  id: number;
  name: string;
  praticiens: Praticien[];
}

interface Specialty {
  id: number;
  name: string;
  praticiens: Praticien[];
}

interface Materiel {
  id: number;
  name: string;
  praticiens: Praticien[];
}

export type { Praticien, City, Specialty, Materiel };
