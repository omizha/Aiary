# Aiary: AI와 함께하는 감정일기

> 숭실대학교 2021년 SG해커톤 최종 2등🏆
(소프트웨어 + 글로벌미디어학부 해커톤)

<table>
  <tr>
    <td align='center'>
      <img src="https://github.com/maemenaver/Aiary/blob/main/src/assets/images/splash.png?raw=true" width=200 />
    </td>
    <td align='center'>
      <img src="https://github.com/maemenaver/Aiary/blob/main/resources/imageMain.png?raw=true" width=200 />
    </td>
  </tr>
</table>

---

## SG해커톤

### 요약

**정보**: <a href="https://github.com/maemenaver/Aiary/blob/main/docs/hackatone.md">보기</a>

**주제**: 코로나

**순위** : 2등

### 교수님 피드백

* 챗봇을 이용해서 감정일기의 사용 허들을 낮춘 아이디어가 훌륭함
* 코로나 블루를 잘 이겨낼 수 있도록 도와주는 감정일기를
  AI기술과의 적절한 조합을 통해 잘 풀어냄
* AI를 활용하여 일기 작성에 재미를 준 것이 돋보임.
  시각화 디자인과 UX/UI와 같은 요소를 더 다듬을 필요는 있음
* 문제 발견 및 아이디어가 매우 우수함.
  기능 확장이 기대되는 프로젝트라고 생각됨.

---

## 개요

**이름**: Aiary (AI + Diary)

**캐치프라이즈**: 내 일기를 위한 단 한명의 독자, 아이어리

**특징**: 감정일기 작성 이후 각 문장에 대한 AI의 답글을 감상 가능

## 소개 영상

<a href="https://www.youtube.com/watch?v=LMvCehuNZ9w">
<img src="https://github.com/maemenaver/Aiary/blob/main/resources/youtube_thumbnail.PNG?raw=true" width=640 />
</a>

## 스크린샷

<table>
  <tr>
    <td align='center'>
      <img src="https://github.com/maemenaver/Aiary/blob/main/resources/screenshot_1.jpg?raw=true" width=200 />
    </td>
    <td align='center'>
      <img src="https://github.com/maemenaver/Aiary/blob/main/resources/screenshot_2.jpg?raw=true" width=200 />
    </td>
    <td align='center'>
      <img src="https://github.com/maemenaver/Aiary/blob/main/resources/screenshot_3.jpg?raw=true" width=200 />
    </td>
  </tr>
</table>

## 기획 배경

코로나19의 지속으로 코로나 블루(코로나에 의한 삶의 변화로부터 불안, 우울, 무기력감을 느끼는 현상)를 호소하는 사람이 지속적으로 발생하는 가운데, 이를 극복하기 위한 방법으로 가장 널리 추천되는 활동 중 하나가 감정일기 작성이다.

그러나, 바쁜 현대인에게 있어 감정일기 작성을 지속하는 것은 의지만으로는 쉽지 않은 일이다. 우리 조는 이러한 감정일기를 작성하는 데에 동기를 부여할 수 있는 방법이 있을지 고민하였고, 그 결과로 Aiary를 기획하게 되었다.

## 구현 기능

- 감정일기 작성하기
  - 텍스트와 함께 감정 상태를 5단계로 기록 가능
- 분석하기
  - 저장된 감정일기 화면의 버튼을 눌러 분석
  - 분석 완료 화면에는 감정일기의 각 줄에 대한 AI의 답글이 함께 표시
- 감정일기 돌아보기
  - 날짜별로 작성한 감정일기를 캘린더 및 목록 형태로 탐색 가능
- 감정 그래프
  - 최근 일주일 기록된 5단계의 감정 상태가 그래프로 표시

## 개발 스택

<table>
  <tr>
    <td><center><b>감정일기 AI 피드백</b></center></td>
    <td><center><b>프론트엔드 프레임워크</b></center></td>
  </tr>
  <tr>
    <td align='center'><a href='https://pingpong.us/'>
      <img src="https://github.com/maemenaver/Aiary/blob/main/resources/logo_pingpong.png?raw=true" width=200 /><br />
      핑퐁 빌더
    </a></td>
    <td align='center'><a href='https://reactnative.dev/'>
      <img src="https://github.com/maemenaver/Aiary/blob/main/resources/logo_reactNative.png?raw=true" width=200 /><br />
      React Native (+Expo)
    </a></td>
  </tr>
</table>

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/omizha"><img src="https://avatars.githubusercontent.com/u/4525704?v=4?s=100" width="100px;" alt=""/><br /><sub><b>하정훈</b><br />개발</sub></a></td>
    <td align="center"><a href="https://github.com/QyuriLa"><img src="https://avatars.githubusercontent.com/u/68494132?v=4?s=100" width="100px;" alt=""/><br /><sub><b>구현</b><br />기획</sub></a></td>
    <td align="center"><a href="https://github.com/yongmin01"><img src="https://github.com/maemenaver/Aiary/blob/main/resources/designerProfile.png?raw=true" width="100px;" alt=""/><br /><sub><b>조용민</b><br />디자인</sub></a></td>
  </tr>
</table>
