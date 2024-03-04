import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const specialtylId = parseInt(req.query.id as string, 10);

  if (Number.isNaN(specialtylId)) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }

  try {
    if (req.method === "DELETE") {
      const deleteSpecialty = await prisma.specialty.delete({
        where: { id: specialtylId },
      });
      res.status(200).json(deleteSpecialty);
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
