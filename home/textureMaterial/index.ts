import * as THREE from "three";

import {Material} from "~/home/textureMaterial/types";

export default class TextureMaterial {

    constructor(public config: Material.Config) {
        this.config = config;
    }

    public getMeshStandardMaterial(): THREE.MeshStandardMaterial {
        return new THREE.MeshStandardMaterial({  })
    }
}
