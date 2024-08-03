import * as THREE from "three";


export namespace Material {
    export enum Types {
        STANDARD = 'MeshStandardMaterial',

    }

    export enum Colors {
        FUNDAMENT = 0xffffff
    }

    export enum Names {
        FUNDAMENT_MATERIAL = 'FUNDAMENT_MATERIAL',
    }

    export enum TexturePaths {

    }

    export interface Config extends THREE.MaterialParameters {
        texturePath?: TexturePaths
        materialColor?: Colors
        materialType?: Types
    }
}
