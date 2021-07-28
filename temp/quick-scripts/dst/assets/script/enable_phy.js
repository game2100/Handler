
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enable_phy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bef38dxZ/1JcbymOnlArgC7', 'enable_phy');
// script/enable_phy.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enable_phy = /** @class */ (function (_super) {
    __extends(Enable_phy, _super);
    function Enable_phy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gravity = cc.v2(0, -320); //引擎默认重力
        _this.is_debug = false; // 是否打开高度区域
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Enable_phy.prototype.onLoad = function () {
        var phy = cc.director.getPhysicsManager();
        // 开启物理引擎
        phy.enabled = true;
        // 配置物理引擎的重力
        phy.gravity = this.gravity;
        // 配置高度区域
        if (this.is_debug) {
            var Bits = cc.PhysicsManager.DrawBits;
            phy.debugDrawFlags = Bits.e_aabbBit |
                Bits.e_pairBit |
                Bits.e_centerOfMassBit |
                Bits.e_jointBit |
                Bits.e_shapeBit;
        }
        else {
            phy.debugDrawFlags = 0;
        }
    };
    Enable_phy.prototype.start = function () {
    };
    __decorate([
        property(cc.Vec2)
    ], Enable_phy.prototype, "gravity", void 0);
    __decorate([
        property
    ], Enable_phy.prototype, "is_debug", void 0);
    Enable_phy = __decorate([
        ccclass
    ], Enable_phy);
    return Enable_phy;
}(cc.Component));
exports.default = Enable_phy;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmFibGVfcGh5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBbUNDO1FBaENHLGFBQU8sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUczQyxjQUFRLEdBQVksS0FBSyxDQUFDLENBQUMsV0FBVzs7UUE0QnRDLGlCQUFpQjtJQUNyQixDQUFDO0lBM0JHLHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxHQUFHLEdBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3RCxTQUFTO1FBQ1QsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsWUFBWTtRQUNaLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUUzQixTQUFTO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFDM0MsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUztnQkFDWCxJQUFJLENBQUMsU0FBUztnQkFDZCxJQUFJLENBQUMsaUJBQWlCO2dCQUN0QixJQUFJLENBQUMsVUFBVTtnQkFDZixJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzNDO2FBQUk7WUFDRCxHQUFHLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNnQjtJQUdsQztRQURDLFFBQVE7Z0RBQ2lCO0lBTlQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW1DOUI7SUFBRCxpQkFBQztDQW5DRCxBQW1DQyxDQW5DdUMsRUFBRSxDQUFDLFNBQVMsR0FtQ25EO2tCQW5Db0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5hYmxlX3BoeSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXHJcbiAgICBncmF2aXR5OiBjYy5WZWMyID0gY2MudjIoMCwgLTMyMCk7IC8v5byV5pOO6buY6K6k6YeN5YqbXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc19kZWJ1ZzogYm9vbGVhbiA9IGZhbHNlOyAvLyDmmK/lkKbmiZPlvIDpq5jluqbljLrln59cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdmFyIHBoeTogY2MuUGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIC8vIOW8gOWQr+eJqeeQhuW8leaTjlxyXG4gICAgICAgIHBoeS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyDphY3nva7niannkIblvJXmk47nmoTph43liptcclxuICAgICAgICBwaHkuZ3Jhdml0eSA9IHRoaXMuZ3Jhdml0eTtcclxuXHJcbiAgICAgICAgLy8g6YWN572u6auY5bqm5Yy65Z+fXHJcbiAgICAgICAgaWYgKHRoaXMuaXNfZGVidWcpIHtcclxuICAgICAgICAgICAgdmFyIEJpdHM6IGFueSA9IGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzO1xyXG4gICAgICAgICAgICBwaHkuZGVidWdEcmF3RmxhZ3MgPSBCaXRzLmVfYWFiYkJpdCB8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaXRzLmVfcGFpckJpdCB8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaXRzLmVfY2VudGVyT2ZNYXNzQml0IHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQml0cy5lX2pvaW50Qml0IHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQml0cy5lX3NoYXBlQml0O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwaHkuZGVidWdEcmF3RmxhZ3MgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=