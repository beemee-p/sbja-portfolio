# 새발개발자 포트폴리오

## 개요
- 새발개발자 포트폴리오 웹사이트입니다
- Next.js 를 사용하여 그간의 코드 작업물들을 볼 수 있습니다

## 기술 스택
- Next.js


## 페이지 구성 (하단 Reference 이미지 참고)

- Main
헤더 / 비디오 / 리스트 / 푸터

![image](https://github.com/beemee-p/sbja-portfolio/assets/72956452/2cc47f20-4741-46a3-bd2e-78411ed82eda)



- Detail - Page
헤더 / 포스팅 / 푸터
페이지 형식으로 구성

![image](https://github.com/beemee-p/sbja-portfolio/assets/72956452/3d873da2-1611-42c0-9c46-6b2a05d28a32)



- Detail - Modal
모달 형식으로 구성(interrupt route)

![image](https://github.com/beemee-p/sbja-portfolio/assets/72956452/d9cf42f5-9730-49b9-857c-185e68d8753e)
![image](https://github.com/beemee-p/sbja-portfolio/assets/72956452/2cd0b862-c848-4791-8ed9-49dbf1f0400c)



## 배포 스케줄

**Dec 3rd (12/11 - 12/17)** 

- 포트폴리오 1차
    - ~~디테일 페이지 모달화~~
    - ~~포트폴리오 카드 UI~~

**Dec 4th (12/18 - 12/24)**

- 포트폴리오 2차
    - ~~디테일 데이터 추가~~
    - ~~README 작성~~

**Dec 5th (12/25 - 12/31)**

- 포트폴리오 3차
    - ~~모달 ui 업데이트 (마무리)~~

**Jan 1st (01/01 - 01/07)**

- 포트폴리오 4차
    - ~~포트폴리오 데이터 추가 (마무리)~~
    - ui 애니메이션 고도화
    - 이미지 로딩 등 성능 고도화, 캐싱

**Jan 2nd (01/08 - 01/14)**

- 포트폴리오 5차
    - 최신 데이터 추가
    - tailwind css 로 변경
    - Strapi - API 데이터로 변경


## 여느날의 작업 기록

12월 3주차
- md 파일들로 샘플 데이터를 implement 하는 작업을 마치고, gray-matter 라는 라이브러리를 사용해 심플한 파일 포맷을 json 으로 변경하여 서버측에서 보내주도록 하는 간단한 세팅을 해놓았다
- responsive 한 이미지 사이즈가 한템포 늦게 떠서 기존의 css module 에서 css in js 로 변경해야겠다는 생각을 하였고, tailwind css 로 변경해야겠다는 생각을 하였다.

12월 4주차
- 메인 페이지에서 카드를 클릭하면 나오는 디테일 모달을 url로 띄우기 위해 Intercepting Routes 기법을 적용하였다.
- Intercepting Routes 은 현재 레이아웃 내에서 다른 route 로 오버레이 되어 로드가 가능하다. 즉, 기존에 있던 라우트 위에 또 다른 라우트를 인터셉트해서 띄우는 것이 가능하다. 하지만 새로고침을 하게 되면 모달이 아닌 해당 라우트를 가진 페이지로 이동이 되어야 한다
- 리액트에서는 이를 구현하기 위해 useHistory 를 사용하여 부단한 노력을 하였다. 하지만 next.js 는 디렉터리 내에 몇가지 세팅을 함으로써 너 - 무 손쉽게 구현이 가능하다니...

1월 1주차
- 일반 블로그 포스팅처럼 한 영역 내에 글과 영상이 들어가게 되니, 조금 가독성이 떨어지는 것 같아 두개의 패널로 나누는 작업을 하였다.
- 이제 리소스 영역과 텍스트 영역이 가시적으로 니뉘어서 프로젝트의 부차적인 설명을 한눈에 알아볼 수 있다.
- 비디오 play 기능을 ui 적으로 좀 더 업그레이드 하였다. 마우스 호버시에 play / stop 을 핸들링 할 수 있도록
- 한 페이지 내에 들어간 이미지와 설명이 필요한 것 같아 마우스 오버시에 간단한 설명이 따라다닐 수 있도록 기능을 붙였다. 처음에는 스크롤한 길이는 포함하지 않고 화면의 좌표만 계산해서 스크롤 시에 마우스와 툴팁의 간극이 멀어지는 이슈가 있었다. 조금 삽질하다가 scroll 되는 영역의 dom의 scrollTop 을 더해주었더니 해결되었다.

1월 2주차
- 그간 노션에 존재하던 포트폴리오 데이터들을 마크다운 형식으로 implement 하였다
- 포트폴리오 페이지를 모달 레이아웃과 같은 구성으로 업데이트 하였다. 이제 모달과 페이지가 일체화가 되었다.

## REF. 
- [Vogue Korea](https://www.vogue.co.kr/)
- [Dribble](https://dribbble.com/)
- [Notefolio](https://notefolio.net/)
  
