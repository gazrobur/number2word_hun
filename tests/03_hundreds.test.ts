import { numberToWordHun } from '../src/index';
import { expect } from 'chai';

describe('Convert hundreds', function () {
    it('should convert 101 to százegy', () => {
        let result = numberToWordHun(101);
        expect(result).equal('százegy');
    });
    it('should convert 117 to száztizenhét', () => {
        let result = numberToWordHun(117);
        expect(result).equal('száztizenhét');
    });
    it('should convert 250 to kettőszázötven', () => {
        let result = numberToWordHun(250);
        expect(result).equal('kettőszázötven');
    });
    it('should convert 336 to háromszázharminchat', () => {
        let result = numberToWordHun(336);
        expect(result).equal('háromszázharminchat');
    });
    it('should convert 492 to négyszázkilencvenkettő', () => {
        let result = numberToWordHun(492);
        expect(result).equal('négyszázkilencvenkettő');
    });
    it('should convert 555 to ötszázötvenöt', () => {
        let result = numberToWordHun(555);
        expect(result).equal('ötszázötvenöt');
    });
    it('should convert 616 to hatszáztizenhat', () => {
        let result = numberToWordHun(616);
        expect(result).equal('hatszáztizenhat');
    });
    it('should convert 725 to hétszázhuszonöt', () => {
        let result = numberToWordHun(725);
        expect(result).equal('hétszázhuszonöt');
    });
    it('should convert 803 to nyolcszázhárom', () => {
        let result = numberToWordHun(803);
        expect(result).equal('nyolcszázhárom');
    });
    it('should convert 978 to kilencszázhetvennyolc', () => {
        let result = numberToWordHun(978);
        expect(result).equal('kilencszázhetvennyolc');
    });
    it('should convert 1000 to ezer', () => {
        let result = numberToWordHun(1000);
        expect(result).equal('ezer');
    });
});