import '../../styles/mypage/favoriteidol.css';
import IdolCard from './IdolCard';

const FavoriteIdol = ({ favoriteList, removeFavoriteIdol }) => {
  const handleRemove = (id) => {
    removeFavoriteIdol(id);
  };

  return (
    <div className="favoriteidol-conatiner">
      <div>
        <p>내가 관심있는 아이돌</p>
      </div>
      <div className="favoriteidol-card-container">
        {favoriteList.map((card) => {
          return (
            <>
              <button onClick={() => handleRemove(card.id)}>x</button>
              <IdolCard
                key={card.id}
                name={card.name}
                image={card.image}
                groupName={card.groupName}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteIdol;
