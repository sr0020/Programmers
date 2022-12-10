#include <string>
#include <vector>
#include <iostream>
#define MAX 100000

using namespace std;

int solution(int n) {
    int answer = 0; 
    int arr[MAX] = {};
    
    // dp 피보나치 수열. bottom-up
    for(int i = 0; i <= n; i++)
    {   
        // 시행순서가 0, 1번째인 경우 1 리턴
        if (i < 3)
        {
            arr[i] = 1;
            answer += arr[i];
        }
        
        // 2번째 이상인 경우 i-1 + i-2 리턴
        // ex) 2번째의 경우, arr[0] + arr[1]
        // 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴
        else{
            arr[i] = arr[i-1] + arr[i-2]; // arr[i] = (arr[i-1] + arr[i-2]) % 1234567; 이 방식도 정답처리 됨
            arr[i] = arr[i] % 1234567; 
            answer = arr[i]; 
        }
    }
    
    return answer;
}