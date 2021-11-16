"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var chai_1 = require("chai");
describe('Convert tens', function () {
    it('should convert 11 to tizenegy', function () {
        var result = (0, index_1.numberToWordHun)(11);
        (0, chai_1.expect)(result).equal('tizenegy');
    });
    it('should convert 22 to huszonkettő', function () {
        var result = (0, index_1.numberToWordHun)(22);
        (0, chai_1.expect)(result).equal('huszonkettő');
    });
    it('should convert 33 to harminchárom', function () {
        var result = (0, index_1.numberToWordHun)(33);
        (0, chai_1.expect)(result).equal('harminchárom');
    });
    it('should convert 44 to negyvennégy', function () {
        var result = (0, index_1.numberToWordHun)(44);
        (0, chai_1.expect)(result).equal('negyvennégy');
    });
    it('should convert 49 to negyvenkilenc', function () {
        var result = (0, index_1.numberToWordHun)(49);
        (0, chai_1.expect)(result).equal('negyvenkilenc');
    });
    it('should convert 55 to ötvenöt', function () {
        var result = (0, index_1.numberToWordHun)(55);
        (0, chai_1.expect)(result).equal('ötvenöt');
    });
    it('should convert 66 to hatvanhat', function () {
        var result = (0, index_1.numberToWordHun)(66);
        (0, chai_1.expect)(result).equal('hatvanhat');
    });
    it('should convert 77 to hetvenhét', function () {
        var result = (0, index_1.numberToWordHun)(77);
        (0, chai_1.expect)(result).equal('hetvenhét');
    });
    it('should convert 88 to nyolcvannyolc', function () {
        var result = (0, index_1.numberToWordHun)(88);
        (0, chai_1.expect)(result).equal('nyolcvannyolc');
    });
    it('should convert 99 to kilencvenkilenc', function () {
        var result = (0, index_1.numberToWordHun)(99);
        (0, chai_1.expect)(result).equal('kilencvenkilenc');
    });
    it('should convert 100 to száz', function () {
        var result = (0, index_1.numberToWordHun)(100);
        (0, chai_1.expect)(result).equal('száz');
    });
});
