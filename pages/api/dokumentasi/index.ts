import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";
import { Dokumentasi } from "@models";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  axios
    .get(
      `${process.env.NEXT_PUBLIC_API_STRAPI}/api/dokumentasis?populate=photos,videos`
    )
    .then((response) => {
      try {
        res.status(200).json(
          response.data.data.map(
            (dokumentasi: any) =>
              ({
                slug: dokumentasi.attributes.slug,
                title: dokumentasi.attributes.title,
                date: dokumentasi.attributes.date,
                photoUrls: dokumentasi.attributes.photos.data.map(
                  (photo: any) =>
                    process.env.NEXT_PUBLIC_API_STRAPI + photo.attributes.url
                ),
                videoUrls: dokumentasi.attributes.videos.data.map(
                  (video: any) =>
                    process.env.NEXT_PUBLIC_API_STRAPI + video.attributes.url
                ),
              } as Dokumentasi)
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
