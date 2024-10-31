import { useState, useEffect } from 'react';
import { getCharts } from '../../../services/RankApi';
import IdolChart from './IdolChart';
import ModalButton from './ModalButton';
import '../../../styles/listpage/ChartOfMonth.css';

const ChartOfMonth = () => {
  const [gender, setGender] = useState('female');
  const [idols, setIdols] = useState([]);
  const [page, setPage] = useState(1); // 페이지네이션
  const [hasMore, setHasMore] = useState(true);

  const fetchIdols = async () => {
    try {
      const data = await getCharts(gender, page, 10);
      setIdols((prevIdols) => [...prevIdols, ...data.results]);
      setHasMore(data.next !== null); // api 업데이트
    } catch (error) {
      console.error('에러 발생', error);
    }
  };

  useEffect(() => {
    setIdols([]); // 성별 변경 시 리셋
    setPage(1);
    fetchIdols();
  }, [gender]);

  useEffect(() => {
    if (page > 1) {
      fetchIdols();
    }
  }, [page]);

  const handleGenderChange = (newGender) => {
    setGender(newGender);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="chart-container">
      <h1>이달의 차트</h1>
      <ModalButton />
      <div className="tabs">
        <button
          className={gender === 'female' ? 'active-tab' : ''}
          onClick={() => handleGenderChange('female')}
        >
          여자 아이돌
        </button>
        <button
          className={gender === 'male' ? 'active-tab' : ''}
          onClick={() => handleGenderChange('male')}
        >
          남자 아이돌
        </button>
      </div>
      <div className="idol-list">
        {idols.map((idol, index) => (
          <IdolChart key={idol.id} rank={index + 1} idol={idol} />
        ))}
      </div>
      {hasMore && (
        <button className="load-more-button" onClick={loadMore}>
          더 보기
        </button>
      )}
    </div>
  );
};

export default ChartOfMonth;
