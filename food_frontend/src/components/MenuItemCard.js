import ItemCard from "./ItemCard";

const MenuItemCard = (props) => {
  const { data } = props;
    // console.log(data);
    return (
      <div className="res-menu-list-container">
        {data.map((itemInfo) => (
          <ItemCard key={itemInfo.card.info.id} itemData={itemInfo.card.info} />
        ))}
      </div>
    );
};

export default MenuItemCard;