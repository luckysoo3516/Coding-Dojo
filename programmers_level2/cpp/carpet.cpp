#include <iostream>
#include <cassert>
#include <vector>

using namespace std;

#define assert_equal(expected, actual) \
	_assert_equal(__LINE__, expected, actual)

void _assert_equal(int line, vector<int>& expected, vector<int>& actual)
{
    if (equal(expected.begin(), expected.end(), actual))
    {
        return;
    }
    cout << "NOT EQUAL(" << line << ")" << endl
         << "expected : " << expected[0] << "," << expected[1] << endl
         << "actual : " << actual[0] << "," << actual[1] << endl;
}

vector<int> solution(int brown, int red) {
    vector<int> answer;
    return answer;
}

int main()
{
    const vector<int> result;
    result.assign(4, 3);
    const &a = result;
    assert_equal(result, solution(10, 2));
    return 0;
}