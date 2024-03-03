import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const { orderNumber, ...updateData } = req.body;

      const updatedPraticien = await prisma.praticien.update({
        where: { orderNumber },
        data: updateData,
      });

      res.status(200).json(updatedPraticien);
    } catch (error) {
      res.status(500).json({ error: "Failed to update praticien" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
