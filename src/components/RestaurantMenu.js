import {
  MENU_API_URL,
  IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  CATEGORY_TYPE_KEY
} from "../utils/Common/constants";
import { MenuShimmer } from "./Shimmer";
import useResMenuData from "../Hooks/useResMenuData";
import RestaurantCategory from "./RestaurantCategory";
import useOnline from "../Hooks/useOnline";
import UserOffline from "./UserOffline";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [showIndex, setShowIndex] = useState(0);
  const [restaurant, categories] = useResMenuData(
    MENU_API_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    CATEGORY_TYPE_KEY
  );
  const isOnline = useOnline();

  //if user is not online, return userOffline component
  if (!isOnline) return <UserOffline />;

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;


/*
RestaurantMenu is a uncontrolled component and RestaurantCategory is a controlled component becuase in RestaurantMenu component, we have showItems and
based on the value we pass to RestaurantCategory, items will be shown or hidden.

This is also the concept of lifting the state up, becuase instead of having the separate state variables for each category in the RestaurantCategory
component, we're having the state variable in the RestaurantMenu category and that is controlling all the categories based on the arguments
*/
