import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import MyPage from './pages/MyPage';
import Main from './pages/Main';

// 반응형의 경우 1920 / 744 / 375px 기준으로 작업

function Router() {
  return (
    // BrowserRouter를 사용하여 라우팅을 설정
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<LandingPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
