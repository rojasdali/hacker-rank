#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


bool checkInt(int a)
{
    if(a>=1 && a<=10)
        return true;
    else return false;
    
}
bool checkLongLong(long long a)
{
    if (a>=0 && a<=pow(10,10))
        return true;
    else return false;
    
}

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    int N;
     long long sum;
    do
    {
        cin >> N;
    }while(!checkInt(N));
    
    int A[N];
    
    for (int i = 0; i < N; i++)
        {
           
            do
            {
            cin >> A[i];
                sum += A[i];
                
            }while(!checkLongLong(A[i]));
        }
        cout <<  sum;
    
    
        
    
    return 0;
}
