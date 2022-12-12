#include <string>
#include <vector>
#include <algorithm>

using namespace std;

// answers = 정답 들어있는 배열
vector<int> solution(vector<int> answers) {
    vector<int> answer;
    
    // cnt: 1, 2, 3번 수포자의 정답률을 구하기 위한 배열
    vector<int> cnt(3);
    
    // cnt 구한 후, 최댓값을 넣을 변수
    int max_value = 0;

    // score = 1, 2, 3번 수포자가 찍은 방식을 담은 배열
    int score_1[5] = {1, 2, 3, 4, 5};
    int score_2[8] = {2, 1, 2, 3, 2, 4, 2, 5};
    int score_3[10] = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};

    
    // 각 수포자별 정답률 구하기
    // score과 answer 배열을 대조 후 답 맞으면 cnt[i]++; 
    for(int i = 0; i < answers.size(); i++)
    {
        if(score_1[i % 5] == answers[i]) cnt[0]++; // 수포자 1
        if(score_2[i % 8] == answers[i]) cnt[1]++; // 수포자 2
        if(score_3[i % 10] == answers[i]) cnt[2]++; // 수포자 3
    }
    
    // cnt 중 가장 큰 인덱스 값(max_value) 구하기
    for(int i = 0; i < cnt.size(); i++)
    {
        max_value = *max_element(cnt.begin(), cnt.end());

        // max_value와 cnt[i]가 동일하면 answer 배열에 push
        if(cnt[i] == max_value) answer.push_back(i+1);
    }
    
    // answer 오름차순 정렬
    sort(answer.begin(), answer.end());
    
    return answer;
}