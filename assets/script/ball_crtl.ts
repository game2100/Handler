import JoyStick from "./joystick";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ball_ctrl extends cc.Component {

    @property(JoyStick)
    stick: JoyStick = null;

    @property
    speed: number = 200;

    @property(cc.Node)
    camera:cc.Node = null;

    // 摄像机的偏移
    private offset: cc.Vec2 = cc.v2(0,0);
    // 获取当前刚体
    private body:cc.RigidBody = null;

    onLoad () {
        this.body = this.getComponent(cc.RigidBody);
    }

    start () {
        // camera - tank的位置 ---> offset
        // camera 的位置 = tank位置 + offset偏移
        if(this.camera != null){
            this.offset = this.camera.getPosition().sub(this.node.getPosition());
        }
    }

    update (dt) {
        // 让摄像机跟随tank
        if(this.camera != null){
            this.camera.x = this.node.x + this.offset.x;
            this.camera.y = this.node.y + this.offset.y;
        }

        if(this.stick.dir.x === 0 && this.stick.dir.y === 0){
            this.body.linearVelocity = cc.v2(0,0);
            return;
        }
        
        var vx: number = this.speed * this.stick.dir.x;
        var vy: number = this.speed * this.stick.dir.y;

        this.body.linearVelocity = cc.v2(vx,vy);

        var r:number = Math.atan2(this.stick.dir.y,this.stick.dir.x);
        var degree: number = r * 180 / Math.PI;

        degree = 360 - degree;
        degree = degree + 90;
        this.node.rotation = degree;
    }
}
