function solution(left, right) {
    let answer = 0;
    let arr = [];
    
    // 약수의 갯수 구하기
    // left~right 모든 숫자들을 left로 나눈 나머지가 0이면 약수
    for(let i = left; i <= right; i++) {
        arr = []; // for문 돌 때마다 배열 재선언. 이래야 각 숫자별 약수 구하기 가능
        for(let j = 0; j <= i; j++) {
            if(i % j === 0) { // right % j가 아니라 i % j
                arr.push(j);
            }
        }
        
        // 각 숫자 별 약수의 갯수(arr.length)가 짝수인지 홀수인지 판별
        // 짝수면 더하고 홀수면 빼기
        answer += arr.length % 2 === 0 ? i : -i;
    }
    
    return answer;
}