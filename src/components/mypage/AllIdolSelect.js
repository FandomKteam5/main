import '../../styles/mypage/allidolselect.css';
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

const AllIdolSelect = () => {
  return (
    <div className="allidolselect-container">
      <div>
        <button>왼쪽</button>
      </div>
      <div className="allidolselect-card-container">
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
      <div>
        <button>오른쪽</button>
      </div>
    </div>
  );
};

export default AllIdolSelect;
