
const { ccclass, property } = cc._decorator;

@ccclass
export default class Enable_phy extends cc.Component {

    @property(cc.Vec2)
    gravity: cc.Vec2 = cc.v2(0, -320); //引擎默认重力

    @property
    is_debug: boolean = false; // 是否打开高度区域

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var phy: cc.PhysicsManager = cc.director.getPhysicsManager();
        // 开启物理引擎
        phy.enabled = true;
        // 配置物理引擎的重力
        phy.gravity = this.gravity;

        // 配置高度区域
        if (this.is_debug) {
            var Bits: any = cc.PhysicsManager.DrawBits;
            phy.debugDrawFlags = Bits.e_aabbBit | 
                                    Bits.e_pairBit | 
                                    Bits.e_centerOfMassBit |
                                    Bits.e_jointBit |
                                    Bits.e_shapeBit;
        }else{
            phy.debugDrawFlags = 0;
        }
    }

    start() {

    }

    // update (dt) {}
}
