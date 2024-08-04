import type {Box} from "~/home/boxElement/types";
import type {Group } from "~/home/groupElement/types";


export namespace Fundament {
    export enum NameVariants {
        HOME_FUNDAMENT = "HOME_FUNDAMENT",
        ERKER_FUNDAMENT = "ERKER_FUNDAMENT",
    }

    export interface Config {

        boxes: Box.Config[]
    }


    export interface Fundament3D extends Group.Instance {

    }

    export interface Construction {
        items: Box.Element[]
        fundament3D: Group.Instance
        config: Config
    }
}

