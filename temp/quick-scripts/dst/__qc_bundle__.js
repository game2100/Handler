
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/ball_crtl');
require('./assets/script/enable_phy');
require('./assets/script/joystick');

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
//------QC-SOURCE-SPLIT------

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
        degree = degree - 90;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYWxsX2NydGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0RDO1FBakRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLFNBQVM7UUFDRCxZQUFNLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsU0FBUztRQUNELFVBQUksR0FBZ0IsSUFBSSxDQUFDOztJQXNDckMsQ0FBQztJQXBDRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLCtCQUErQjtRQUMvQixpQ0FBaUM7UUFDakMsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBQztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUN4RTtJQUNMLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLGFBQWE7UUFDYixJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsT0FBTztTQUNWO1FBRUQsSUFBSSxFQUFFLEdBQVcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxFQUFFLEdBQVcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxNQUFNLEdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXZDLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBaEREO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7NENBQ0k7SUFHdkI7UUFEQyxRQUFROzRDQUNXO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0k7SUFUTCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBb0Q3QjtJQUFELGdCQUFDO0NBcERELEFBb0RDLENBcERzQyxFQUFFLENBQUMsU0FBUyxHQW9EbEQ7a0JBcERvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpveVN0aWNrIGZyb20gXCIuL2pveXN0aWNrXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhbGxfY3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEpveVN0aWNrKVxyXG4gICAgc3RpY2s6IEpveVN0aWNrID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYW1lcmE6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8g5pGE5YOP5py655qE5YGP56e7XHJcbiAgICBwcml2YXRlIG9mZnNldDogY2MuVmVjMiA9IGNjLnYyKDAsMCk7XHJcbiAgICAvLyDojrflj5blvZPliY3liJrkvZNcclxuICAgIHByaXZhdGUgYm9keTpjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gY2FtZXJhIC0gdGFua+eahOS9jee9riAtLS0+IG9mZnNldFxyXG4gICAgICAgIC8vIGNhbWVyYSDnmoTkvY3nva4gPSB0YW5r5L2N572uICsgb2Zmc2V05YGP56e7XHJcbiAgICAgICAgaWYodGhpcy5jYW1lcmEgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5jYW1lcmEuZ2V0UG9zaXRpb24oKS5zdWIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy8g6K6p5pGE5YOP5py66Lef6ZqPdGFua1xyXG4gICAgICAgIGlmKHRoaXMuY2FtZXJhICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS54ID0gdGhpcy5ub2RlLnggKyB0aGlzLm9mZnNldC54O1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS55ID0gdGhpcy5ub2RlLnkgKyB0aGlzLm9mZnNldC55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGljay5kaXIueCA9PT0gMCAmJiB0aGlzLnN0aWNrLmRpci55ID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgdng6IG51bWJlciA9IHRoaXMuc3BlZWQgKiB0aGlzLnN0aWNrLmRpci54O1xyXG4gICAgICAgIHZhciB2eTogbnVtYmVyID0gdGhpcy5zcGVlZCAqIHRoaXMuc3RpY2suZGlyLnk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZ4LHZ5KTtcclxuXHJcbiAgICAgICAgdmFyIHI6bnVtYmVyID0gTWF0aC5hdGFuMih0aGlzLnN0aWNrLmRpci55LHRoaXMuc3RpY2suZGlyLngpO1xyXG4gICAgICAgIHZhciBkZWdyZWU6IG51bWJlciA9IHIgKiAxODAgLyBNYXRoLlBJO1xyXG5cclxuICAgICAgICBkZWdyZWUgPSAzNjAgLSBkZWdyZWU7XHJcbiAgICAgICAgZGVncmVlID0gZGVncmVlIC0gOTA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gZGVncmVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/joystick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxqb3lzdGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTREQztRQXpERyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBVyxHQUFHLENBQUM7UUFHcEIsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUVaLFNBQUcsR0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs7UUFnRGhDLGlCQUFpQjtJQUNyQixDQUFDO0lBL0NHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUM7WUFDckMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELG9CQUFvQjtJQUNwQixnQ0FBYSxHQUFiLFVBQWMsQ0FBVTtRQUNwQixJQUFJLFVBQVUsR0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsb0JBQW9CO1FBQ3BCLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0QsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDakIsT0FBTztTQUNWO1FBRUQsUUFBUTtRQUNSLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRXpCLElBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDaEIsUUFBUTtZQUNSLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7U0FDcEM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUd0QjtRQURDLFFBQVE7MkNBQ1c7SUFHcEI7UUFEQyxRQUFROzJDQUNVO0lBVEYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRENUI7SUFBRCxlQUFDO0NBNURELEFBNERDLENBNURxQyxFQUFFLENBQUMsU0FBUyxHQTREakQ7a0JBNURvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm95U3RpY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RpY2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4X1I6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1pbl9SOiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICBwdWJsaWMgZGlyOmNjLlZlYzIgPSBjYy52MigwLDApO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zdGljay5zZXRQb3NpdGlvbihjYy52MigwLDApKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsdGhpcy5vbl9zdGlja19tb3ZlLHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5vbl9zdGlja19lbmQoKTtcclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMub25fc3RpY2tfZW5kKCk7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6bmkbjkuovku7blr7nosaEsZemHjOmdouS/neWtmOS6huinpuaRuOS/oeaBr1xyXG4gICAgb25fc3RpY2tfbW92ZShlOmNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHNjcmVlbl9wb3M6Y2MuVmVjMiA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAvLyDovazljJblnZDmoIfns7ss6L2s5YyW5ZCO5piv5omL5p+E5YaF55qE5Z2Q5qCH57O7XHJcbiAgICAgICAgdmFyIHBvczpjYy5WZWMyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHNjcmVlbl9wb3MpOyBcclxuICAgICAgICB2YXIgbGVuOiBudW1iZXIgPSBwb3MubWFnKCk7XHJcbiAgICAgICAgaWYobGVuIDw9IHRoaXMubWluX1Ipe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDljZXkvY3ljJblkJHph49cclxuICAgICAgICB0aGlzLmRpci54ID0gcG9zLnggLyBsZW47XHJcbiAgICAgICAgdGhpcy5kaXIueSA9IHBvcy55IC8gbGVuO1xyXG5cclxuICAgICAgICBpZihsZW4gPiB0aGlzLm1heF9SKXtcclxuICAgICAgICAgICAgLy8g562J5q+U5L6L57yp5pS+XHJcbiAgICAgICAgICAgIHBvcy54ID0gcG9zLnggKiB0aGlzLm1heF9SIC8gbGVuO1xyXG4gICAgICAgICAgICBwb3MueSA9IHBvcy55ICogdGhpcy5tYXhfUiAvIGxlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGljay5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uX3N0aWNrX2VuZCgpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlyID0gY2MudjIoMCwwKTtcclxuICAgICAgICB0aGlzLnN0aWNrLnNldFBvc2l0aW9uKGNjLnYyKDAsMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
