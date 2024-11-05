const apiUrl = process.env.REACT_APP_BASE_URL;

// 차트 가져오기
export const getCharts = async ({
  gender = 'female',
  cursor = 0,
  pageSize = 10,
}) => {
  try {
    const query = `?gender=${gender}&${cursor ? `cursor=${cursor}&` : ''}&pageSize=${pageSize}`;
    const response = await fetch(`${apiUrl}/charts/${gender}${query}`);

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
export async function postVotes(id) {
  const voteURL = `${apiUrl}/votes`;

  try {
    await fetch(voteURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idolId: id,
      }),
    });
  } catch (error) {
    console.error('투표 중 오류 발생:', error);
    throw error;
  }
}

// 차트 가져오기
// export const getCharts = async ({
//   gender = 'female',
//   cursor = null,
//   pageSize = 10,
// }) => {
//   try {
//     const query = `${cursor ? `cursor=${cursor}&` : ''}gender=${gender}&pageSize=${pageSize}`;
//     const response = await fetch(`${apiUrl}/charts/${gender}?${query}`);

//     if (!response.ok) {
//       throw new Error('차트 데이터를 가져오는 중 오류가 발생했습니다.');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('차트 데이터를 불러오는 중 오류 발생:', error);
//     throw error;
//   }
// };

// // 아이돌 데이터 가져오기
// export const getIdolList = async ({
//   cursor = null,
//   pageSize = 10,
//   keyword = '',
// }) => {
//   try {
//     const query = `${cursor ? `cursor=${cursor}&` : ''}pageSize=${pageSize}${keyword ? `&keyword=${keyword}` : ''}`;
//     const url = `${apiUrl}/idols?${query}`;
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error('아이돌 데이터를 가져오는 중 오류가 발생했습니다.');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('아이돌 데이터를 불러오는 중 오류 발생:', error);
//     throw error;
//   }
// };

// // 투표 전송
// export const postVotes = async (id) => {
//   try {
//     const response = await fetch(`${apiUrl}/votes`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ idolId: id }),
//     });

//     if (!response.ok) {
//       throw new Error('투표에 실패했습니다.');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('투표 중 오류 발생:', error);
//     throw error;
//   }
// };
