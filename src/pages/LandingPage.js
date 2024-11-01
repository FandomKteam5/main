import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/Fandom-K.svg';
import home1 from '../assets/images/Home-1.png';
import home2 from '../assets/images/Home-2.png';
import home3 from '../assets/images/Home-3.png';
import '../styles/landingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/list');
  };
  const handleStartClick = () => {
    localStorage.clear();
    navigate('/list');
  };
  return (
    <div>
      <section className="header__section landingPage__sections">
        <h1 className="header__section--title">
          내가 좋아하는 아이돌을
          <br />
          가장 <span className="header__section--emphasize">
            쉽게 덕질
          </span>{' '}
          하는 방법
        </h1>
        <img
          className="header__section--logo"
          src={logo}
          alt="logo"
          onClick={handleLogoClick}
        />
        <button
          className="landingPage__header--button"
          onClick={handleStartClick}
        >
          지금 시작하기
        </button>
      </section>
      <main className="main__sections landingPage__sections">
        <div className="landingPage__divider"></div>
        <section className="body__section--top">
          <p className="body__section--emphasize">후원하기</p>
          <h2 className="body__section--title">
            좋아하는 아이돌에게
            <br />
            쉽게 조공해 보세요
          </h2>
          <img src={home1} />
        </section>
        <section className="body__section--middle landingPage__sections">
          <p className="body__section--emphasize">이달의 아티스트</p>
          <h2 className="body__section--title">
            내 아티스트에게 1등의
            <br />
            영예를 선물하세요
          </h2>
          <img src={home2} />
        </section>
        <section className="body__section--bottom landingPage__sections">
          <p className="body__section--emphasize">나만의 아티스트</p>
          <h2 className="body__section--title">
            좋아하는 아티스트들의
            <br />
            소식을 모아보세요
          </h2>
          <img src={home3} />
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
