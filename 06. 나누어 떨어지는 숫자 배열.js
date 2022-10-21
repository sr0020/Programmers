function solution(arr, divisor) {
    
    var result = new Array();
    
    // arr의 각 element 중 divisor로 나누어 떨어지는 값 찾기
    for(var i = 0; i < arr.length; i++) {
        
        // divisor로 나누어 떨어지는 값이 있을 경우, 해당 값을 result에 push
        if(arr[i] % divisor == 0) {
            result.push(arr[i]); 
        }
    }

    // 나누어 떨어지는 값이 없을 경우 -1 반환
    if(result.length == 0) {
        result.push(-1);
    }
    
    return result.sort((a, b) => a - b); // 오름차순 정렬(외우기)
}