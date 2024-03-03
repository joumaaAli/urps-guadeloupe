import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const { orderNumber } = req.body;

      await prisma.praticien.delete({
        where: { orderNumber },
      });

      res.status(200).json({ message: "Praticien deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete praticien" });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
