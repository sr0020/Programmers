function solution(sizes) {
    let answer = 0;
    let width = [];
    let height = [];
    let max_w = 0;
    let max_h = 0;
    
    // 1. [i][0], [i][1] 중 큰 값을 w에 push
    //    [i][0], [i][1] 중 작은 값을 h에 push (최소직사각형 성립을 위해)
    for(let i = 0; i < sizes.length; i++) {
        width.push(Math.max(sizes[i][0], sizes[i][1]));
        height.push(Math.min(sizes[i][0], sizes[i][1]));
    }
    
    // 2. width, height 중 가장 큰 값 각각 max_w, max_h에 넣기
    max_w = Math.max(...width);
    max_h = Math.max(...height);
    answer = max_w * max_h;
    console.log(max_w, max_h, answer);
    
    return answer;
}