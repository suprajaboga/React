import { useDispatch } from "react-redux";
import { ITEM_IMG_CDN_URL } from "../utils/Common/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item))
  }
  //console.log(items);
    return (
        <div className="menu-items-list">
                {items.map((item) => (
                  <div className="menu-item" key={item?.card?.info?.id}>
                    <div className="menu-item-details">
                      <h3 className="item-title">{item?.card?.info?.name}</h3>
                      <p className="item-cost">
                        ₹{item?.card?.info?.price > 0
                          ? (item?.card?.info?.price / 100)
                          : (item?.card?.info?.defaultPrice / 100)}
                      </p>
                      <p className="item-desc">{item?.card?.info?.description}</p>
                    </div>
                    <div className="menu-img-wrapper">
                      {item?.card?.info?.imageId && (
                        <img
                          className="menu-item-img"
                          src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                          alt={item?.card?.info?.name}
                        />
                      )}
                      <button className="add-btn" onClick={() => handleAddItem(item)}>ADD</button>
                    </div>
                  </div>
                ))}
              </div>
    )
};

export default ItemList;
