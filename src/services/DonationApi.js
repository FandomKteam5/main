const apiUrl = process.env.REACT_APP_BASE_URL;

// 조공 목록 가져오기

export const getDonations = async ({ cursor = 0, pageSize = 4 } = {}) => {
  const queryParams = new URLSearchParams();

  if (cursor !== null) {
    queryParams.append('cursor', cursor);
  }
  queryParams.append('pageSize', pageSize);

  const query = queryParams.toString();
  const response = await fetch(`${apiUrl}/donations?${query}`);
  if (!response.ok) {
    throw new Error('조공 목록을 가져오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
};

// 데이터 목록 예시
// pageSize:4, cursor:0일 때
// {
//   "list": [
//     {
//       "id": 634,
//       "idolId": 4244,
//       "title": "원빈 팬미팅",
//       "subtitle": "서울역 4번 출구",
//       "targetDonation": 1000000,
//       "receivedDonations": 0,
//       "createdAt": "2024-11-06T23:36:27.553Z",
//       "deadline": "2024-11-10T23:59:59.000Z",
//       "status": true,
//       "idol": {
//         "id": 4244,
//         "name": "원빈",
//         "gender": "male",
//         "group": "라이즈",
//         "profilePicture": "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1730760632760/wonbin.png",
//         "totalVotes": 0
//       }
//     },
//     {
//       "id": 633,
//       "idolId": 4242,
//       "title": "소희 팬미팅",
//       "subtitle": "서울역 4번 출구",
//       "targetDonation": 1000000,
//       "receivedDonations": 0,
//       "createdAt": "2024-11-06T23:36:16.283Z",
//       "deadline": "2024-11-10T23:59:59.000Z",
//       "status": true,
//       "idol": {
//         "id": 4242,
//         "name": "소희",
//         "gender": "male",
//         "group": "라이즈",
//         "profilePicture": "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1730760540985/sohee.png",
//         "totalVotes": 0
//       }
//     },
//     {
//       "id": 632,
//       "idolId": 4241,
//       "title": "안톤 팬미팅",
//       "subtitle": "서울역 4번 출구",
//       "targetDonation": 1000000,
//       "receivedDonations": 0,
//       "createdAt": "2024-11-06T23:36:02.249Z",
//       "deadline": "2024-11-10T23:59:59.000Z",
//       "status": true,
//       "idol": {
//         "id": 4241,
//         "name": "안톤",
//         "gender": "male",
//         "group": "라이즈",
//         "profilePicture": "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1730760497395/anton.png",
//         "totalVotes": 0
//       }
//     },
//     {
//       "id": 631,
//       "idolId": 4239,
//       "title": "로제 팬미팅",
//       "subtitle": "서울역 4번 출구",
//       "targetDonation": 1000000,
//       "receivedDonations": 0,
//       "createdAt": "2024-11-06T23:35:43.141Z",
//       "deadline": "2024-11-10T23:59:59.000Z",
//       "status": true,
//       "idol": {
//         "id": 4239,
//         "name": "로제",
//         "gender": "female",
//         "group": "블랙핑크",
//         "profilePicture": "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1730760380783/rose.png",
//         "totalVotes": 0
//       }
//     }
//   ],
//   "nextCursor": 631
// }
