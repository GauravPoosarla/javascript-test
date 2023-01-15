// import { isPrime } from './task';
// import { isArmstrong } from './task';

const {isPrime} = require('./task.js');
const {isArmstrong} = require('./task.js');

describe('checking if a number is prime or not', () => {
    test('[7] should result in "true"', () => {
        expect(isPrime(7)).toBe(true);
    });
    test('[13] should result in "true"', () => {
        expect(isPrime(13)).toBe(true);
    });
    test('[9] should result in "false"', () => {
        expect(isPrime(9)).toBe(false);
    });
    test('[10] should result in "false"', () => {
        expect(isPrime(10)).toBe(false);
    });
});

describe('checking if a number is armstrong or not', () => {
    test('[153] should result in "true"', () => {
        expect(isArmstrong('153')).toBe(true);
    });
    test('[371] should result in "true"', () => {
        expect(isArmstrong('371')).toBe(true);
    });
    test('[550] should result in "false"', () => {
        expect(isArmstrong('550')).toBe(false);
    });
    test('[102] should result in "false"', () => {
        expect(isArmstrong('102')).toBe(false);
    });
});