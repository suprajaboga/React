import { useEffect, useState } from "react";

const useResMenuData = (
  TASTYEATS_MENU_API_URL,
  resId,
  RESTAURANT_TYPE_KEY,
  CATEGORY_TYPE_KEY
) => {
  const [restaurant, setRestaurant] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(TASTYEATS_MENU_API_URL + resId);
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();
        //console.log(json);

        //set restaurant data
        const restaurantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
            ?.info || null;
        setRestaurant(restaurantData);

        //set categories data
        //console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x) => x.card?.card["@type"] === CATEGORY_TYPE_KEY))
        const categoriesData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x) => x.card?.card["@type"] === CATEGORY_TYPE_KEY);
        setCategories(categoriesData);

        {/*Set menu item data
        const menuItemsData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] === MENU_ITEM_TYPE_KEY)
            ?.flatMap((x) => x.categories)
            ?.flatMap((category) => category.itemCards)
            ?.map((x) => x.card?.info) || [];

        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find((x) => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        });
        setMenuItems(uniqueMenuItems); */}
      }
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.error(error);
    }
  }
  return [restaurant, categories];
};

export default useResMenuData;

/*
const people = [
  { name: "Alice", hobbies: ["Reading", "Swimming"] },
  { name: "Bob", hobbies: ["Cycling", "Hiking"] },
  { name: "Charlie", hobbies: ["Running", "Chess"] }
];

// Using map() and flat() separately
const hobbies = people.map(person => person.hobbies);
console.log(hobbies); // Output: [["Reading", "Swimming"], ["Cycling", "Hiking"], ["Running", "Chess"]]

const allHobbies = hobbies.flat();
console.log(allHobbies); // Output: ["Reading", "Swimming", "Cycling", "Hiking", "Running", "Chess"]

// Using flatMap()
const allHobbiesFlatMap = people.flatMap(person => person.hobbies);
console.log(allHobbiesFlatMap); // Output: ["Reading", "Swimming", "Cycling", "Hiking", "Running", "Chess"]
*/
