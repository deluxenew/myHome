import * as THREE from "three";
import {Material} from "~/home/textureMaterial/types";

export namespace Box {
    export interface Config {
        width: number;
        height: number;
        depth: number;
        materialColor: Material.Colors;
        materialType: Material.Types
        texturePath: Material.TexturePaths
        materialName: Material.Names
        position: {
            x: number;
            y: number;
            z: number;
        }
        rotation: {
            x: number;
            y: number;
            z: number;
        }
    }

    export interface UserData {

    }

    export interface Element extends THREE.Mesh {
        geometry: THREE.BoxGeometry;
        userData: UserData
    }
}
