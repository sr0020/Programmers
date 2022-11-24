function solution(x, n) {
    let answer = [];
    let temp = 0; 
    
    // x부터 시작해 x씩 증가하는 숫자
    for(let i = 0; i < n; i++) {
        temp = x + x * i; // x + x * i가 아닌 x + x로 풀이하면 배열의 결과값이 4 4 4 4 4 이렇게 출력됨
        answer.push(temp);
    }
    
    return answer;
}