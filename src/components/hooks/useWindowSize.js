import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [pageState, setPageState] = useState();

  useEffect(() => {
    // 디바운스 적용시
    // let timeoutId;
    // const handleResize = () => {
    //   clearTimeout(timeoutId);
    //   timeoutId = setTimeout(() => {
    //     setWindowSize({
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     });
    //   }, 200); // 200ms 디바운스 적용
    // };

    // 스로틀 적용시
    // let lastTime = 0;
    // const handleResize = () => {
    //   const now = new Date().getTime();
    //   if (now - lastTime >= 200) {
    //     // 200ms 스로틀 적용
    //     setWindowSize({
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     });
    //     lastTime = now;
    //   }
    // };

    // 디바운스나 스로틀 적용하지 않은 경우
    // const handleResize = () => {
    //   setWindowSize({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   });
    // };

    // 각각의 경우 성능 확인

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log(windowSize);

    // 특정 임계값에 도달할 때만 상태 업데이트
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setPageState('MOBILE');
      } else if (width <= 1024) {
        setPageState('TABLET');
      } else {
        setPageState('DESKTOP');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // return windowSize;
  return pageState;
};

export default useWindowSize;
