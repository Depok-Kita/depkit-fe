import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";
import { Article, Topic } from "@models";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  axios
    .get(
      `${process.env.NEXT_PUBLIC_API_STRAPI}/api/articles?populate=photo,topics&filters[slug]=${slug}`
    )
    .then((response) => {
      try {
        const article = response.data.data[0];
        res.status(200).json({
          id: article.id,
          slug: article.attributes.slug,
          title: article.attributes.title,
          published: article.attributes.published,
          body: article.attributes.body,
          photoUrl:
            process.env.NEXT_PUBLIC_API_STRAPI +
            article.attributes.photo.data.attributes.url,
          photoAlt: article.attributes.photo.data.attributes.name,
          topics: article.attributes.topics.data.map(
            (topic: any) =>
              ({
                id: topic.id,
                name: topic.attributes.name,
              } as Topic)
          ),
        } as Article);
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
