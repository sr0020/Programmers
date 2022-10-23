function solution(s) {
    
    // sort() 함수는 자동으로 알파벳을 유니코드 순으로 정렬함.
    // sort를 reverse 뒤에 오게 할 경우, reverse 된 값이 다시 인덱스 1부터 정렬됨
    var answer = s.split('').sort().reverse().join("");
    
    return answer;
}