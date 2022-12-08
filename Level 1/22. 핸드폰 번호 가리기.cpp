#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(string phone_number) {
    
    // phone_number를 거꾸로 정렬
    reverse(phone_number.begin(), phone_number.end());
    
    // 0~3번째 숫자 제외하고 * 대입 
    for(int i = 4; i < phone_number.size(); i++) {
        phone_number[i] = '*'; // string phone_number = 0; 이런식으로 재선언할 필요 없음
    }
    
    // 후 다시 거꾸로 정렬
    reverse(phone_number.begin(), phone_number.end());
    
    return phone_number;
}