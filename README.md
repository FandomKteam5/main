
# Fandom-K

[프로젝트 배지 (예: 빌드 상태)]  
**프로젝트 설명:** "이 프로젝트는 팬들이 좋아하는 아이돌을 응원하고 투표할 수 있는 플랫폼입니다."

## 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [주요 기능](#주요-기능)
3. [기술 스택](#기술-스택)
4. [설치 및 실행 방법](#설치-및-실행-방법)
5. [폴더 구조](#폴더-구조)
6. [기여 방법](#기여-방법)
7. [팀 소개](#팀-소개)

---

## 프로젝트 소개

이 프로젝트는 팬들이 좋아하는 아이돌을 지원하고, 투표하며, 인기 차트를 확인할 수 있는 팬덤 플랫폼입니다. 사용자는 아이돌 이미지를 보고, 후원 버튼을 누르거나 투표를 할 수 있습니다.

## 주요 기능

- **아이돌 이미지 표시:** 아이돌의 이미지 및 기본 정보 제공
- **응원 및 투표 기능:** 팬들이 아이돌을 응원하거나 투표할 수 있음
- **인기 차트 확인:** 현재 인기 아이돌 순위를 확인할 수 있는 차트 제공
- **재사용 가능한 UI 컴포넌트**: 후원 및 투표 버튼, 인기 차트 등 공통 UI 요소를 컴포넌트화하여 재사용 가능

## 기술 스택

- **Frontend**: React, CSS
- **상태 관리**: 필요 시 추가 (예: Context API, Zustand)
- **API**: 외부 API를 사용하여 아이돌 정보 및 차트 데이터를 가져옴

## 설치 및 실행 방법

1. **레포지토리 클론**:

   ```bash
   git clone https://github.com/FandomKteam5/main
   cd project-name
   ```

2. **의존성 설치**:

   ```bash
   npm install
   ```

3. **개발 서버 실행**:

   ```bash
   npm start
   ```

4. **서버 접속**: `http://localhost:3000`에서 애플리케이션 확인 가능

## 폴더 구조

```plaintext
project-name/
├── public/
├── src/
│   ├── assets/          # 이미지, 아이콘 등의 정적 자원
│   ├── components/      # 재사용 가능한 UI 컴포넌트
│   ├── pages/           # 주요 페이지 컴포넌트
│   ├── services/        # API 호출 관련 함수
│   ├── styles/          # CSS 파일
│   └── App.js           # 메인 애플리케이션 컴포넌트
└── README.md
```

## 배포 링크

- [Fandom-K 배포 링크](https://team5-fandomk.netlify.app/)

## 팀 소개

- 팀 이름: **11기 5팀**
- 팀원 및 역할:
  - **김태훈** (팀장) - 프로젝트 기본 세팅, 깃허브 기본 세팅, 배포 관리, CI/CD 설정, 마이페이지 제작, 미완성 부분 마무리(후원하기 컴포넌트), 발표
  - **김규연** - 후원하기 컴포넌트 제작, 서기
  - **박종찬** - 랜딩 페이지와 네비게이션(Nav) UI 구현, 크레딧 충전 기능
  - **장수경** - 이달의 차트와 투표 모달 창, 크레딧 부족 모달 창 UI 구현 및 API 연동, 발표 자료 제작

