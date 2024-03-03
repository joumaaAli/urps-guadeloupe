import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Extends the built-in session.user type with additional properties.
   */
  interface User {
    role?: string;
  }

  /**
   * Extends the built-in session type to ensure the extended user properties are recognized.
   */
  interface Session {
    user: {
      role: "USER" | "ADMIN";
    } & DefaultSession["user"];
  }

  interface Praticien {
    orderNumber: string;
    firstName: string;
    lastName: string;
    RPPSNumber?: string;
    cabinetNumber: string;
    mobileNumber: string;
    email: string;
    cityId: number;
    specialtiesIds: number[];
    materiels: string[];
  }
}

declare module "next-auth/jwt" {
  /**
   * Extends the built-in JWT type with additional properties.
   */
  interface JWT {
    role?: string;
  }
}
