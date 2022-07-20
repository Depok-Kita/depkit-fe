import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(403).end("Must use POST method!");
  }

  if (!req.body) {
    res.status(400).end("Must provide request body!");
  }

  const { data } = req.body;

  axios
    .post(`${process.env.NEXT_PUBLIC_API_STRAPI}/api/donor-darahs`, {
      data: data,
    })
    .then((response) => res.status(200).send(response.data))
    .catch((e) => {
      console.log(e.response.data.error);
      res.status(500).send(e.response.data.error);
    });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
