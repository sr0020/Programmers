function solution(absolutes, signs) {
    var answer = 0;
    
    for(let i = 0; i < absolutes.length; i++) {
        if (signs[i] == true) {
            absolutes[i] = absolutes[i];
        }
        else if (signs[i] == false) {
            absolutes[i] = -absolutes[i];
        }
        
        answer += absolutes[i];
    }
    
    return answer;
}