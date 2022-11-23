function solution(n) {
    let x = 0;
    let temp = 0;
    
    // n % x == 1
    // x값을 0부터 돌리고, 나머지가 1인 경우에만 리턴 가능하게
    for(x = 0; x < n; x++) {
        
        if((n % x) == 1) {
            return x;
        }
    }
}