import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Fandom-K.svg';
import profile from '../../assets/images/jelly.jpg';
import '../../styles/Nav.css';

const Nav = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/list'); // 원래 로고버튼을 누르면 새로고침이 되야하나 mypage에서 list로 올 수 있도록 설정하였음.
  };

  const handleProfileClick = () => {
    navigate('/mypage');
  };

  return (
    <nav className="nav__section">
      <img
        className="nav__logo"
        src={logo}
        alt="logo"
        onClick={handleLogoClick}
      />
      <img
        src={profile}
        className="nav__profile"
        onClick={handleProfileClick}
        alt="프로필"
      />
    </nav>
  );
};

export default Nav;
