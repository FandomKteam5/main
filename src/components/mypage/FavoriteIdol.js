import '../../styles/mypage/favoriteidol.css';
import IdolCard from './IdolCard';

const mockCards = [
  {
    id: 1,
    name: '아이유',
    image:
      'https://cdn.pixabay.com/photo/2016/11/22/23/44/buildings-1851246_960_720.jpg',
    groupName: 'IU',
  },
  {
    id: 2,
    name: '아이린',
    image:
      'https://cdn.pixabay.com/photo/2016/11/22/23/44/buildings-1851246_960_720.jpg',
    groupName: '레드벨벳',
  },
  {
    id: 3,
    name: '수지',
    image:
      'https://cdn.pixabay.com/photo/2016/11/22/23/44/buildings-1851246_960_720.jpg',
    groupName: '미쓰에이',
  },
  {
    id: 4,
    name: '유리',
    image:
      'https://cdn.pixabay.com/photo/2016/11/22/23/44/buildings-1851246_960_720.jpg',
    groupName: '소녀시대',
  },
];

const FavoriteIdol = () => {
  return (
    <div className="favoriteidol-conatiner">
      <div>
        <p>내가 관심있는 아이돌</p>
      </div>
      <div className="favoriteidol-card-container">
        {mockCards.map((card) => {
          return (
            <IdolCard
              key={card.id}
              name={card.name}
              image={card.image}
              groupName={card.groupName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteIdol;
