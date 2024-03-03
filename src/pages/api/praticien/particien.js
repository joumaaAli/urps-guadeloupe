if (req.method === "GET") {
  try {
    const praticiens = await prisma.praticien.findMany();
    res.status(200).json(praticiens);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve praticiens" });
  }
}
