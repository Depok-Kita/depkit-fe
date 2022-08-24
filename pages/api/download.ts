import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

/**
 * download file from strapi in /uploads
 * Use this if you can't directly download from strapi
 * params:
 * - fileName (string): strapi filename, ex: "my-file.png"
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fileName = <string>req.query.fileName;
  res.setHeader("content-disposition", "attachment; filename=" + fileName);

  axios
    .get(`${process.env.NEXT_PUBLIC_API_STRAPI}/uploads/${fileName}`, {
      responseType: "stream",
    })
    .then(function (response) {
      response.data.pipe(res);
    })
    .catch((error) => res.status(500).send(error));
}

export const config = {
  api: {
    externalResolver: true,
  },
};
