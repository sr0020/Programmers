function solution(answer) {
       
    // 1. 숫자변수 answer를 string으로 형변환
    // 2. 배열로 변환
    // 3. 배열 역순 정렬
    var temp = String(answer).split('').reverse();
    
    // 4. 문자열 다시 숫자 배열로 변환
    var result = temp.map(x => parseInt(x));
    return result;
}