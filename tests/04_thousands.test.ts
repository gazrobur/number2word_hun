import { numberToWordHun } from '../src/index';
import { expect } from 'chai';

describe('Convert hundreds', function () {
    it('should convert 1001 to ezeregy', () => {
        let result = numberToWordHun(1001);
        expect(result).equal('ezeregy');
    });
    it('should convert 1170 to ezerszázhetven', () => {
        let result = numberToWordHun(1170);
        expect(result).equal('ezerszázhetven');
    });
    it('should convert 2500 to kettőeze-rötszáz', () => {
        let result = numberToWordHun(2500);
        expect(result).equal('kettőezer-ötszáz');
    });
    it('should convert 3326 to háromezer-háromszázhuszonhat', () => {
        let result = numberToWordHun(3326);
        expect(result).equal('háromezer-háromszázhuszonhat');
    });
    it('should convert 4929 to négyezer-kilencszázhuszonkilenc', () => {
        let result = numberToWordHun(4929);
        expect(result).equal('négyezer-kilencszázhuszonkilenc');
    });
    it('should convert 5555 to ötezer-ötszázötvenöt', () => {
        let result = numberToWordHun(5555);
        expect(result).equal('ötezer-ötszázötvenöt');
    });
    it('should convert 6169 to hatezer-százhatvankilenc', () => {
        let result = numberToWordHun(6169);
        expect(result).equal('hatezer-százhatvankilenc');
    });
    it('should convert 7255 to hétezer-kettőszázötvenöt', () => {
        let result = numberToWordHun(7255);
        expect(result).equal('hétezer-kettőszázötvenöt');
    });
    it('should convert 8030 to nyolcezer-harminc', () => {
        let result = numberToWordHun(8030);
        expect(result).equal('nyolcezer-harminc');
    });
    it('should convert 9787 to kilencezer-hétszáznyolcvanhét', () => {
        let result = numberToWordHun(9787);
        expect(result).equal('kilencezer-hétszáznyolcvanhét');
    });
    it('should convert 10000 to tízezer', () => {
        let result = numberToWordHun(10000);
        expect(result).equal('tízezer');
    });
});