import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const orderNumber = req.query.id as string;

  if (Number.isNaN(orderNumber)) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }

  try {
    if (req.method === "DELETE") {
      const deletedMateriel = await prisma.praticien.delete({
        where: { orderNumber },
      });
      res.status(200).json(deletedMateriel);
    } else {
      res.setHeader("Allow", ["DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    // Handle any errors that occur during the update
    res.status(500).json({ error: "An error occurred during the delete" });
  } finally {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  }
}
