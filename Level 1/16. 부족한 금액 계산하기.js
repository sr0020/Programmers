// !!! 정답코드 아님. 추후 수정 !!!

function solution(price, money, count) {
    let answer = -1;
    let total_pay = 0; // 총 필요한 이용금액
    let n = 1;
    
    // price번 반복
    for(let i = 1; i <= count; i++) {
        n = n * i;
        total_pay += n;
        console.log(total_pay);
    }
    
    // total_pay - money = result

    return answer;
}