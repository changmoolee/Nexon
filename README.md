<h1>wanted-codestates-project-9 넥슨 과제</h1>


### 배포 url
https://kartrider-joseph.netlify.app/
<br><br>

## 자세한 실행 방법

<br>
1. git clone 명령어를 통해 로컬에 git 저장소를 복제합니다.
<pre><code>git clone https://github.com/changmoolee/wanted-codestates-project-9.git</code></pre>
2. 다운 받은 폴더로 이동합니다.
<pre><code>cd wanted-codestates-project-9</code></pre>
3. npm install 명령어를 입력하여 모듈들을 다운로드합니다.
<pre><code>npm install</code></pre>
4. npm start 명령어를 입력하여 실행합니다.
<pre><code>npm start</code></pre>
<br>

## 사용한 스택
react, styled-components
<br><br><br>

## 폴더 구조
- pages
페이지는 Main.js 페이지 구현 중에 있습니다.(미완성)

- components
Header와 Footer를 비롯하여 Main 페이지를 구성하는 컴포넌트 파일들이 있습니다.
<br><br><br>

## Header

### 1. Drawer, Tab 기능
클릭하면 나오는 Drawer를 비롯하여, hover시 bottom-line이 생기는 tab 창들을 구현했습니다.
<br><br>
![Header](https://user-images.githubusercontent.com/84559872/160138297-7fa679df-037a-4e9c-8353-93311a316790.gif)
<br><br>
### 2. 검색 기능, Loading 기능
닉네임 검색 시 데이터를 받아오도록 하였습니다.(미완성) <br>
api 호출 중에는 Loading창이 구현되도록 하였습니다.
<br><br>
![로딩및검색](https://user-images.githubusercontent.com/84559872/160141519-610af9fc-2094-4d10-9759-683345f6433a.gif)

#### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

cors 에러를 마주쳤는데, heroku를 통한 proxy 서버를 활용하여 해결하였습니다.


<br><br><br>
## Main

### 1. 신고관련 Modal기능
 버튼을 누르면 Modal이 나오고 Modal창 이외 Dim을 누르면 사라집니다. <br>빈 문자열 만 입력시, 추가 Modal이 나오도록 구현했습니다.
 <br><br>
![Modal](https://user-images.githubusercontent.com/84559872/160142497-caeffc75-8b9d-42ab-bb35-8c26fe147459.gif)

#### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
중첩된 modal을 구현하는게 잠시 혼란스러웠지만 z-index를 달리 주어 해결할 수 있었습니다.

<br><br>
### 2. Animation 기능
총 길이 20초로 애니메이션이 무한 반복됩니다. 
<br><br> 
![애니메이션](https://user-images.githubusercontent.com/84559872/160143373-fa036fef-0ec2-4c7f-9711-958ada2eca43.gif)

#### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

linear-gradient로 원하는 색 변화를 가진 배경을 얻을 수 있었지만 길게 늘여서 지속적으로 애니메이션화 시키는 방법을 찾기 힘들었습니다. <br>
이는 background 사이즈를 키움으로써 해결할 수 있었습니다.   

<br><br>  
### 3. 응원 한마디 구현

닉네임과 응원을 남기면 응원이 추가됩니다. 닉네임, 응원을 빈 문자열만 입력 시 alert이 나옵니다.<br>
서버 등을 활용한 구현에는 실패했습니다.(미완성)
<br><br> 
![응원남기기](https://user-images.githubusercontent.com/84559872/160145053-e3c7e0dd-883a-4eb4-8ed4-774fecb3152d.gif)

### 4. Drawer 기능
각 Match의 arrow icon을 클릭하면 drawer가 나옵니다.<br> 
서버를 미구현으로 카트 이미지 등 데이터는 구현하지 못했습니다.(미완성)
<br>

![drawer](https://user-images.githubusercontent.com/84559872/160175003-6734b2b8-cd9e-45eb-af58-8f3b343a3ab9.gif)


