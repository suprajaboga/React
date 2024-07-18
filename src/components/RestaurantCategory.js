import ItemList from "../components/ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);
  // console.log(showItems);
  console.log(setShowIndex);
  //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="category-content">
      <div className="category-header" onClick={handleClick}>
        <span className="category-title">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="category-title">˅</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
