import AllIdol from '../components/mypage/AllIdol';
import FavoriteIdol from '../components/mypage/FavoriteIdol';
import '../styles/mypage/mypage.css';
import Container from '../components/common/Container';

const MyPage = () => {
  return (
    <Container>
      <div className="mypage-container">
        <FavoriteIdol />
        <AllIdol />
      </div>
    </Container>
  );
};

export default MyPage;
