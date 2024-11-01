// import axios from "axios";
const apiUrl = process.env.REACT_APP_BASE_URL;

// 인스턴스 설정
// const baseAxios = axios.create({
//   baseURL: apiUrl,
// });

// 로딩 에러 메시지
// const ErrorMessage = "오류 발생.";

// /**
//  * 지정된 성별, 페이지 크기 및 커서를 기준으로 차트 데이터 가져옴
//  * @param {Object} params - API 요청에 대한 매개 변수
//  * @param {string} params.gender - 아이돌 성별, default 'female'
//  * @param {number} params.pageSize - 기본 페이지 항목 수, default 10
//  * @param {string|null} params.cursor - 페이지네이션 커서
//  * @returns {Promise<Object>} - API 응답 데이터
//  * @throws {Error} - 데이터 로 오류드 시
//  */

// 차트 가져오기
// export const getCharts = async ({
//   gender = "female",
//   pageSize = 10,
//   cursor = null,
// }) => {
//   try {
//     // 리퀘스트 요청보내기
//     const response = await baseAxios.get(`/charts/${gender}`, {
//       params: { pageSize, ...(cursor && { cursor }) },
//     });
//     return response.data; // 데이터 변환
//   } catch (error) {
//     throw new Error(ErrorMessage);
//   }
// };
export const getCharts = async ({
  gender = 'female',
  cursor = null,
  pageSize = 10,
}) => {
  try {
    const query = `${cursor ? `cursor=${cursor}&` : ''}gender=${gender}&pageSize=${pageSize}`;
    const response = await fetch(`${apiUrl}/charts/${gender}?${query}`);

    if (!response.ok) {
      throw new Error('차트 데이터 가져오는 중 오류 발생.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('차트 데이터 불러오는 중 오류 발생:', error);
    throw error;
  }
};

// 아이돌 데이터 가져오기
// export const getIdolData = async ({ pageSize = 100, cursor = 0 }) => {
//   try {
//     const response = await baseAxios.get("/idols", {
//       params: { pageSize, ...(cursor && { cursor }) },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error); // 실제 에러 메시지를 출력
//     throw new Error(ErrorMessage);
//   }
// };
export const getIdolList = async ({
  cursor = null,
  pageSize = 10,
  keyword = '',
}) => {
  try {
    const query = `${cursor ? `cursor=${cursor}&` : ''}pageSize=${pageSize}${keyword ? `&keyword=${keyword}` : ''}`;
    const url = `${apiUrl}/idols?${query}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('아이돌 데이 가져오는 중 오류 발생');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('아이돌 데이터 불러오는 중 오류 발생:', error);
    throw error;
  }
};

// 투표 전송
// export const postVotes = async (idolId) => {
//   try {
//     const response = await baseAxios.post("/votes", {
//       idolId,
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error); // 실제 에러 메시지를 출력
//     throw new Error(ErrorMessage);
//   }
// };
export async function postVotes(id) {
  const voteURL = `${apiUrl}/votes`;

  try {
    const response = await fetch(voteURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idolId: id,
      }),
    });
    if (!response.ok) {
      throw new Error('투표 실패');
    }
  } catch (error) {
    console.error('투표 중 오류 발생:', error);
    throw error;
  }
}
