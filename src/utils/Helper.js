//Filter the restaurant data according to input type
export const filterData = (searchText, restaurants) => {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
};
