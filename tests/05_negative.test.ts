import { numberToWordHun } from '../src/index';
import { expect } from 'chai';

describe('Convert negative numbers', function () {
    it('should convert -1 to mínusz egy', () => {
        let result = numberToWordHun(-1);
        expect(result).equal('mínusz egy');
    });
    it('should convert -13 to mínusz tizenhárom', () => {
        let result = numberToWordHun(-13);
        expect(result).equal('mínusz tizenhárom');
    });
    it('should convert -135 to mínusz százharmincöt', () => {
        let result = numberToWordHun(-135);
        expect(result).equal('mínusz százharmincöt');
    });
    it('should convert -287 to mínusz kettőszáznyolcvanhét', () => {
        let result = numberToWordHun(-287);
        expect(result).equal('mínusz kettőszáznyolcvanhét');
    });
    it('should convert -1577 to mínusz ezerötszázhetvenhét', () => {
        let result = numberToWordHun(-1577);
        expect(result).equal('mínusz ezerötszázhetvenhét');
    });
    it('should convert -6598 to mínusz hatezer-ötszázkilencvennyolc', () => {
        let result = numberToWordHun(-6598);
        expect(result).equal('mínusz hatezer-ötszázkilencvennyolc');
    });
    it('should convert -9336 to mínusz kilencezer-háromszázharminchat', () => {
        let result = numberToWordHun(-9336);
        expect(result).equal('mínusz kilencezer-háromszázharminchat');
    });
    it('should convert -14237 to mínusz tizennégyezer-kettőszázharminchét', () => {
        let result = numberToWordHun(-14237);
        expect(result).equal('mínusz tizennégyezer-kettőszázharminchét');
    });
    it('should convert -153180 to mínusz százötvenháromezer-száznyolcvan', () => {
        let result = numberToWordHun(-153180);
        expect(result).equal('mínusz százötvenháromezer-száznyolcvan');
    });
    it('should convert -2987609 to mínusz kettőmillió-kilencszáznyolcvanhétezer-hatszázkilenc', () => {
        let result = numberToWordHun(-2987609);
        expect(result).equal('mínusz kettőmillió-kilencszáznyolcvanhétezer-hatszázkilenc');
    });
    it('should convert -322987609 to mínusz háromszázhuszonkettőmillió-kilencszáznyolcvanhétezer-hatszázkilenc', () => {
        let result = numberToWordHun(-322987609);
        expect(result).equal('mínusz háromszázhuszonkettőmillió-kilencszáznyolcvanhétezer-hatszázkilenc');
    });
});