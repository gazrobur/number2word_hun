import { numberToWordHun } from '../src/index';
import { expect } from 'chai';

describe('Convert tens', function () {
    it('should convert 11 to tizenegy', () => {
        let result = numberToWordHun(11);
        expect(result).equal('tizenegy');
    });
    it('should convert 22 to huszonkettő', () => {
        let result = numberToWordHun(22);
        expect(result).equal('huszonkettő');
    });
    it('should convert 33 to harminchárom', () => {
        let result = numberToWordHun(33);
        expect(result).equal('harminchárom');
    });
    it('should convert 44 to negyvennégy', () => {
        let result = numberToWordHun(44);
        expect(result).equal('negyvennégy');
    });
    it('should convert 49 to negyvenkilenc', () => {
        let result = numberToWordHun(49);
        expect(result).equal('negyvenkilenc');
    });
    it('should convert 55 to ötvenöt', () => {
        let result = numberToWordHun(55);
        expect(result).equal('ötvenöt');
    });
    it('should convert 66 to hatvanhat', () => {
        let result = numberToWordHun(66);
        expect(result).equal('hatvanhat');
    });
    it('should convert 77 to hetvenhét', () => {
        let result = numberToWordHun(77);
        expect(result).equal('hetvenhét');
    });
    it('should convert 88 to nyolcvannyolc', () => {
        let result = numberToWordHun(88);
        expect(result).equal('nyolcvannyolc');
    });
    it('should convert 99 to kilencvenkilenc', () => {
        let result = numberToWordHun(99);
        expect(result).equal('kilencvenkilenc');
    });
    it('should convert 100 to száz', () => {
        let result = numberToWordHun(100);
        expect(result).equal('száz');
    });
});