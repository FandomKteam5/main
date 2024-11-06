import '../../styles/mypage/favoriteidol.css';
import IdolCard from './IdolCard';

const FavoriteIdol = ({ favoriteList, removeFavoriteIdol }) => {
  const handleRemove = (id) => {
    removeFavoriteIdol(id);
  };

  return (
    <div className="favoriteidol-container">
      <div>
        <p>내가 관심있는 아이돌</p>
      </div>
      <div className="favoriteidol-card-container">
        {favoriteList.length > 0 ? (
          favoriteList.map((card) => {
            return (
              <div className="favoriteidol-card-wrapper" key={card.id}>
                <button
                  className="favoriteidol-card-delete-btn"
                  onClick={() => handleRemove(card.id)}
                >
                  x
                </button>
                <IdolCard
                  key={card.id}
                  name={card.name}
                  image={card.profilePicture}
                  groupName={card.group}
                  size="small"
                />
              </div>
            );
          })
        ) : (
          <p>관심있는 아이돌이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteIdol;
