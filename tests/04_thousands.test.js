"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var chai_1 = require("chai");
describe('Convert hundreds', function () {
    it('should convert 1001 to ezeregy', function () {
        var result = (0, index_1.numberToWordHun)(1001);
        (0, chai_1.expect)(result).equal('ezeregy');
    });
    it('should convert 1170 to ezerszázhetven', function () {
        var result = (0, index_1.numberToWordHun)(1170);
        (0, chai_1.expect)(result).equal('ezerszázhetven');
    });
    it('should convert 2500 to kettőeze-rötszáz', function () {
        var result = (0, index_1.numberToWordHun)(2500);
        (0, chai_1.expect)(result).equal('kettőezer-ötszáz');
    });
    it('should convert 3326 to háromezer-háromszázhuszonhat', function () {
        var result = (0, index_1.numberToWordHun)(3326);
        (0, chai_1.expect)(result).equal('háromezer-háromszázhuszonhat');
    });
    it('should convert 4929 to négyezer-kilencszázhuszonkilenc', function () {
        var result = (0, index_1.numberToWordHun)(4929);
        (0, chai_1.expect)(result).equal('négyezer-kilencszázhuszonkilenc');
    });
    it('should convert 5555 to ötezer-ötszázötvenöt', function () {
        var result = (0, index_1.numberToWordHun)(5555);
        (0, chai_1.expect)(result).equal('ötezer-ötszázötvenöt');
    });
    it('should convert 6169 to hatezer-százhatvankilenc', function () {
        var result = (0, index_1.numberToWordHun)(6169);
        (0, chai_1.expect)(result).equal('hatezer-százhatvankilenc');
    });
    it('should convert 7255 to hétezer-kettőszázötvenöt', function () {
        var result = (0, index_1.numberToWordHun)(7255);
        (0, chai_1.expect)(result).equal('hétezer-kettőszázötvenöt');
    });
    it('should convert 8030 to nyolcezer-harminc', function () {
        var result = (0, index_1.numberToWordHun)(8030);
        (0, chai_1.expect)(result).equal('nyolcezer-harminc');
    });
    it('should convert 9787 to kilencezer-hétszáznyolcvanhét', function () {
        var result = (0, index_1.numberToWordHun)(9787);
        (0, chai_1.expect)(result).equal('kilencezer-hétszáznyolcvanhét');
    });
    it('should convert 10000 to tízezer', function () {
        var result = (0, index_1.numberToWordHun)(10000);
        (0, chai_1.expect)(result).equal('tízezer');
    });
});
