
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