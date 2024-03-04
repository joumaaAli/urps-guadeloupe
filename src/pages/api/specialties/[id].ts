import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Parse the specialty safely
  const specialty = parseInt(req.query.id as string, 10);

  if (Number.isNaN(specialty)) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }

  try {
    if (req.method === "PUT") {
      // Ensure the request body has the expected format
      const { name } = req.body;
      if (typeof name !== "string") {
        res.status(400).json({ error: "Invalid request body" });
        return;
      }

      const updatedMateriel = await prisma.specialty.update({
        where: { id: specialty },
        data: { name },
      });
      res.status(200).json(updatedMateriel);
    } else {
      res.setHeader("Allow", ["PUT"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    // Handle any errors that occur during the update
    res.status(500).json({ error: "An error occurred during the update" });
  } finally {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  }
}