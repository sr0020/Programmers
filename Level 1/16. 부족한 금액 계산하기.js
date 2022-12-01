function solution(price, money, count) {
    let answer = -1;
    let total_pay = 0; // 총 필요한 이용금액
    let temp_pay = 0;
    
    // price를 count번 반복 (count번 이용)
    // 그리고 그 결과값을 temp_pay에 담기
    for(let i = 1; i <= count; i++) {
        temp_pay = price * i; // price값은 고정
        total_pay += temp_pay;
    }
    
    // 총 금액이 money보다 작은 경우, 0 return
    (total_pay < money) ? answer = 0 : answer = total_pay - money;

    return answer;
}