#include <string>
#include <vector>
#include <string>
#include <iostream>
#include <algorithm>

using namespace std;

long long solution(long long n) {
    long long answer = 0;
    string temp;
    string answer_temp;
    
    // string으로 형변환
    temp = to_string(n);
    
    // sort 함수 (내림차순으로 배치)
    sort(temp.begin(), temp.end(), greater<>());
    cout << temp;
    
    // 다시 long long으로 형변환
    answer = stoll(temp);
    
    return answer;
}