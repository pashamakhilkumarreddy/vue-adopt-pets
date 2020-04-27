export default {
  getAllAnimals: (state) => state.cats.length + state.dogs.length,
  getCats: (state) => state.cats,
  getDogs: (state) => state.dogs,
};
