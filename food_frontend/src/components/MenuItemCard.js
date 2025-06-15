import ItemCard from "./ItemCard";

const MenuItemCard = (props) => {
  const { resId, itemData } = props;
  // console.log(resName);
  return (
    <div className="res-menu-list-container">
      {itemData.map((itemInfo) => (
        <ItemCard
          key={itemInfo.card.info.id}
          resid={resId}
          itemData={itemInfo.card.info}
        />
      ))}
    </div>
  );
};

export default MenuItemCard;
