import GroupElement from "~/home/groupElement";
import type {Fundament} from "~/home/fundament/types";
import type { Box } from "~/home/boxElement/types";
import BoxElement from "~/home/boxElement";

export default class FundamentGroup extends GroupElement {
    public static readonly NAME = "FundamentGroup";
    public static readonly TYPE = "Fundament";
    public items: Box.Element[];

    private getFundamentBoxes(boxes: Box.Config[]): Box.Element[] {
        return boxes.map((box) => {
            const boxElement = new BoxElement(box)

            return boxElement.getElement()
        });
    }

    constructor(config: Fundament.Config) {
        super(config)
        const { boxes} = config
        this.items = this.getFundamentBoxes(boxes)
    }
}
