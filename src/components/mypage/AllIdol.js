import '../../styles/mypage/allidol.css';
import AllIdolSelect from './AllIdolSelect';

const AllIdol = () => {
  return (
    <div className="allidol-conatiner">
      <p>관심 있는 아이돌을 추가해보세요.</p>
      <div className="allidol-card-container">
        <AllIdolSelect />
      </div>
      <div className="allidol-addBtn-container">
        <button>추가하기</button>
      </div>
    </div>
  );
};

export default AllIdol;
