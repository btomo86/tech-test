import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items;
        console.log(imageResults);
        const parsedImages = imageResults.filter(
          (media) => media.data[0].media_type === "image"
        );
        const image = parsedImages.map((image) => image.links[0].href);
        return image;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
