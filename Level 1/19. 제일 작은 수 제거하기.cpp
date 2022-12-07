#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> arr) {
    
    vector<int> answer;

    // * (!정렬하라는 조건 문제에 없음!) 정렬 없이 arr의 가장 작은 값 리턴
    
    // if, 사이즈가 1이거나, 빈 배열인 경우 -1 리턴
    if(arr.size() == 1) {
        answer.push_back(-1);
    }
    
    // else, 가장 작은 수 제거
    else{
        arr.erase(min_element(arr.begin(), arr.end()));
        answer = arr;
    }
    
    return answer;
}