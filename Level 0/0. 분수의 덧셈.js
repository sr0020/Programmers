function solution(denum1, num1, denum2, num2) {
    let answer = [];
    let result_denum = 0; // 최종 결과값 분자
    let result_num = 0; // 최종 결과값 분모
    let gcd = 0;
    
    // 1. 분수의 덧셈
    // 분모 통분. num1, num2의 최소공배수
    result_denum = denum1 * num2 + denum2 * num1;
    result_num = num1 * num2;
    
    // 2. 기약분수 (1. 약수 구하기 알고리즘 이용(for문), 2. 최대공약수로 나눈 결과값 배열에 담기(result_denum, result_num 부분))
    for(let i = 0; i <= result_denum; i++) {
        if ((result_denum % i === 0) && (result_num % i === 0)) {
            gcd = i; // 최대공약수 나올 때까지 계속 gcd에 대입하며 갱신
        }
    }
    
    result_denum = result_denum / gcd;
    result_num = result_num / gcd;
    
    answer.push(result_denum);
    answer.push(result_num);
    
    return answer;
}