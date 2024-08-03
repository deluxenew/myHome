import type {Fundament} from "~/home/fundament/types";
import type {Box} from "~/home/boxElement/types";
import BoxElement from "~/home/boxElement";
import {Group} from "~/home/groupElement/types";
import GroupElement from "~/home/groupElement";

export default class FundamentConstruction implements Fundament.Construction {
    public static readonly NAME = "FundamentGroup";
    public static readonly TYPE = "Fundament";
    public items: Box.Element[];
    public group3D: Group.Instance

    private getFundamentBoxes(): Box.Element[] {
        const {boxes} = this.config
        this.items = boxes.map((box) => {
            const boxElement = new BoxElement(box)
            return boxElement.getElement()
        });
        return this.items
    }

    private getGroup3D() {
        this.group3D = new GroupElement()
    }

    constructor(public config: Fundament.Config) {
        this.config = config

        this.getFundamentBoxes()
        this.getGroup3D()
    }
}
