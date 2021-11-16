import { numberToWordHun } from '../src/index';
import { expect } from 'chai';

describe('Convert ones', function () {
    it('should convert 0 to nulla', () => {
        let result = numberToWordHun(0);
        expect(result).equal('nulla');
    });
    it('should convert 1 to egy', () => {
        let result = numberToWordHun(1);
        expect(result).equal('egy');
    });
    it('should convert 2 to kettő', () => {
        let result = numberToWordHun(2);
        expect(result).equal('kettő');
    });
    it('should convert 3 to három', () => {
        let result = numberToWordHun(3);
        expect(result).equal('három');
    });
    it('should convert 4 to négy', () => {
        let result = numberToWordHun(4);
        expect(result).equal('négy');
    });
    it('should convert 5 to öt', () => {
        let result = numberToWordHun(5);
        expect(result).equal('öt');
    });
    it('should convert 6 to hat', () => {
        let result = numberToWordHun(6);
        expect(result).equal('hat');
    });
    it('should convert 7 to hét', () => {
        let result = numberToWordHun(7);
        expect(result).equal('hét');
    });
    it('should convert 8 to nyolc', () => {
        let result = numberToWordHun(8);
        expect(result).equal('nyolc');
    });
    it('should convert 9 to kilenc', () => {
        let result = numberToWordHun(9);
        expect(result).equal('kilenc');
    });
    it('should convert 10 to tíz', () => {
        let result = numberToWordHun(10);
        expect(result).equal('tíz');
    });
});