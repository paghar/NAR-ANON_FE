export function getImageLink(data: any[], field: string) {
  return data?.map((item: any) => {
    if (typeof item.attributes[field] !== "string") {
      const image = item.attributes[field]?.data;

      item.attributes[field] = `${process.env.PUBLIC_API_URL}${
        Object.keys(image).length !== 0 && image.attributes.url
      }`;
    }
    return item;
  });
}
