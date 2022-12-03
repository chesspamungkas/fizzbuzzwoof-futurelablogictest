/*
Rules
1. Each number here is related to the word. 3 - Fizz, 5 - Buzz, and 7 - Woof.
2. Any number that CONTAINS the number OR is DIVISIBLE by that number is
replaced by an occurrence of the word.
a. If the number CONTAINS multiple instances of that number, then the word is
outputted multiple times.
b. In addition, if the number is also divisible by that number, then the word is
outputted an additional time.
3. If more than one word output occurs, it must be sorted in order: Fizz Buzz Woof (Fizz
must always be before Buzz and Buzz always before Woof). Eg. number 30 (contains 3,
divisible by 3 and divisible by 5) must output Fizz Fizz Buzz and not Fizz Buzz Fizz.
Your code output should loop numbers from 1 to 100, however the logic should also be
accurate if we were to loop the code beyond the number 100. You may write this in any
language, comments explaining your thought process in the code is also appreciated.

Example output of the first 15 numbers
1, 2, Fizz Fizz (3), 4, Buzz Buzz (5), Fizz (6), Woof Woof (7), 8, Fizz (9), Buzz (10), 11, Fizz
(12), Fizz (13), Woof (14), Fizz Buzz Buzz (15)
Example output of some other notable values
30 – Fizz Fizz Buzz (contains 3, divisible by 3 and divisible by 5)
33 – Fizz Fizz Fizz (contains 2x 3, divisible by 3)
35 – Fizz Buzz Buzz Woof (contains 3, contains 5, divisible by 5 and divisible by 7) 55
– Buzz Buzz Buzz (contains 2x 5, divisible by 5)
*/
const mocha = require('mocha');
const { describe,it } = mocha;
const chai = require('chai');
const { expect } = chai;
const fizzbuzzwoof = require('../fizzBuzzWoof').fizzBuzzWoof;
const fizzbuzzwoofnotable = require('../fizzBuzzWoof').fizzBuzzWoofNotable;

describe('Testing FizzBuzzWoof', () => {
    it('returns "1, 2, Fizz Fizz (3), 4, Buzz Buzz (5), Fizz (6), Woof Woof (7), 8, Fizz (9), Buzz (10), 11, Fizz (12), Fizz (13), Woof (14), Fizz Buzz Buzz (15)" when input num = 15"', function(done) {
        expect(fizzbuzzwoof(15)).to.equal('1, 2, Fizz Fizz (3), 4, Buzz Buzz (5), Fizz (6), Woof Woof (7), 8, Fizz (9), Buzz (10), 11, Fizz (12), Fizz (13), Woof (14), Fizz Buzz Buzz (15)');
        done();
    });

    it('returns "1, 2, Fizz Fizz (3), 4, Buzz Buzz (5), Fizz (6), Woof Woof (7), 8, Fizz (9), Buzz (10), 11, Fizz (12), Fizz (13), Woof (14), Fizz Buzz Buzz (15), 16, Woof (17), Fizz (18), 19, Buzz (20), Fizz Woof (21), 22, Fizz (23), Fizz (24), Buzz Buzz (25), 26, Fizz Woof (27), Woof (28), 29, Fizz Fizz Buzz (30), Fizz (31), Fizz (32), Fizz Fizz Fizz (33), Fizz (34), Fizz Buzz Buzz Woof (35), Fizz Fizz (36), Fizz Woof (37), Fizz (38), Fizz Fizz (39), Buzz (40), 41, Fizz Woof (42), Fizz (43), 44, Fizz Buzz Buzz (45), 46, Woof (47), Fizz (48), Woof (49), Buzz Buzz (50), Fizz Buzz (51), Buzz (52), Fizz Buzz (53), Fizz Buzz (54), Buzz Buzz Buzz (55), Buzz Woof (56), Fizz Buzz Woof (57), Buzz (58), Buzz (59), Fizz Buzz (60), 61, 62, Fizz Fizz Woof (63), 64, Buzz Buzz (65), Fizz (66), Woof (67), 68, Fizz (69), Buzz Woof Woof (70), Woof (71), Fizz Woof (72), Fizz Woof (73), Woof (74), Fizz Buzz Buzz Woof (75), Woof (76), Woof Woof Woof (77), Fizz Woof (78), Woof (79), Buzz (80), Fizz (81), 82, Fizz (83), Fizz Woof (84), Buzz Buzz (85), 86, Fizz Woof (87), 88, 89, Fizz Buzz (90), Woof (91), 92, Fizz Fizz (93), 94, Buzz Buzz (95), Fizz (96), Woof (97), Woof (98), Fizz (99), Buzz (100)" when input num = 100', function(done) {
        expect(fizzbuzzwoof(100)).to.equal('1, 2, Fizz Fizz (3), 4, Buzz Buzz (5), Fizz (6), Woof Woof (7), 8, Fizz (9), Buzz (10), 11, Fizz (12), Fizz (13), Woof (14), Fizz Buzz Buzz (15), 16, Woof (17), Fizz (18), 19, Buzz (20), Fizz Woof (21), 22, Fizz (23), Fizz (24), Buzz Buzz (25), 26, Fizz Woof (27), Woof (28), 29, Fizz Fizz Buzz (30), Fizz (31), Fizz (32), Fizz Fizz Fizz (33), Fizz (34), Fizz Buzz Buzz Woof (35), Fizz Fizz (36), Fizz Woof (37), Fizz (38), Fizz Fizz (39), Buzz (40), 41, Fizz Woof (42), Fizz (43), 44, Fizz Buzz Buzz (45), 46, Woof (47), Fizz (48), Woof (49), Buzz Buzz (50), Fizz Buzz (51), Buzz (52), Fizz Buzz (53), Fizz Buzz (54), Buzz Buzz Buzz (55), Buzz Woof (56), Fizz Buzz Woof (57), Buzz (58), Buzz (59), Fizz Buzz (60), 61, 62, Fizz Fizz Woof (63), 64, Buzz Buzz (65), Fizz (66), Woof (67), 68, Fizz (69), Buzz Woof Woof (70), Woof (71), Fizz Woof (72), Fizz Woof (73), Woof (74), Fizz Buzz Buzz Woof (75), Woof (76), Woof Woof Woof (77), Fizz Woof (78), Woof (79), Buzz (80), Fizz (81), 82, Fizz (83), Fizz Woof (84), Buzz Buzz (85), 86, Fizz Woof (87), 88, 89, Fizz Buzz (90), Woof (91), 92, Fizz Fizz (93), 94, Buzz Buzz (95), Fizz (96), Woof (97), Woof (98), Fizz (99), Buzz (100)');
        done();
    });

    it('returns "30 - Fizz Fizz Buzz" when input i = 30', function(done) {
        expect(fizzbuzzwoofnotable(30)).to.equal('30 - Fizz Fizz Buzz');
        done();
    });

    it('returns "33 - Fizz Fizz Fizz" when input i = 33', function(done) {
        expect(fizzbuzzwoofnotable(33)).to.equal('33 - Fizz Fizz Fizz');
        done();
    });

    it('returns "35 - Fizz Buzz Buzz Woof" when input i = 35', function(done) {
        expect(fizzbuzzwoofnotable(35)).to.equal('35 - Fizz Buzz Buzz Woof');
        done();
    });

    it('returns "55 - Buzz Buzz Buzz" when input i = 55', function(done) {
        expect(fizzbuzzwoofnotable(55)).to.equal('55 - Buzz Buzz Buzz');
        done();
    });
});