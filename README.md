# 🍴 BW-Table 프로젝트 🍴
<img width="100%" alt="스크린샷 2025-01-01 오후 1 50 59" src="https://github.com/user-attachments/assets/8f03f426-b1e9-4d95-b0d8-0ddc66e472bf" />

실시간 예약, 손쉬운 관리, 맞춤형 서비스 – 고객과 사장님을 위한 완벽한 외식 솔루션, **🍴 BW-Table 프로젝트 🍴**입니다. 

</br>

## 목차

## [1.프로젝트 기간](#프로젝트-기간)

## [2.사용 기술 스택](#사용-기술-스택)

## [3.주요 기능](#주요-기능)

## [4.트러블 슈팅](#트러블-슈팅)

## [5.프로젝트 아키텍처](#프로젝트-아키텍처)

</br>
</br>

## 프로젝트 기간

📍 2024.10.17 ~ 2024.12.31 📍
</br>
</br>

- 1주차: 프로젝트 기획, 와이어프레임 제작
- 2주차: front-end init setting, 공통 컴포넌트 UI 생성
- 3주차: UI 구현, 사용자 맟 일정 mock API 연동
- 4주차: next-auth를 활용한 토큰 관리 구현 및 기타 세부 UI 정리 및 수정
- 5주차: 대시보드 및 메인 페이지를 포함한 나머지 UI 전체 구축
- 6주차: 채팅 기능 & 결제 기능 구현
- 7주차: 백&프론트 연동 및 리팩토링 오류 버그 수정
- 8주차: 백&프론트 연동 및 리팩토링 오류 버그 수정
- 9주차: 백&프론트 연동 및 오류 버그 수정

</br>
</br>

## 팀원 
|  🛠️ FE 오신웅 🛠️      |  🛠️ FE 이솔 🛠️                                         |
|--------------------------|-----------------------------------------------|
|<img width="200px" src="https://github.com/user-attachments/assets/7c2c370c-1cc6-4130-b2ae-031fb58c1787"/>|<img width="200px" src="https://github.com/hoops-project/frontend/assets/138990007/e0e5c1a6-63c3-4db2-9919-9968d31b0403"/>|

## 사용 기술 스택 

### Front-End
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/Zustand-111827?style=for-the-badge&logo=zustand&logoColor=white"> <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white"> <img src="https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"> <img src="https://img.shields.io/badge/SockJS-CC0000?style=for-the-badge&logo=socket.io&logoColor=white"> <img src="https://img.shields.io/badge/STOMP-9E7CC1?style=for-the-badge&logo=apachekafka&logoColor=white">
<img src="https://img.shields.io/badge/DaisyUI-5A20CB?style=for-the-badge&logo=daisyui&logoColor=white">
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/MSW-FE7A16?style=for-the-badge&logo=mockserver&logoColor=white">


### Collaboration Tool

<img src="https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">

<br>

## 주요 기능
| 🍴 회원가입 🍴                         | 🍴 카카오톡 로그인 🍴                         |
|--------------------------------------|---------------------------------------------|
|<img width="450px" src="https://github.com/user-attachments/assets/e4af1e66-4d63-49b3-9129-b6fa688d6a7b"/>|<img width="450px" alt="스크린샷 2025-01-01 오후 2 21 33" src="https://github.com/user-attachments/assets/2e6dae9c-1c36-42d2-a0f1-76e911f20539" />|
| 🔅 사장님/손님 별 회원가입을 할 수 있어요 🔅 | 🔅 카카오톡 로그인을 하여 더욱 간단하게 로그인이 가능해요 🔅 |



|  🍴 가게 등록(사장님 가입 시) 🍴       |  🍴 가게 예약 설정(사장님 가입 시) 🍴                                         |
|--------------------------|-----------------------------------------------|
|<img width="450px" src="https://github.com/user-attachments/assets/8d053232-dd8f-47f8-aa6b-c076f0cdf27a"/>|<img width="450px" src="https://github.com/user-attachments/assets/f4aa6419-1559-418e-8514-cfe1237cd33a"/>|
|🔅 회원가입 이후 가게 등록을 할 수 있어요 🔅|🔅 가게 예약 관련 설정을 할 수 있어요 🔅|

|  🍴 가게 대시보드(사장님 가입 시) 🍴      |  🍴 예약 상태 변경(사장님 가입 시) 🍴                                         |
|--------------------------|-----------------------------------------------|
|<img width="450px" src="https://github.com/user-attachments/assets/20dbb60d-7a4c-412b-a31c-92db6c91209d"/>|<img width="450px" src="https://github.com/user-attachments/assets/7b61113e-e1b5-4448-95bc-f023bd0c3a4e"/>|
|🔅 오늘의 예약 현황을 확인할 수 있어요 🔅|🔅 사장님이 예약 상태를 변경할 수 있어요 🔅|

|  🍴 메인 페이지(손님 가입 시) 🍴      |  🍴 가게 상세 정보(손님 가입 시) 🍴                                         |
|--------------------------|-----------------------------------------------|
|<img width="450px" src="https://github.com/user-attachments/assets/22515e7a-644b-44c8-be1d-dbe0f0be207b"/>|<img width="450px" src="https://github.com/user-attachments/assets/27c607b3-2839-4453-9e0b-3137c7bb9887"/>|
|🔅 다양한 카테고리의 정보를 볼 수 있어요 🔅|🔅 가게 상세 정보를 확인할 수 있어요 🔅|

|  🍴 예약부터 결제까지(손님 가입 시) 🍴      |  🍴 예약 후 채팅(손님 가입 시) 🍴                                        |
|--------------------------|-----------------------------------------------|
|<img width="450px" src="https://github.com/user-attachments/assets/4f119fec-0540-466d-9ab8-43079fe29c26"/>|<img width="450px" src="https://github.com/user-attachments/assets/3820fe53-e609-4e65-9f44-1bda496809bc"/>|
|🔅 사장님이 설정한 예약금을 기반으로 예약과 결제가 동시진행 되어요 🔅|🔅 예약 후 필요 시 식당과 채팅이 가능해요 🔅|

|  🍴 나의 리뷰(손님 가입 시) 🍴      |  🍴 나의 예약(손님 가입 시) 🍴                                        |
|--------------------------|-----------------------------------------------|
|<img width="450px" src="https://github.com/user-attachments/assets/686628c9-5185-4691-9578-8acf551149a4"/>|<img width="450px" src="https://github.com/user-attachments/assets/2749871d-33be-45de-9fa9-8c7ee5e8ca22"/>|
|🔅 내가 작성한 모든 리뷰를 볼 수 있어요 🔅|🔅 내가 예약한 모든 기록을 볼 수 있어요 🔅|

|  🍴 카테고리 별로 식당 보기(손님 가입 시) 🍴      |  🍴 나의 검색(손님 가입 시) 🍴                                        |
|--------------------------|-----------------------------------------------|
|<img width="450px" src="https://github.com/user-attachments/assets/564d8bee-19a3-463d-8330-4c7c8c8a054b"/>|<img width="450px" alt="스크린샷 2025-01-01 오후 3 38 27" src="https://github.com/user-attachments/assets/81fc54ac-3a9f-4e0e-8f8f-2d7a20a52394" />|
|🔅 각 카테고리 별로 식당리스트를 볼 수 있어요 🔅|🔅 카테고리별, 해시태그 별 검색할 수 있어요 🔅|
<br>

## 트러블 슈팅

### 🔫 Trouble-Shooting #1
</br>
</br>

![백엔드 트러블슈팅](https://github.com/user-attachments/assets/a59d6b66-af42-4897-b8d0-747b6b54a402)

</br>
</br>

### 🚨문제 상황
가게 등록 시 분명히 클라이언트에서는 요청 성공으로 나오는데, 백엔드 서버에는 값이 누락된 채로 빈값으로 도달하는 오류가 생겼다. 
혹시 클라이언트의 페이로드가 문제가 있나 살펴봤지만, 이 또한 잘 나오고 있는 것으로 확인됐다.
</br>
</br>

### 🍒 클라이언트 페이로드 🍒
</br>
</br>
<img width="50%" alt="트러블슈팅" src="https://github.com/user-attachments/assets/4c63034d-7948-4de3-9f2f-9372f4b2c746" />
<img width="50%" alt="가게등록" src="https://github.com/user-attachments/assets/7cb30f05-714c-4af4-9cab-ead4941706d5" />
</br>
</br>

백엔드 내에서 'Content-Type'이 multipart/form-data 형식으로 오지 않는다고 했다. 분명히 new formData로 선언했기에 그럴 일이 없다고 생각했는데, 코드를 전부 찾아본 뒤에야 원인을 파악할 수 있었다!
</br>
</br>
<img width="995" alt="스크린샷 2025-01-01 오후 4 06 33" src="https://github.com/user-attachments/assets/6418eb20-cc08-43f8-96ea-1f08ff5c2d9c" />
</br>
</br>

### ⁇ 원인은 무엇인가
토큰 헤더 설정 때 이미 헤더를 config.headers['Content-Type'] = 'application/json';로 다 설정해서 지정해버린 것...! 
</br>

### 🛠️문제를 해결하는 방법
해당 부분을 지우고 나니 가게 등록에 성공하였다. 함부로 content-type을 임의로 설정하지 말도록 하자.
</br>
</br>

### 🔫 Trouble-Shooting #2
</br>
</br>

<img width="640" alt="예약정보" src="https://github.com/user-attachments/assets/e549020a-0497-4a92-a546-13a52a4a79c3" />

### 🚨문제 상황
ReservationForm과 상위 컴포넌트인 ReservationPage의 상태 관리 흐름이 겹치는 오류 발생.

### ⁇ 원인은 무엇인가

상태를 상위 컴포넌트(`ReservationsPage`)가 아닌, 각 하위 컴포넌트에서 관리하여 데이터 흐름이 복잡해지고, 컴포넌트 간 상태 전달이 불안정한 상태가 됨!

우리가 보통 알고 있는 구조는 하위 컴포넌트에서 상위 컴포넌트로 props를 전달하는 방식인데 , 

그 구조는 틀린 게 아닌데 왜 오류가 날까? 

알아보니 내가 만들고 있는 예약 폼 같은 경우 많은 정보를 여러 컴포넌트에서 사용하고 , 상태관리를 하기 때문에 그 구조로 하면 데이터 흐름이 겹치면서 상태 전달에 오류가 생기는 일이 많다고 한다. 

### 🛠️문제를 해결하는 방법

**ReservationsPage에서 모든 예약 상태 관리**

- `selectedDate`, `selectedTime`, `selectedPeople`, `specialRequest` 상태를 최상위 컴포넌트인 `ReservationsPage`에서 관리하게 만드는 것.
- `ReservationForm`에서 선택 시 `ReservationsPage`의 상태를 업데이트하고, 이를 `ReservationConfirm`에 전달.

📌 구조 비교 예시 
<img width="737" alt="구조비교" src="https://github.com/user-attachments/assets/5e60aef5-ede6-493f-8d1b-1039f25b58a2" />


</br>
</br>


## 프로젝트 아키텍처
<img width="100%" alt="스크린샷 2025-01-01 오후 4 03 17" src="https://github.com/user-attachments/assets/37eb20b8-128d-4b3b-b1a9-64dc3b8de0e3" />
