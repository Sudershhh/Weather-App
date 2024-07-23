const getPhotoOfCity = async (city) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${city}`
  );
  console.log(response);
};

export default getPhotoOfCity;
