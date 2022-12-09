#include <string>
#include <vector>

using namespace std;

// 최대공약수 구하기
int gcd(int a, int b)
{
    int temp = 0;
    
    while (b != 0)
    {
        temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

vector<int> solution(int n, int m) {
    vector<int> answer;
    
    // 최대공약수
    answer.push_back(gcd(n, m));
    
    // 최소공배수
    answer.push_back((n*m) / gcd(n, m)); 
    
    return answer;
}