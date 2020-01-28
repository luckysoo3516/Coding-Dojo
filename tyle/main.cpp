/*
 타일 장식물 (https://programmers.co.kr/learn/courses/30/lessons/43104)
*/

#include <string>
#include <vector>

using namespace std;

long long solution(int N) {
    long long first = 0, second = 1, third = 1;

    while (--N) {
        third = first + second;

        first = second;
        second = third;
    }
    return (second * 2 + first) * 2;
}
