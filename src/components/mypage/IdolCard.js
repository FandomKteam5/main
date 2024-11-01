import '../../styles/mypage/idolcard.css';

const IdolCard = ({
  id,
  name,
  image,
  groupName,
  onClick,
  isSelected,
  isFavorite,
  size,
}) => {
  return (
    <div
      className={`idolcard-container ${isSelected ? 'selected' : ''} ${isFavorite ? 'disabled' : ''} ${size}`}
      onClick={() => onClick(id)}
    >
      <div className="idolcard-image-overlay">
        <img src={image} alt={name} />
      </div>
      <div className="idolcard-name-overlay">
        <p>{name}</p>
      </div>
      <div className="idolcard-group-overlay">
        <p>{groupName}</p>
      </div>
    </div>
  );
};

export default IdolCard;
