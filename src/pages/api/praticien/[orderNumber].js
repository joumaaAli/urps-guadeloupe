import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { orderNumber } = req.query;

  if (req.method === "GET") {
    try {
      const praticien = await prisma.praticien.findUnique({
        where: { orderNumber },
      });

      if (praticien) {
        res.status(200).json(praticien);
      } else {
        res.status(404).json({ message: "Praticien not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve praticien" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
