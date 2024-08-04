import type {Fundament } from "~/home/fundament/types";
import type {Box} from "~/home/boxElement/types";
import BoxElement from "~/home/boxElement";
import GroupElement from "~/home/groupElement";

export default class FundamentConstruction implements Fundament.Construction {
    public items: Box.Element[];
    public fundament3D: Fundament.Fundament3D


    constructor(public config: Fundament.Config) {
        this.config = config
        const {boxes} = this.config
        this.items = boxes.map((box) => {
            const boxElement = new BoxElement(box)
            return boxElement.getElement()
        });

        this.fundament3D = new GroupElement(this.config).group3D
        this.items.forEach((item) => this.fundament3D.add(item))
    }
}
