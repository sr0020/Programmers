function solution(arr1, arr2) {
    let answer = []; 
    let temp = [];
    
    // 행렬 각 원소의 덧셈
    // 2차원 for문
    for(let i = 0; i < arr1.length; i++) {
        answer[i] = []; // 이게 핵심. answer이 아니라 answer[i]에 push.
                        // answer에 push하게 되면 [4,6,7,9] 이렇게 1차원으로 출력됨
        
        for(let j = 0; j < arr1[i].length; j++) {
            temp = arr1[i][j] + arr2[i][j];
            answer[i].push(temp);
        }
    }
    
    return answer;
}