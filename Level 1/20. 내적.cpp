#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(vector<int> a, vector<int> b) {
    int answer = 0;
    int temp = 0;
    
    for(int i = 0; i < a.size(); i++) {
        
        // a*b를 a.size번 더한 값을 answer에 대입
        temp = a[i] * b[i];
        answer += temp;
    }
    
    return answer;
}