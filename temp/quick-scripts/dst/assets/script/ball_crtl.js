
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ball_crtl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYWxsX2NydGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0RDO1FBakRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLFNBQVM7UUFDRCxZQUFNLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsU0FBUztRQUNELFVBQUksR0FBZ0IsSUFBSSxDQUFDOztJQXNDckMsQ0FBQztJQXBDRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLCtCQUErQjtRQUMvQixpQ0FBaUM7UUFDakMsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBQztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUN4RTtJQUNMLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLGFBQWE7UUFDYixJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsT0FBTztTQUNWO1FBRUQsSUFBSSxFQUFFLEdBQVcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxFQUFFLEdBQVcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxNQUFNLEdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXZDLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBaEREO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7NENBQ0k7SUFHdkI7UUFEQyxRQUFROzRDQUNXO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0k7SUFUTCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBb0Q3QjtJQUFELGdCQUFDO0NBcERELEFBb0RDLENBcERzQyxFQUFFLENBQUMsU0FBUyxHQW9EbEQ7a0JBcERvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpveVN0aWNrIGZyb20gXCIuL2pveXN0aWNrXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhbGxfY3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEpveVN0aWNrKVxyXG4gICAgc3RpY2s6IEpveVN0aWNrID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYW1lcmE6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8g5pGE5YOP5py655qE5YGP56e7XHJcbiAgICBwcml2YXRlIG9mZnNldDogY2MuVmVjMiA9IGNjLnYyKDAsMCk7XHJcbiAgICAvLyDojrflj5blvZPliY3liJrkvZNcclxuICAgIHByaXZhdGUgYm9keTpjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gY2FtZXJhIC0gdGFua+eahOS9jee9riAtLS0+IG9mZnNldFxyXG4gICAgICAgIC8vIGNhbWVyYSDnmoTkvY3nva4gPSB0YW5r5L2N572uICsgb2Zmc2V05YGP56e7XHJcbiAgICAgICAgaWYodGhpcy5jYW1lcmEgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5jYW1lcmEuZ2V0UG9zaXRpb24oKS5zdWIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy8g6K6p5pGE5YOP5py66Lef6ZqPdGFua1xyXG4gICAgICAgIGlmKHRoaXMuY2FtZXJhICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS54ID0gdGhpcy5ub2RlLnggKyB0aGlzLm9mZnNldC54O1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS55ID0gdGhpcy5ub2RlLnkgKyB0aGlzLm9mZnNldC55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGljay5kaXIueCA9PT0gMCAmJiB0aGlzLnN0aWNrLmRpci55ID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgdng6IG51bWJlciA9IHRoaXMuc3BlZWQgKiB0aGlzLnN0aWNrLmRpci54O1xyXG4gICAgICAgIHZhciB2eTogbnVtYmVyID0gdGhpcy5zcGVlZCAqIHRoaXMuc3RpY2suZGlyLnk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZ4LHZ5KTtcclxuXHJcbiAgICAgICAgdmFyIHI6bnVtYmVyID0gTWF0aC5hdGFuMih0aGlzLnN0aWNrLmRpci55LHRoaXMuc3RpY2suZGlyLngpO1xyXG4gICAgICAgIHZhciBkZWdyZWU6IG51bWJlciA9IHIgKiAxODAgLyBNYXRoLlBJO1xyXG5cclxuICAgICAgICBkZWdyZWUgPSAzNjAgLSBkZWdyZWU7XHJcbiAgICAgICAgZGVncmVlID0gZGVncmVlICsgOTA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gZGVncmVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==