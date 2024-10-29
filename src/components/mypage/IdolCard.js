import '../../styles/mypage/idolcard.css';

const IdolCard = ({ id, name, image, groupName, onClick, isSelected }) => {
  return (
    <div
      className={`idolcard-container ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(id)}
    >
      <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
      <p>{name}</p>
      <p>{groupName}</p>
    </div>
  );
};

export default IdolCard;
