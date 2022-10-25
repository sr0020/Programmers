function solution(array, commands) {
    
    var answer = [];
    
    for(var i = 0; i < commands.length; i++) { // 총 길이
        
        // commands 요소의 0, 1번 index만큼 array 배열을 slice
        var temp = array.slice(commands[i][0]-1, commands[i][1]);
        
        // sliced된 배열 sort
        temp.sort((a, b) => a - b);
        
        // sort된 배열 중, commands[i][2]에 일치하는 요소 answer에 push
        answer.push(temp[commands[i][2] - 1]);
    }

    return answer;
}