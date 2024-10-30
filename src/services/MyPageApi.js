const apiUrl = process.env.REACT_APP_BASE_URL;

// 아이돌 목록 가져오기
// GET /idols
// parameters
// cursor: number(query) 커서(옵션)
// pageSize: number(query)
// keyword: string(query) 검색키워드(옵션)
export const getIdols = async ({ cursor, pageSize = 16 } = {}) => {
  const queryParams = new URLSearchParams();

  if (cursor !== undefined) {
    queryParams.append('cursor', cursor);
  }
  queryParams.append('pageSize', pageSize);

  const query = queryParams.toString();
  const response = await fetch(`${apiUrl}/idols?${query}`);
  if (!response.ok) {
    throw new Error('아이돌 목록을 가져오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
};
