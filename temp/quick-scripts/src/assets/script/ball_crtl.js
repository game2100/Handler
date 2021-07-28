"use strict";
cc._RF.push(module, '4cc24mLAJxJwLETNjgPPuPW', 'ball_crtl');
// script/ball_crtl.ts

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
var joystick_1 = require("./joystick");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ball_ctrl = /** @class */ (function (_super) {
    __extends(ball_ctrl, _super);
    function ball_ctrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stick = null;
        _this.speed = 200;
        _this.camera = null;
        // 摄像机的偏移
        _this.offset = cc.v2(0, 0);
        // 获取当前刚体
        _this.body = null;
        return _this;
    }
    ball_ctrl.prototype.onLoad = function () {
        this.body = this.getComponent(cc.RigidBody);
    };
    ball_ctrl.prototype.start = function () {
        // camera - tank的位置 ---> offset
        // camera 的位置 = tank位置 + offset偏移
        if (this.camera != null) {
            this.offset = this.camera.getPosition().sub(this.node.getPosition());
        }
    };
    ball_ctrl.prototype.update = function (dt) {
        // 让摄像机跟随tank
        if (this.camera != null) {
            this.camera.x = this.node.x + this.offset.x;
            this.camera.y = this.node.y + this.offset.y;
        }
        if (this.stick.dir.x === 0 && this.stick.dir.y === 0) {
            this.body.linearVelocity = cc.v2(0, 0);
            return;
        }
        var vx = this.speed * this.stick.dir.x;
        var vy = this.speed * this.stick.dir.y;
        this.body.linearVelocity = cc.v2(vx, vy);
        var r = Math.atan2(this.stick.dir.y, this.stick.dir.x);
        var degree = r * 180 / Math.PI;
        degree = 360 - degree;
        degree = degree + 90;
        this.node.rotation = degree;
    };
    __decorate([
        property(joystick_1.default)
    ], ball_ctrl.prototype, "stick", void 0);
    __decorate([
        property
    ], ball_ctrl.prototype, "speed", void 0);
    __decorate([
        property(cc.Node)
    ], ball_ctrl.prototype, "camera", void 0);
    ball_ctrl = __decorate([
        ccclass
    ], ball_ctrl);
    return ball_ctrl;
}(cc.Component));
exports.default = ball_ctrl;

cc._RF.pop();