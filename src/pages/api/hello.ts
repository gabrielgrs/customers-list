import type { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ message: "API working" });
}

export default handler;
