
const {ccclass, property} = cc._decorator;

@ccclass
export default class JoyStick extends cc.Component {

    @property(cc.Node)
    stick: cc.Node = null;

    @property
    max_R: number = 100;

    @property
    min_R: number = 20;

    public dir:cc.Vec2 = cc.v2(0,0);

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.stick.setPosition(cc.v2(0,0));

        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.on_stick_move,this);
        this.node.on(cc.Node.EventType.TOUCH_END,function(){
            this.on_stick_end();
        },this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(){
            this.on_stick_end();
        },this);
    }

    // 触摸事件对象,e里面保存了触摸信息
    on_stick_move(e:cc.Touch): void {
        var screen_pos:cc.Vec2 = e.getLocation();
        // 转化坐标系,转化后是手柄内的坐标系
        var pos:cc.Vec2 = this.node.convertToNodeSpaceAR(screen_pos); 
        var len: number = pos.mag();
        if(len <= this.min_R){
            return;
        }

        // 单位化向量
        this.dir.x = pos.x / len;
        this.dir.y = pos.y / len;

        if(len > this.max_R){
            // 等比例缩放
            pos.x = pos.x * this.max_R / len;
            pos.y = pos.y * this.max_R / len;
        }
        this.stick.setPosition(pos);
    }

    on_stick_end():void {
        this.dir = cc.v2(0,0);
        this.stick.setPosition(cc.v2(0,0));
    }

    start () {

    }

    // update (dt) {}
}
