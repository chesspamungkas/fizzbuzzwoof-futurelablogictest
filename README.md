# Fizz Buzz Woof - FutureLab Logic Test

## Rules

1. Each number here is related to the word. 3 - Fizz, 5 - Buzz, and 7 - Woof.d
2. Any number that CONTAINS the number OR is DIVISIBLE by that number is replaced by an occurrence of the word.<br>
    a. If the number CONTAINS multiple instances of that number, then the word is outputted multiple times.  
    b. In addition, if the number is also divisible by that number, then the word is outputted an additional time.
3. If more than one word output occurs, it must be sorted in order: Fizz Buzz Woof (Fizz must always be before Buzz and Buzz always before Woof). Eg. number 30 (contains 3, divisible by 3 and divisible by 5) must output Fizz Fizz Buzz and not Fizz Buzz Fizz.

Your code output should loop numbers from 1 to 100, however the logic should also be accurate if we were to loop the code beyond the number 100. You may write this in any language, comments explaining your thought process in the code is also appreciated.

**Example output of the first 15 numbers**  
1, 2, Fizz Fizz (3), 4, Buzz Buzz (5), Fizz (6), Woof Woof (7), 8, Fizz (9), Buzz (10), 11, Fizz (12), Fizz (13), Woof (14), Fizz Buzz Buzz (15)

**Example output of some other notable values**  
30 – Fizz Fizz Buzz (contains 3, divisible by 3 and divisible by 5)  
33 – Fizz Fizz Fizz (contains 2x 3, divisible by 3)  
35 – Fizz Buzz Buzz Woof (contains 3, contains 5, divisible by 5 and divisible by 7)  
55 – Buzz Buzz Buzz (contains 2x 5, divisible by 5)  

**Installation**  
```
npm install  
npm test
```
