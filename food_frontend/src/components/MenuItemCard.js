import ItemCard from "./ItemCard";

const MenuItemCard = (props) => {
  const { itemData } = props;
    // console.log(itemData);
    return (
      <div className="res-menu-list-container">
        {itemData.map((itemInfo) => (
          <ItemCard key={itemInfo.card.info.id} itemData={itemInfo.card.info} />
        ))}
      </div>
    );
};

export default MenuItemCard;