# CodeWarz - CodeWars and TDD


### Install Mocha
```bash
npm install -g mocha
```

### Install Chai
```bash
npm install --save chai
```

#### Expect style
<a href="http://chaijs.com/api/bdd/">Expect</a>

#### Assert style
<a href="http://chaijs.com/api/assert/">Assert</a>


### CodeWars 문제 풀기
codewars 문제 제목으로 문제 파일과 test파일 만들기.
예)
8kyu Even or Odd라는 CodeWars문제가 있으면 아래 2개의 파일을 만듭니다.
```
even_or_odd.js
even_or_odd.test.js
```
`even_or_odd.js`에는 codewars에서 만들어야 하는 function을. 그리고 이것을 `module.exports`에 assign하세요
`even_or_odd.test.js`에는 이 function이 구현해야하는 spec을. spec을 test하기전에 even_or_odd.js에서 `module.exports`를 한 function을 `require`하세요

`even_or_odd`는 예제로 풀었습니다 참고하세요.

### Continuous Testing
```bash
mocha -w even_or_odd.*
```


### 자주 GitHub에 commit + push 하세요
```bash
git add .
git commit -m 'even or odd'
git push origin master
```

