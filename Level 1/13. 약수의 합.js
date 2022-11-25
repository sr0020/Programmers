function solution(n) {
    let answer = 0;
    let sum = [];
    
    // 약수 구하기
    // n에서 1~n까지의 숫자를 나눔
    for(let i = 0; i <= n; i++) {
        if(n % i == 0) { // 약수인 경우
            sum.push(i);
        }
    }
    
    // 약수를 모두 더한 값
    for(let i = 0; i < sum.length; i++) {
        answer += sum[i];
    }
    
    return answer;
}