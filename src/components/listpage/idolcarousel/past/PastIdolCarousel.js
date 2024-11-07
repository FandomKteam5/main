import fandomKImg6 from '../src/assets/images/fandomK-img7.png';
import fandomKImg7 from '../src/assets/images/fandomK-img7.png';
import fandomKImg8 from '../src/assets/images/fandomK-img8.png';
import fandomKImg1 from '../src/assets/images/fandomK-img (1).png';
import '/Users/kyuyeonkim/Desktop/main/src/styles/IdolCarousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    IdolName: `김민지`,
    IdolProfilePicture: fandomKImg6,
    DonationTitle: `뉴진스 민지 지하철 광고`,
    DonationSubtitle: `강남역 광고`,
  },
  {
    IdolName: `장원영`,
    IdolProfilePicture: fandomKImg7,
    DonationTitle: `원영이 20번째 생일`,
    DonationSubtitle: `강남역 광고`,
  },
  {
    IdolName: `김채원`,
    IdolProfilePicture: fandomKImg8,
    DonationTitle: `르세라핌 채원 지하철 광고`,
    DonationSubtitle: `강남역 광고`,
  },
  {
    IdolName: `제니`,
    IdolProfilePicture: fandomKImg1,
    DonationTitle: `블랙핑크 제니 지하철 광고`,
    DonationSubtitle: `강남역 광고`,
  },
];

function IdolCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index}>
            <div className="idol-carousel-image-container">
              <img
                src={d.IdolProfilePicture}
                alt=""
                className="idol-carousel-image"
              />
              <button className="idol-carousel-donate-button">후원하기</button>
            </div>
            <div>
              <p>{d.DonationTitle}</p>
              <p>{d.DonationSubtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default IdolCarousel;
