import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // 디바운스 적용시
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 200); // 200ms 디바운스 적용
    };

    // 스로틀 적용시
    // let lastTime = 0;
    // const handleResize = () => {
    //   const now = new Date().getTime();
    //   if (now - lastTime >= 200) { // 200ms 스로틀 적용
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

    // 각각의 경우 성능 확인 예정

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
