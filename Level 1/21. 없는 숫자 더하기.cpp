#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(vector<int> numbers) {
    
    int answer = -1;
    int temp = 45;
    
    // 총합(45)에서 numbers에 존재하는 숫자 빼는 방식
    for(int i = 0; i < numbers.size(); i++) {
        temp -= numbers[i];
        cout << temp << endl;
    }

    answer = temp;
    return answer;
}