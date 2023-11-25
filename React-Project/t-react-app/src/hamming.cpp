#include <stdio.h>
int main()
{
    int data[10];
    int rec[10];
    printf("Enter 4 bits one by one:-\n");
    scanf("%d", &data[3]);
    scanf("%d", &data[5]);
    scanf("%d", &data[6]);
    scanf("%d", &data[7]);
    data[1] = data[3] ^ data[5] ^ data[7];
    data[2] = data[3] ^ data[6] ^ data[7];
    data[4] = data[5] ^ data[6] ^ data[7];
    printf("\nEncoded data is\n");
    for (int i = 1; i <= 7; i++)
        printf("%d", data[i]);
    printf("\n\nEnter received data bits one by one\n");
    for (int i = 1; i <= 7; i++)
        scanf("%d", &rec[i]);
    printf("\nSent Data:-\n");
    for (int i = 1; i <= 7; i++)
        printf("%d", data[i]);
    printf("\nReceived Data:-\n");
    for (int i = 1; i <= 7; i++)
        printf("%d", rec[i]);
    int c, c1, c2, c3;
    c1 = rec[1] ^ rec[3] ^ rec[5] ^ rec[7];
    c2 = rec[2] ^ rec[3] ^ rec[6] ^ rec[7];
    c3 = rec[4] ^ rec[5] ^ rec[6] ^ rec[7];
    c = 4 * c3 + 2 * c2 + c1;
    if (c == 0)
    {
        printf("\nNo error while transmission of data\n");
    }
    else
    {
        if (rec[c] == 0)
            rec[c] = 1;
        else
            rec[c] = 0;
        printf("\nCorrected Data:-\n");
        for (int i = 1; i <= 7; i++)
            printf("%d", rec[i]);
    }
    return 0;
}