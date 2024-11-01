import axios from 'axios';
const apiUrl = process.env.REACT_APP_BASE_URL;

// 인스턴스 설정
const baseAxios = axios.create({
  baseURL: apiUrl,
});

// 로딩 에러 메시지
const ErrorMessage = '오류 발생.';

/**
 * 지정된 성별, 페이지 크기 및 커서를 기준으로 차트 데이터 가져옴
 * @param {Object} params - API 요청에 대한 매개 변수
 * @param {string} params.gender - 아이돌 성별, default 'female'
 * @param {number} params.pageSize - 기본 페이지 항목 수, default 10
 * @param {string|null} params.cursor - 페이지네이션 커서
 * @returns {Promise<Object>} - API 응답 데이터
 * @throws {Error} - 데이터 로드 시 오류
 */

// 차트 가져오기
export const getCharts = async ({
  gender = 'female',
  pageSize = 10,
  cursor = null,
}) => {
  try {
    // 리퀘스트 요청보내기
    const response = await baseAxios.get(`/charts/${gender}`, {
      params: { pageSize, ...(cursor && { cursor }) },
    });
    return response.data; // 데이터 변환
  } catch (error) {
    throw new Error(ErrorMessage);
  }
};

// 아이돌 데이터 가져오기
export const getIdolData = async ({ pageSize = 100, cursor = 0 }) => {
  try {
    const response = await baseAxios.get('/idols', {
      params: { pageSize, ...(cursor && { cursor }) },
    });
    return response.data;
  } catch (error) {
    console.error(error); // 실제 에러 메시지를 출력
    throw new Error(ErrorMessage);
  }
};

// 투표 전송
export const postVotes = async (idolId) => {
  try {
    const response = await baseAxios.post('/votes', {
      idolId,
    });
    return response.data;
  } catch (error) {
    console.error(error); // 실제 에러 메시지를 출력
    throw new Error(ErrorMessage);
  }
};
