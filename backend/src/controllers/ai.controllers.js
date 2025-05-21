import generteContent from "../services/ai.service.js";

export async function getReview(req, res) {
  const code = req.body.code;
  if (!code) {
    return res.status(400).send("Provide a prompt");
  }
  const response = await generteContent(code);

  res.send(response);
}
