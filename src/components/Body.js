import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserOffline from "./UserOffline";
import { filterData } from "../utils/Helper";
import useOnline from "../Hooks/useOnline";
import useResData from "../Hooks/useResData";
import { TASTYEATS_API_URL } from "../utils/Common/constants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants] = useResData(TASTYEATS_API_URL);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] =
    useState(null);
  const isOnline = useOnline();
  const promotedRestaurant = withPromotedLabel(RestaurantCard);
  console.log(allRestaurants);

  if (!isOnline) return <UserOffline />;

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredListOfRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0)
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
    } else {
      setErrorMessage("");
      setFilteredListOfRestaurants(restaurants);
    }
  };

  //if listOfRestaurants is empty, then don't render restaurant cards
  if (!allRestaurants) return null;

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          //when user enters data, it automatically calls searchData() so it work same as when clicked on Search button
          onChange={(e) => {
            setSearchText(e.target.value);
            searchData(e.target.value, allRestaurants);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {(filteredListOfRestaurants === null
            ? allRestaurants
            : filteredListOfRestaurants
          ).map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                {/* if we click on any restaurant card it will redirect to that restaurant menu page */}
                {restaurant?.info?.promoted ? (
                  <promotedRestaurant {...restaurant?.info} />
                ) : (
                  <RestaurantCard {...restaurant?.info} />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
