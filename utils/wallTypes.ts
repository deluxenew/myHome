import * as THREE from "three";

export enum WallSubtractVariants {
    WINDOW_HOME_LEFT = 'WINDOW_HOME_LEFT',
    WINDOW_HOME_FRONT_BOTTOM_LEFT = 'WINDOW_HOME_FRONT_BOTTOM_LEFT',
    WINDOW_HOME_FRONT_TOP_LEFT = 'WINDOW_HOME_FRONT_TOP_LEFT',
    WINDOW_HOME_FRONT_BOTTOM_RIGHT = 'WINDOW_HOME_FRONT_BOTTOM_RIGHT',
    WINDOW_HOME_FRONT_TOP_RIGHT = 'WINDOW_HOME_FRONT_TOP_RIGHT',
    WINDOW_HOME_BACK_BOTTOM_LEFT = 'WINDOW_HOME_BACK_BOTTOM_LEFT',
    WINDOW_HOME_BACK_TOP_LEFT = 'WINDOW_HOME_BACK_TOP_LEFT',
    WINDOW_HOME_BACK_BOTTOM_RIGHT = 'WINDOW_HOME_BACK_BOTTOM_RIGHT',
    WINDOW_HOME_BACK_TOP_RIGHT = 'WINDOW_HOME_BACK_TOP_RIGHT',
    WINDOW_ERKER_LEFT_BOTTOM = 'WINDOW_ERKER_LEFT_BOTTOM',
    WINDOW_ERKER_LEFT_TOP = 'WINDOW_ERKER_LEFT_TOP',
    WINDOW_ERKER_RIGHT_BOTTOM = 'WINDOW_ERKER_RIGHT_BOTTOM',
    WINDOW_ERKER_RIGHT_TOP = 'WINDOW_ERKER_RIGHT_TOP',
    WINDOW_ERKER_FRONT_BOTTOM = 'WINDOW_ERKER_FRONT_BOTTOM',
    WINDOW_ERKER_FRONT_TOP = 'WINDOW_ERKER_FRONT_TOP',
}

export enum WallSideVariants {
    HOME_RIGHT = 'HOME_RIGHT',
    HOME_LEFT = 'HOME_LEFT',
    HOME_BACK = 'HOME_BACK',
    HOME_FRONT_RIGHT = 'HOME_FRONT_RIGHT',
    HOME_FRONT_LEFT = 'HOME_FRONT_LEFT',
    ERKER_RIGHT = 'ERKER_RIGHT',
    ERKER_LEFT = 'ERKER_LEFT',
    ERKER_FRONT = 'ERKER_FRONT',
    DEFAULT = 'DEFAULT'

}

export type WidthVariantsType = {
    [WallAssignmentVariants: string]: {
        [WallSideVariants: string]: number
    }
}

export interface SubtractBoxConfig {
    code: WallSubtractVariants
    width: number
    height: number
    depth: number
    position: {
        x: number
        y: number
        z: number
    }
}

export type WallSubtractObjectsVariantsType = {
    [WallSideVariants: string]: {
        [WallAssignmentVariants: string]: SubtractBoxConfig[]
    }
}

export enum WallAssignmentVariants {
    FACADE = 'FACADE',
    SUPPORT = 'SUPPORT',
    DEFAULT = 'DEFAULT'
}

export type WallAssigmentType = {
    [WallAssignmentVariants: string]: number
}

export type WallTextureColorType = {
    [WallAssignmentVariants: string]: THREE.Color
}

export enum WallDirectionVariants {
    WALLS_X= 'WALLS_X',
    WALLS_Z= 'WALLS_Z',
}
export type WallDirectionType = {
    [WallDirectionVariants:string]: number
}

export enum WallConstructionVariants {
    WALLS = "WALLS",
    PARTITION_WALLS = 'PARTITION_WALLS'
}

export interface SubtractObjectsParams {
    code: WallSubtractVariants
    width: number
    height: number
    depth: number
    position: {
        x: number,
        y: number,
        z: number,
    }
    rotationY?: number
}

export type PositionVariantsType = {
    [WallAssignmentVariants: string]: {
        [WallSideVariants: string]: {
            x: number,
            y: number,
            z: number,
        }
    }
}

export interface WallParamsRaw {
    code: string
    assigment: WallAssignmentVariants
    construction: WallConstructionVariants
    side: WallSideVariants
    direction: WallDirectionVariants

}
export interface WallParams extends WallParamsRaw {
    width: number
    height: number
    depth: number
    textureColor: THREE.Color
    rotationY: number
    subtractObjectsParams: SubtractObjectsParams[]
    position: {
        x: number,
        y: number,
        z: number,
    }
}
