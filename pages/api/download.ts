import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getFileName } from "@utils";

/**
 * download file from strapi in /uploads
 * Use this if you can't directly download from strapi
 * params:
 * - fileUrl: file url, eg. http://server.com/file/filename.png
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fileUrl = <string>req.query.fileUrl;
  res.setHeader(
    "content-disposition",
    "attachment; filename=" + getFileName(fileUrl)
  );

  axios
    .get(`${fileUrl}`, {
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
