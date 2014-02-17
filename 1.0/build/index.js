/*
combined files : 

gallery/kpmTest/1.0/index

*/
/**
 * @fileoverview 请修改组件描述
 * @author shepherdwind<hanwen.sah@taobao.com>
 * @module kpmTest
 **/
KISSY.add('gallery/kpmTest/1.0/index',function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 请修改组件描述
     * @class KpmTest
     * @constructor
     * @extends Base
     */
    function KpmTest(comConfig) {
        var self = this;
        //调用父类构造函数
        KpmTest.superclass.constructor.call(self, comConfig);
    }
    S.extend(KpmTest, Base, /** @lends KpmTest.prototype*/{

    }, {ATTRS : /** @lends KpmTest*/{

    }});
    return KpmTest;
}, {requires:['node', 'base']});




