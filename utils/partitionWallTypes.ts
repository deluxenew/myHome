import type {SubtractObjectsParams} from "~/utils/wallTypes";
import {WallConstructionVariants} from "~/utils/wallTypes";
import {WallDirectionVariants} from "~/utils/wallTypes";

export namespace PartitionWall {
    export enum Levels {
        BOTTOM = 'BOTTOM',
        TOP = 'TOP'
    }

    export enum CodeVariants {
        BOTTOM_CAPITAL_FULL = 'BOTTOM_CAPITAL_FULL',
        BOTTOM_CAPITAL_SHORT = 'BOTTOM_CAPITAL_SHORT',
        BOTTOM_LEFT = 'BOTTOM_LEFT',
        BOTTOM_RIGHT = 'BOTTOM_RIGHT',
        BOTTOM_RIGHT_SHORT_Z = 'BOTTOM_RIGHT_SHORT_Z',
        BOTTOM_RIGHT_SHORT_X = 'BOTTOM_RIGHT_SHORT_X',

        TOP_CAPITAL_FULL = 'TOP_CAPITAL_FULL',
        TOP_RIGHT_X = 'TOP_RIGHT_X',
        TOP_RIGHT_Z = 'TOP_RIGHT_Z'
    }

    export type WidthVariantsType = {
        [CodeVariants: string]: number
    }

    export type HeightVariantsType = {
        [Levels: string]: number
    }

    export type DepthVariantsType = {
        [WallAssignmentVariants: string]: number
    }

    export type RotationYVariantsType = {
        [WallDirectionVariants: string]: number
    }

    export type PositionVariantsType = {
        [CodeVariants: string]: {
            x: number,
            y: number,
            z: number,
        }
    }

    export interface ParamsRaw {
        code: CodeVariants
        assigment: WallConstructionVariants
        level: Levels
        direction: WallDirectionVariants
    }

    export interface Params extends ParamsRaw {
        width: number,
        height: number,
        depth: number,
        rotationY: number,
        position: {
            x: number,
            y: number,
            z: number
        },
        textureColor: string,
        subtractObjectsParams: SubtractObjectsParams[]
    }
}
