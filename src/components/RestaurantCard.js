import { IMG_CDN_URL } from "../utils/Common/constants";

const RestaurantCard = (props) => {
  
  //console.log(props);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRatingString
  } = props;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            //style attribute expects an object
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </span>
    </div>
  );
};

//Higher order component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <lable>Promoted</lable>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

/* withPromotedLabel is a higher order component, which takes RestaurantCard(a component) as an argument and returns a component(i.e., step 45
is basically returning a functional component and a functional component returns jsx code, so there is another return at step 46) */
