#include <vector>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

int n, triangle[501][501];
int cache[501][501];

int path(int y, int x) {
    if(y == n - 1) return triangle[y][x];
    int& ret = cache[y][x];
    if(ret != -1) return ret;
    return ret = max(path(y+1, x), path(y+1, x+1)) + triangle[y][x];
}

int solution(vector<vector<int>> input) {
    int answer = 0;
    n = input.size();
    for(int i = 0; i < n; i++){
        copy(input[i].begin(), input[i].end(), triangle[i]);
    }
    memset(cache, -1, sizeof(cache));
    answer = path(0, 0);
    return answer;
}

int main() {
    vector<vector<int>> input = {{7}, {3, 8}, {8, 1, 0}, {2, 7, 4, 4}, {4, 5, 2, 6, 5}};
    cout << solution(input);
    return 0;
}