import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";
import { Topic } from "@models";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  axios
    .get(`${process.env.NEXT_PUBLIC_API_STRAPI}/api/topics`)
    .then((response) => {
      try {
        res.status(200).json(
          response.data.data.map(
            (topic: any) =>
              ({
                id: topic.id,
                name: topic.attributes.name,
              } as Topic)
          )
        );
      } catch (e) {
        console.log(e);
      }
    })
    .catch((error) => res.status(500).send(error));
}

export const config = {
  api: {
    externalResolver: true,
  },
};
