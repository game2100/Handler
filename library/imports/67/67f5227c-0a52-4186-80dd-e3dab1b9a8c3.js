"use strict";
cc._RF.push(module, '67f52J8ClJBhoDd49qxuajD', 'joystick');
// script/joystick.ts

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
var JoyStick = /** @class */ (function (_super) {
    __extends(JoyStick, _super);
    function JoyStick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stick = null;
        _this.max_R = 100;
        _this.min_R = 20;
        _this.dir = cc.v2(0, 0);
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    JoyStick.prototype.onLoad = function () {
        this.stick.setPosition(cc.v2(0, 0));
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.on_stick_move, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.on_stick_end();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
            this.on_stick_end();
        }, this);
    };
    // 触摸事件对象,e里面保存了触摸信息
    JoyStick.prototype.on_stick_move = function (e) {
        var screen_pos = e.getLocation();
        // 转化坐标系,转化后是手柄内的坐标系
        var pos = this.node.convertToNodeSpaceAR(screen_pos);
        var len = pos.mag();
        if (len <= this.min_R) {
            return;
        }
        // 单位化向量
        this.dir.x = pos.x / len;
        this.dir.y = pos.y / len;
        if (len > this.max_R) {
            // 等比例缩放
            pos.x = pos.x * this.max_R / len;
            pos.y = pos.y * this.max_R / len;
        }
        this.stick.setPosition(pos);
    };
    JoyStick.prototype.on_stick_end = function () {
        this.dir = cc.v2(0, 0);
        this.stick.setPosition(cc.v2(0, 0));
    };
    JoyStick.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], JoyStick.prototype, "stick", void 0);
    __decorate([
        property
    ], JoyStick.prototype, "max_R", void 0);
    __decorate([
        property
    ], JoyStick.prototype, "min_R", void 0);
    JoyStick = __decorate([
        ccclass
    ], JoyStick);
    return JoyStick;
}(cc.Component));
exports.default = JoyStick;

cc._RF.pop();