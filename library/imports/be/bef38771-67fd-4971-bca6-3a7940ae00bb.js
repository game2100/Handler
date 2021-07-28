"use strict";
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