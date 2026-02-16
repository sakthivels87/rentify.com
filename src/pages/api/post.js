import data from "../../db.json";

export default function handler(req, res) {
  const { type } = req.query;

  if (!type) {
    return res.status(200).json(data.properties);
  }

  const key = "";

  if (data[key]) {
    return res.status(200).json(data[key]);
  }

  return res.status(404).json({ message: "Not found" });
}
