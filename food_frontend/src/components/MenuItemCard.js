import ItemCard from "./ItemCard";

const MenuItemCard = (props) => {
  const { itemData, resName } = props;
  // console.log(resName);
  return (
    <div className="res-menu-list-container">
      {itemData.map((itemInfo) => (
        <ItemCard nameOfRest={resName} key={itemInfo.card.info.id} itemData={itemInfo.card.info} />
      ))}
    </div>
  );
};

export default MenuItemCard;