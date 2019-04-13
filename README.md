# vue-fast-scroll

Android의 Fast Scroll을 Web 기반의 Vue.js에서 지원하기 위한 플러그인입니다.

## Demo

[CodePen.io](https://codepen.io/beomy/pen/eoEOvW?editors=1010)

example 디렉토리 밑에 예제 파일로도 확인 할 수 있습니다.

## Install

### CDN

<pre><code>&lt;link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/vue-fast-scroll@0.0.1/dist/css/vue-fast-scoll.css" /&gt;
&lt;script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue-fast-scroll@0.0.1/dist/js/vue-fast-scroll.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
    Vue.use(window.VueFastScroll)
&lt;/script&gt;</code></pre>

### NPM

<pre><code>npm install vue-fast-scroll
or
yarn add vue-fast-scroll</code></pre>

<pre><code>import Vue from 'vue'
import VueFastScroll from 'vue-fast-scroll'

Vue.use(VueFastScroll)</code></pre>

## 사용 설명

### fast-scroll Component

fast-scroll 컴포넌트를 사용하여 그 안에 fast scroll을 지원해야 될 엘리먼트를 선언합니다. fast-scroll 컴포넌트는 key-list 프로퍼티를 가집니다.

<pre><code>&lt;fast-scroll :key-list="fastScrollKeyList"&gt;
  ...
&lt;/fast-scroll&gt;</code></pre>

### key-list Property

key-list 프로퍼티로 전달 되어야 할 값은 key와 text를 쌍으로 가지는 객체입니다. key는 스크롤 될 리스트를 검색할 키이고, text는 스크롤 될 수 있는 key 리스트를 화면에 나타낼 문자열입니다.

<pre><code>fastScrollKeyList = {
  {key: 'ㄱ', text: 'ㄱ'},
  {key: 'ㄴ', text: 'ㄴ'},
  {key: 'ㄷ', text: 'ㄷ'},
  {key: 'ㄹ', text: 'ㄹ'},
  {key: 'ㅁ', text: 'ㅁ'},
  {key: 'ㅂ', text: 'ㅂ'},
  {key: 'ㅅ', text: 'ㅅ'},
  {key: 'ㅇ', text: 'ㅇ'},
  {key: 'ㅈ', text: 'ㅈ'},
  {key: 'ㅊ', text: 'ㅊ'},
  {key: 'ㅋ', text: 'ㅋ'},
  {key: 'ㅌ', text: 'ㅌ'},
  {key: 'ㅍ', text: 'ㅍ'},
  {key: 'ㅎ', text: 'ㅎ'}
}</code></pre>

위의 코드와 같이 key-list를 구성한다면, HTML에는

<pre><code>&lt;div class="side-indexer"&gt;
  &lt;ul&gt;
    &lt;li&gt;ㄱ&lt;/li&gt;
    &lt;li&gt;ㄴ&lt;/li&gt;
    &lt;li&gt;ㄷ&lt;/li&gt;
    &lt;li&gt;ㄹ&lt;/li&gt;
    &lt;li&gt;ㅁ&lt;/li&gt;
    &lt;li&gt;ㅂ&lt;/li&gt;
    &lt;li&gt;ㅅ&lt;/li&gt;
    &lt;li&gt;ㅇ&lt;/li&gt;
    &lt;li&gt;ㅈ&lt;/li&gt;
    &lt;li&gt;ㅊ&lt;/li&gt;
    &lt;li&gt;ㅋ&lt;/li&gt;
    &lt;li&gt;ㅌ&lt;/li&gt;
    &lt;li&gt;ㅍ&lt;/li&gt;
    &lt;li&gt;ㅎ&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>

위의 HTML이 랜더링 됩니다. 이 엘리먼트를 `인덱스 리스트`라고 하도록 하겠습니다.

### fast-scroll Component의 Slot

fast-scroll 컴포넌트의 자식 컴포넌트로 fastScrollItems라는 이름을 가지는 Slot을 정의해야 합니다. 이 Slot은 스크롤 될 엘리먼트가 됩니다. 이 엘리먼트를 `스크롤 리스트`라고 하도록 하겠습니다.

<pre><code>&lt;fast-scroll&gt;
  &lt;ul slot="fastScrollItems"&gt;
    ...
  &lt;/ul&gt;
&lt;/fast-scroll&gt;</code></pre>

### fast-key Property

fast-key 프로퍼티는 스크롤 될 엘리먼트 각각에 선언되어야 하는 프로퍼티입니다. fast-key에 정의 된 값과 key-list 프로퍼티 객체 요소의 key와 매칭 된 위치로 스크롤 됩니다.

<pre><code>&lt;fast-scroll&gt;
  &lt;ul slot="fastScrollItems"&gt;
    &lt;li :fast-key="'ㄱ'"&gt;김치&lt;/li&gt;
    ...
  &lt;/ul&gt;
&lt;/fast-scroll&gt;</code></pre>

## Style

### `.side-indexer`

Fast Scroll 할 key과 text로 구성된 `인덱스 리스트`의 스타일 클래스(`<div class="side-indexer"></div>`)입니다.

### `.fast-scroll-toggle`

어느 위치로 스크롤 되었는지 나타내는 문자열의 스타일 클래스(`<div class="fast-scroll-toggle"></div>`) 입니다.

## Author
[Hyo Bum Lee](https://beomy.tistory.com)