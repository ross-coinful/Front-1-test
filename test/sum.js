// test/sum.js
var should = require('should');
import { sum } from '../lib/sum';

describe('#sum', function(){
    it('should return the sum of an array', (done) => {
        var total = sum([1, 2, 3, 4]);
        total.should.equal(10);    // 測試有沒有取得正確的最小值
        done();
    })

    it('should return undefined when array is empty', (done) => {
        var total = sum([]);
        (total === undefined).should.be.true; // 測試有沒有傳回 undefined
        done();
    })
})