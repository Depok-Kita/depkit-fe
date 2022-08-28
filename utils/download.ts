/**
 * download file from strapi
 * @param url url of file, ex: http://url-to-strapi.com/uploads/my-file.png
 */
export function downloadFile(url: string) {
  const link = document.createElement("a");
  const fileName = getFileName(url);
  link.download = fileName;
  link.href = "/api/download?fileName=" + fileName;
  console.log(link.href);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function getFileName(url: string) {
  return url.substring(url.lastIndexOf("/") + 1);
}
