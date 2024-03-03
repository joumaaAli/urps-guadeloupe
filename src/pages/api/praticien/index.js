import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { body } = req;
    console.log(body);
    try {
      const praticien = await prisma.praticien.create({
        data: {
          ...body,
        },
      });
      res.status(201).json(praticien);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
