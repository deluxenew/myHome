import * as THREE from "three";
import type {Group} from "~/home/groupElement/types";


export default class GroupElement implements Group.Element {
    public group3D: Group.Instance;


    constructor(public config: Group.Config) {
        this.config = config;
        this.group3D = new THREE.Group()
        this.group3D.userData = this.config
    }
}
