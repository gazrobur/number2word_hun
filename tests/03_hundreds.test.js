"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var chai_1 = require("chai");
describe('Convert hundreds', function () {
    it('should convert 101 to százegy', function () {
        var result = (0, index_1.numberToWordHun)(101);
        (0, chai_1.expect)(result).equal('százegy');
    });
    it('should convert 117 to száztizenhét', function () {
        var result = (0, index_1.numberToWordHun)(117);
        (0, chai_1.expect)(result).equal('száztizenhét');
    });
    it('should convert 250 to kettőszázötven', function () {
        var result = (0, index_1.numberToWordHun)(250);
        (0, chai_1.expect)(result).equal('kettőszázötven');
    });
    it('should convert 336 to háromszázharminchat', function () {
        var result = (0, index_1.numberToWordHun)(336);
        (0, chai_1.expect)(result).equal('háromszázharminchat');
    });
    it('should convert 492 to négyszázkilencvenkettő', function () {
        var result = (0, index_1.numberToWordHun)(492);
        (0, chai_1.expect)(result).equal('négyszázkilencvenkettő');
    });
    it('should convert 555 to ötszázötvenöt', function () {
        var result = (0, index_1.numberToWordHun)(555);
        (0, chai_1.expect)(result).equal('ötszázötvenöt');
    });
    it('should convert 616 to hatszáztizenhat', function () {
        var result = (0, index_1.numberToWordHun)(616);
        (0, chai_1.expect)(result).equal('hatszáztizenhat');
    });
    it('should convert 725 to hétszázhuszonöt', function () {
        var result = (0, index_1.numberToWordHun)(725);
        (0, chai_1.expect)(result).equal('hétszázhuszonöt');
    });
    it('should convert 803 to nyolcszázhárom', function () {
        var result = (0, index_1.numberToWordHun)(803);
        (0, chai_1.expect)(result).equal('nyolcszázhárom');
    });
    it('should convert 978 to kilencszázhetvennyolc', function () {
        var result = (0, index_1.numberToWordHun)(978);
        (0, chai_1.expect)(result).equal('kilencszázhetvennyolc');
    });
    it('should convert 1000 to ezer', function () {
        var result = (0, index_1.numberToWordHun)(1000);
        (0, chai_1.expect)(result).equal('ezer');
    });
});
