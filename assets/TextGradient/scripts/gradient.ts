import { _decorator, CCBoolean, Component, Enum, Label, Material, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NewComponent')
export class NewComponent extends Component {
    @property({
        type: Enum({ "10": 10, "20": 20, "30": 30, "40": 40, "50": 50, "60": 60, "70": 70, "80": 80, "90": 90, "100": 100 }),
        tooltip: "Choose percentage value"
    })
    colorRadio: number = 50;

    @property({
        type: Material,
        tooltip: "Choose shader material"
    })
    material;

    @property({
        type: CCBoolean,
    })
    useGradient: boolean = true;

    start() {
        let gradientMtl = this.node.getComponent(Label)?.customMaterial;
        if(!gradientMtl) return;
        if(this.useGradient){
            gradientMtl.setProperty('colorRadio', this.colorRadio  / 100);
        }else{
            this.node.getComponent(Label).customMaterial = null;
        }
    }

    update(deltaTime: number) {
        
    }
}


