## Integer Triangle (정수 삼각형)

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/43105)

+ 분류 : DP
+ 사용 언어 : C++

### 문제 설명
```bash
    7
   3 8
  8 1 0
 2 7 4 4
4 5 2 6 2
```
삼각형의 상단 꼭지점(`7`)에서 시작하여, 왼쪽 아래(`3`) 혹은 오른쪽 아래(`8`) 숫자를 택할 수 있다.
합이 최대가 되도록 선택한 뒤, 최대값을 출력한다.

### 풀이 설명
`(y, x)`에서 시작하는 경로의 최대값을 반환하는 함수 `path(y, x)`를 정의한다.
현재까지 구한 함수의 결과 값은 `cache[y][x]`에 저장하여 계산 횟수를 줄인다.
문제를 풀기위한 점화식을 정의하면,
`path(y , x) = triangle[y][x] + max(path(y+1, x), path(y+1, x+1))`
이다.