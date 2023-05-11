const expect = require("expect.js")
const JSDOM = require("mocha-jsdom")
// const clone = require('../dist/index').clone
const clone = require('../src/index').clone
const getUrlParam = require('../src/index').getUrlParam

describe("function clone", function () {
    describe("param data", function () {

        it('正确的测试用例', function () {
            // 基本数据类型
            expect(clone(1)).to.equal(1)

            // 数组
            const arr = [1, 2, [3, 4]]
            const cloneArr = clone(arr)
            expect(arr).to.equal(cloneArr)
            expect(cloneArr).to.eql(arr)

            // 对象
            const obj = {a: 1, b: {c: 2}}
            const cloneObj = clone(obj)
            expect(obj).to.equal(cloneObj)
            expect(cloneObj).to.eql(obj)
        })

        it("边界值测试用例", function () {
            expect().to.equal(undefined)
            expect(clone(undefined)).to.equal(undefined)
            expect(clone(null)).to.equal(null)
        })
    })

    describe("获取当前地址栏中的参数", function () {
        // jsdom模拟浏览器环境
        JSDOM({url: 'https://www.hddata.cn?token=123456'})
        it('token的值', function () {
            expect(getUrlParam('token')).to.be.equal("123456")
        });
    })
})

