import type { Ground } from "./types";
import type {Group} from "~/home/groupElement/types";
import GroupElement from "~/home/groupElement";

export default class GroundClass implements Ground.Element {
    public config: Group.Config
    public ground3d: Group.Instance

    constructor(config: Group.Config) {
        this.config = config;
        this.ground3d = new GroupElement(config).group3D

    }
}
