import type {Group} from "~/home/groupElement/types";

export namespace Ground {

    export interface Element {
        ground3d: Group.Instance
        config: Group.Config
    }
}
