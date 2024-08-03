import * as THREE from "three";
import {Material} from "~/home/textureMaterial/types";

export namespace Box {
    export interface Config {
        name: string
        geometryParams: {
            width: number;
            height: number;
            depth: number;
        }
        materialParams: {
            materialColor: Material.Colors;
            materialType?: Material.Types
            texturePath?: Material.TexturePaths
            materialName?: Material.Names
        }
        positionParams: {
            x: number;
            y: number;
            z: number;
        }
        rotationParams: {
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
