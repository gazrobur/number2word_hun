"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var chai_1 = require("chai");
describe('Convert negative numbers', function () {
    it('should convert -1 to mínusz egy', function () {
        var result = (0, index_1.numberToWordHun)(-1);
        (0, chai_1.expect)(result).equal('mínusz egy');
    });
    it('should convert -13 to mínusz tizenhárom', function () {
        var result = (0, index_1.numberToWordHun)(-13);
        (0, chai_1.expect)(result).equal('mínusz tizenhárom');
    });
    it('should convert -135 to mínusz százharmincöt', function () {
        var result = (0, index_1.numberToWordHun)(-135);
        (0, chai_1.expect)(result).equal('mínusz százharmincöt');
    });
    it('should convert -287 to mínusz kettőszáznyolcvanhét', function () {
        var result = (0, index_1.numberToWordHun)(-287);
        (0, chai_1.expect)(result).equal('mínusz kettőszáznyolcvanhét');
    });
    it('should convert -1577 to mínusz ezerötszázhetvenhét', function () {
        var result = (0, index_1.numberToWordHun)(-1577);
        (0, chai_1.expect)(result).equal('mínusz ezerötszázhetvenhét');
    });
    it('should convert -6598 to mínusz hatezer-ötszázkilencvennyolc', function () {
        var result = (0, index_1.numberToWordHun)(-6598);
        (0, chai_1.expect)(result).equal('mínusz hatezer-ötszázkilencvennyolc');
    });
    it('should convert -9336 to mínusz kilencezer-háromszázharminchat', function () {
        var result = (0, index_1.numberToWordHun)(-9336);
        (0, chai_1.expect)(result).equal('mínusz kilencezer-háromszázharminchat');
    });
    it('should convert -14237 to mínusz tizennégyezer-kettőszázharminchét', function () {
        var result = (0, index_1.numberToWordHun)(-14237);
        (0, chai_1.expect)(result).equal('mínusz tizennégyezer-kettőszázharminchét');
    });
    it('should convert -153180 to mínusz százötvenháromezer-száznyolcvan', function () {
        var result = (0, index_1.numberToWordHun)(-153180);
        (0, chai_1.expect)(result).equal('mínusz százötvenháromezer-száznyolcvan');
    });
    it('should convert -2987609 to mínusz kettőmillió-kilencszáznyolcvanhétezer-hatszázkilenc', function () {
        var result = (0, index_1.numberToWordHun)(-2987609);
        (0, chai_1.expect)(result).equal('mínusz kettőmillió-kilencszáznyolcvanhétezer-hatszázkilenc');
    });
    it('should convert -322987609 to mínusz háromszázhuszonkettőmillió-kilencszáznyolcvanhétezer-hatszázkilenc', function () {
        var result = (0, index_1.numberToWordHun)(-322987609);
        (0, chai_1.expect)(result).equal('mínusz háromszázhuszonkettőmillió-kilencszáznyolcvanhétezer-hatszázkilenc');
    });
});
