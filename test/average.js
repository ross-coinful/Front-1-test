// test/average.js
var should = require('should');
import { average } from '../lib/average';

describe('#average', function(){
    it('should return the average of array', (done) => {
        var avg = average([1, 2, 3, 4]);
        avg.should.equal(2.5); // 測試算出來的平均是不是 2.5
        done();
    })
    it('should return NaN when array is empty', (done) => {
        var avg = average([]);
        isNaN(avg).should.be.true;
        done();
    })
})