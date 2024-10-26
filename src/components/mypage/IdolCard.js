import '../../styles/mypage/idolcard.css';

const IdolCard = ({ name, image, groupName }) => {
  return (
    <div className="idolcard-container">
      <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
      <p>{name}</p>
      <p>{groupName}</p>
    </div>
  );
};

export default IdolCard;
