# 새발개발자 포트폴리오

## 개요
- 새발개발자 포트폴리오 웹사이트입니다
- Next.js 를 사용하여 그간의 코드 작업물들을 볼 수 있습니다

## 기술 스택
- Next.js


## 페이지 구성

- Main

![image](https://github.com/beemee-p/sbja-portfolio/assets/72956452/2cc47f20-4741-46a3-bd2e-78411ed82eda)



- Detail - Page

![image](https://github.com/beemee-p/sbja-portfolio/assets/72956452/3d873da2-1611-42c0-9c46-6b2a05d28a32)



- Detail - Modal

![image](https://github.com/beemee-p/sbja-portfolio/assets/72956452/d9cf42f5-9730-49b9-857c-185e68d8753e)

![image](https://github.com/beemee-p/sbja-portfolio/assets/72956452/2cd0b862-c848-4791-8ed9-49dbf1f0400c)

## 배포 스케줄 

**Dec 3rd (12/11 - 12/17)** 

- 포트폴리오 1차
    - ~~리스트 페이지 GRID 컴포넌트 추가~~
    - ~~디테일 페이지 모달화~~
    - ~~포트폴리오 카드 UI~~

**Dec 4th (12/18 - 12/24)**

- 포트폴리오 2차
    - 디테일 샘플 데이터 추가
    - ~~디테일 모달 interrupt route 적용~~
    - ~~README 작성~~

**Dec 5th (12/25 - 12/31)**

- 포트폴리오 3차
    - 모달 ui 업데이트
    - PORTFOLIO 모델 리팩토링

**Jan 1st (01/01 - 01/07)**

- 포트폴리오 4차
    - Strapi - API 데이터로 변경
    - css module -> tailwind css 로 변경


## 여느날의 작업 기록

12월 3주차
- md 파일들로 샘플 데이터를 implement 하는 작업을 마치고, gray-matter 라는 라이브러리를 사용해 심플한 파일 포맷을 json 으로 변경하여 서버측에서 보내주도록 하는 간단한 세팅을 해놓았다
- responsive 한 이미지 사이즈가 한템포 늦게 떠서 기존의 css module 에서 css in js 로 변경해야겠다는 생각을 하였고, tailwind css 로 변경해야겠다는 생각을 하였다.

12월 4주차
- 메인 페이지에서 카드를 클릭하면 나오는 디테일 모달을 url로 띄우기 위해 Intercepting Routes 기법을 적용하였다.
- Intercepting Routes 은 현재 레이아웃 내에서 다른 route 로 오버레이 되어 로드가 가능하다. 즉, 기존에 있던 라우트 위에 또 다른 라우트를 인터셉트해서 띄우는 것이 가능하다. 하지만 새로고침을 하게 되면 모달이 아닌 해당 라우트를 가진 페이지로 이동이 되어야 한다
- 리액트에서는 이를 구현하기 위해 useHistory 를 사용하여 부단한 노력을 하였다. 하지만 next.js 는 디렉터리 내에 몇가지 세팅을 함으로써 너 - 무 손쉽게 구현이 가능하다니...
  



## REF. 
- [Vogue Korea](https://www.vogue.co.kr/)
- [Dribble](https://dribbble.com/)
- [Notefolio](https://notefolio.net/)
  
