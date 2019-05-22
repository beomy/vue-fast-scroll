# vue-fast-scroll

모바일의 Fast Scroll 기능을 Web 기반의 Vue.js에서 지원하기 위한 플러그인입니다.

## Demo

[CodePen.io](https://codepen.io/beomy/pen/eoEOvW?editors=1010)

example 디렉토리 밑에 예제 파일로도 확인 할 수 있습니다.

## Install

### CDN

<pre><code>&lt;link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/vue-fast-scroll@0.0.6/dist/css/vue-fast-scoll.css" /&gt;
&lt;script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue-fast-scroll@0.0.6/dist/js/vue-fast-scroll.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
    Vue.use(window.VueFastScroll)
&lt;/script&gt;</code></pre>

### NPM

<pre><code>npm install vue-fast-scroll
or
yarn add vue-fast-scroll</code></pre>

#### global

<pre><code>import Vue from 'vue'
import VueFastScroll from 'vue-fast-scroll'
import 'vue-fast-scroll/dist/css/vue-fast-scoll.css'

Vue.use(VueFastScroll)</code></pre>

#### local

<pre><code>import Vue from 'vue'
import { fastScroll } from 'vue-fast-scroll'
import 'vue-fast-scroll/dist/css/vue-fast-scoll.css'

export default {
  components: {
    fastScroll
  }
}</code></pre>

## 사용 설명

### `fast-scroll` Component

`fast-scroll` 컴포넌트를 사용하여 그 안에 fast scroll을 지원해야 될 엘리먼트를 선언합니다. `fast-scroll` 컴포넌트는 `key-list` 프로퍼티와 `options` 프로퍼티를 가집니다.

<pre><code>&lt;fast-scroll :key-list="fastScrollKeyList" :options="options"&gt;
  ...
&lt;/fast-scroll&gt;</code></pre>

### `key-list` Property

`key-list` 프로퍼티로 전달 되어야 할 값은 `key`와 `text`를 쌍으로 가지는 객체입니다.

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

위의 코드와 같이 `key-list`를 구성한다면, HTML에는

<pre><code>&lt;div class="index-list"&gt;
  &lt;ul&gt;
    &lt;li fast-scroll-key="ㄱ"&gt;ㄱ&lt;/li&gt;
    &lt;li fast-scroll-key="ㄴ"&gt;ㄴ&lt;/li&gt;
    &lt;li fast-scroll-key="ㄷ"&gt;ㄷ&lt;/li&gt;
    &lt;li fast-scroll-key="ㄹ"&gt;ㄹ&lt;/li&gt;
    &lt;li fast-scroll-key="ㅁ"&gt;ㅁ&lt;/li&gt;
    &lt;li fast-scroll-key="ㅂ"&gt;ㅂ&lt;/li&gt;
    &lt;li fast-scroll-key="ㅅ"&gt;ㅅ&lt;/li&gt;
    &lt;li fast-scroll-key="ㅇ"&gt;ㅇ&lt;/li&gt;
    &lt;li fast-scroll-key="ㅈ"&gt;ㅈ&lt;/li&gt;
    &lt;li fast-scroll-key="ㅊ"&gt;ㅊ&lt;/li&gt;
    &lt;li fast-scroll-key="ㅋ"&gt;ㅋ&lt;/li&gt;
    &lt;li fast-scroll-key="ㅌ"&gt;ㅌ&lt;/li&gt;
    &lt;li fast-scroll-key="ㅍ"&gt;ㅍ&lt;/li&gt;
    &lt;li fast-scroll-key="ㅎ"&gt;ㅎ&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>

위의 HTML이 랜더링 됩니다. 이 엘리먼트를 `인덱스 리스트`라고 하도록 하겠습니다. `인덱스 리스트`는 fast scroll key 목록을 리스트로 나타내는 엘리먼트 입니다.

`fast-scroll-key`에는 `key-list` 프로퍼티 리스트 아이템의 `key` 값이 되고, `li` 태그의 문자열은 `key-list` 프로터티 리스트 아이템의 `text`가 됩니다.

### `options` 프로퍼티

Fast Scroll의 옵션 설정 프로퍼티입니다.

<pre><code>const options = {
  toggleDurationTime: 500,
  paddingScroll: 0
}</code></pre>

#### `toggleDurationTime` (default: 500)

Fast Scroll 시 어느 위치로 이동했는지 나타내는 토글 텍스트의 유지시간을 설정 합니다. 단위는 ms입니다.

#### `paddingScroll` (default: 0)

Fast Scroll 시 타겟 위치보다 얼마나 더 스크롤 할 것인지 설정 합니다.

### `fast-scroll` Component의 Slot

`fast-scroll` 컴포넌트의 자식 컴포넌트로 `scrollList`라는 이름을 가지는 Slot을 정의해야 합니다. 이 Slot은 스크롤 될 엘리먼트가 됩니다. 이 엘리먼트를 `스크롤 리스트`라고 하도록 하겠습니다.

<pre><code>&lt;fast-scroll&gt;
  &lt;ul slot="scrollList"&gt;
    ...
  &lt;/ul&gt;
&lt;/fast-scroll&gt;</code></pre>

### `fast-scroll-key` Property

`fast-scroll-key` 프로퍼티는 `스크롤 리스트` 각각의 아이템에 선언되어야 하는 프로퍼티입니다.

`fast-scroll` 컴포넌트의 `key-list` 프로퍼티에 정의 된 `key`와 `fast-scroll` 컴포넌트의 하위 컴포넌트에 정의 된 `fast-scroll-key`가 매칭 되는 엘리먼트를 찾아 스크롤 되게 됩니다.

<pre><code>&lt;fast-scroll&gt;
  &lt;ul slot="scrollList"&gt;
    &lt;li :fast-scroll-key="'ㄱ'"&gt;김치&lt;/li&gt;
    ...
  &lt;/ul&gt;
&lt;/fast-scroll&gt;</code></pre>

## Style

### `.scroll-list`

Fast Scroll로 스크롤 될 `스크롤 리스트`의 스타일 클래스(`<div class="scroll-list"></div>`)입니다.

### `.index-list`

Fast Scroll 할 `key`과 `text`로 구성된 `인덱스 리스트`의 스타일 클래스(`<div class="index-list"><ul>...</ul></div>`)입니다.

### `.fast-scroll-toggle`

어느 위치로 스크롤 되었는지 나타내는 문자열의 스타일 클래스(`<div class="fast-scroll-toggle"></div>`) 입니다.

### `.fade-leave-active`, `.fade-leave-to`

어느 위치로 스크롤 되었는지 나타내는 문자열의 fade Animation 스타일 클래스 입니다.

## Author
[Hyo Bum Lee](https://beomy.tistory.com)