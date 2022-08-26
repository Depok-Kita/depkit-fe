import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";
import { Dokumentasi } from "@models";

const parseDokumentasi = (dokumentasiRaw: any): Dokumentasi =>
  ({
    slug: dokumentasiRaw.attributes.slug,
    title: dokumentasiRaw.attributes.title,
    date: dokumentasiRaw.attributes.date,
    photoUrls: dokumentasiRaw.attributes.photos.data.map(
      (photo: any) => process.env.NEXT_PUBLIC_API_STRAPI + photo.attributes.url
    ),
    videoUrls:
      dokumentasiRaw.attributes.videos.data?.map(
        (video: any) =>
          process.env.NEXT_PUBLIC_API_STRAPI + video.attributes.url
      ) ?? [],
  } as Dokumentasi);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  axios
    .get(
      `${process.env.NEXT_PUBLIC_API_STRAPI}/api/dokumentasis/?populate=photos,videos`,
      {
        params: {
          populate: ["photos", "videos"],
          "filters[slug][$eq]": req.query.slug,
        },
      }
    )
    .then((response) => {
      try {
        let parsedData = response.data.data.map(parseDokumentasi);
        res.status(200).json(parsedData);
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
