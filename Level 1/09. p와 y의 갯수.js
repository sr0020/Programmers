function solution(s){
    let answer = true;

    // 1. p, y 다 없는 경우를 방지하기 위해 
    // s의 모든 케이스에 값을 넣어 2번 조건과 동일하게 만듬.
    s += 'py';

    // 2. 갯수 같은 경우 = 기본값이 true (따로 처리 안 함) 
    // 3. p, y 갯수 다르면 false인 경우.
    let p = s.match(/p/gi);
    let y = s.match(/y/gi);
    
    // 추출한 문자의 갯수가 다르면 true, 다르면 false
    if(p.length !== y.length) {
        return false;
    }

    return answer;
}