export function getUrlFromQuery() {
  const url = window.location.search
    .substring(1)
    .replace(/\/\/github\.com/, "//raw.githubusercontent.com")
    .replace(/\/blob\//, "/");
  return url;
}

export function getFileTypeFromUrl(url) {
  const type = url.split(".").pop();

  if([`puml`, `plantuml`, `iuml`].indexOf(type) > -1) {
    return 'puml';
  }

  if([`excalidraw`].indexOf(type) > -1) {
    return 'excalidraw';
  }

return null;
}