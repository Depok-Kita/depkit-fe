import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  axios
    .get(`${process.env.NEXT_PUBLIC_API_KITABISA}`)
    .then((response) => {
      try {
        const result = response.data.data[0];
        res.status(200).json({
          url: result.permalink,
          title: result.title,
          short_description: result.short_description,
          full_description: result.description,
          imageUrl: result.image,
          donation: result.donation_received,
          donation_count: result.donation_count,
          donation_target: result.donation_target,
          days_running: result.days_running,
          days_remaining: result.days_remaining,
          seconds_running: result.seconds_running,
        });
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
