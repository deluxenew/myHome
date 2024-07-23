import {PartitionWall} from "~/utils/partitionWallTypes";
import configCommon from "~/utils/getConfigCommon";
import {WallDirectionVariants} from "~/utils/wallTypes";
import {WallAssignmentVariants} from "~/utils/wallTypes";
import * as THREE from "three";

export default function (): PartitionWall.Params[] {
    const {
        fullDepth,
        fullWidth,
        height,
        erkerWidth,
        erkerDepth,
        depth,
        sideWidthLeft,
        sideWidthRight,
        wallHeight,
        overlapHeight,
        facadeWallDepth,
        defaultWallDepth,
        constructionWallDepth,
        windowDeltaOffsetX,
        windowDeltaOffsetZ
    } = configCommon()

    const paramsRaw: PartitionWall.ParamsRaw[] = [
        {
            code: PartitionWall.CodeVariants.BOTTOM_CAPITAL_FULL,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.BOTTOM,
            direction: WallDirectionVariants.WALLS_X
        },
        {
            code: PartitionWall.CodeVariants.BOTTOM_CAPITAL_SHORT,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.BOTTOM,
            direction: WallDirectionVariants.WALLS_X
        },
        {
            code: PartitionWall.CodeVariants.BOTTOM_LEFT,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.BOTTOM,
            direction: WallDirectionVariants.WALLS_Z
        },
        {
            code: PartitionWall.CodeVariants.BOTTOM_RIGHT,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.BOTTOM,
            direction: WallDirectionVariants.WALLS_Z
        },
        {
            code: PartitionWall.CodeVariants.BOTTOM_RIGHT_SHORT_Z,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.BOTTOM,
            direction: WallDirectionVariants.WALLS_X
        },
        {
            code: PartitionWall.CodeVariants.BOTTOM_RIGHT_SHORT_X,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.BOTTOM,
            direction: WallDirectionVariants.WALLS_Z
        },
        {
            code: PartitionWall.CodeVariants.TOP_CAPITAL_FULL,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.TOP,
            direction: WallDirectionVariants.WALLS_X
        },
        {
            code: PartitionWall.CodeVariants.TOP_RIGHT_X,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.TOP,
            direction: WallDirectionVariants.WALLS_Z
        },
        {
            code: PartitionWall.CodeVariants.TOP_RIGHT_Z,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.TOP,
            direction: WallDirectionVariants.WALLS_X
        },
    ]

    function getCapitalWidth() {
        return fullWidth - facadeWallDepth * 2 - 40 - constructionWallDepth * 2
    }

    function getWidth(code: PartitionWall.CodeVariants): number {
        const widthVariants: PartitionWall.WidthVariantsType = {
            [PartitionWall.CodeVariants.BOTTOM_CAPITAL_FULL]: getCapitalWidth(),
            [PartitionWall.CodeVariants.TOP_CAPITAL_FULL]: getCapitalWidth(),
            [PartitionWall.CodeVariants.BOTTOM_CAPITAL_SHORT]: sideWidthLeft - (facadeWallDepth + 20 + constructionWallDepth) /2,
            [PartitionWall.CodeVariants.BOTTOM_LEFT]: depth - facadeWallDepth * 2 - 40 - constructionWallDepth * 3 - 1900 - 3600,
            [PartitionWall.CodeVariants.BOTTOM_RIGHT]: depth - facadeWallDepth * 2 - 40 - constructionWallDepth * 3 - 3600,
            [PartitionWall.CodeVariants.BOTTOM_RIGHT_SHORT_Z]: 1500,
            [PartitionWall.CodeVariants.BOTTOM_RIGHT_SHORT_X]: 1500,
            [PartitionWall.CodeVariants.TOP_RIGHT_X]: depth - facadeWallDepth * 2 - 40 - constructionWallDepth * 3 - 3600,
            [PartitionWall.CodeVariants.TOP_RIGHT_Z]: sideWidthRight - (facadeWallDepth + 20 + constructionWallDepth) /2,
        }

        return widthVariants[code]
    }

    function getHeight(level: PartitionWall.Levels): number {
        const heightVariants: PartitionWall.HeightVariantsType = {
            [PartitionWall.Levels.BOTTOM]: 3200,
            [PartitionWall.Levels.TOP]: 3200,
        }
        return heightVariants[level]
    }

    function getDepth(code: PartitionWall.CodeVariants): number {
        const depthVariants: PartitionWall.DepthVariantsType = {
            [WallAssignmentVariants.DEFAULT]: defaultWallDepth,
            [WallAssignmentVariants.SUPPORT]: constructionWallDepth,
        }
        return depthVariants[code]
    }

    function getRotationY(direction: WallDirectionVariants): number {
        const rotationYVariants: PartitionWall.RotationYVariantsType = {
            [WallDirectionVariants.WALLS_X]: THREE.MathUtils.degToRad(90),
            [WallDirectionVariants.WALLS_Z]: THREE.MathUtils.degToRad(0)
        }
        return rotationYVariants[direction]
    }

    function getPosition(code: PartitionWall.CodeVariants) {
        const positionVariants: PartitionWall.PositionVariantsType = {
            [PartitionWall.CodeVariants.BOTTOM_CAPITAL_FULL]: {
                x: facadeWallDepth + 20 + constructionWallDepth + 3600 + constructionWallDepth ,
                y: height + 3200 / 2,
                z: fullWidth / 2,
            },
            [PartitionWall.CodeVariants.TOP_CAPITAL_FULL]: {
                x: facadeWallDepth + 20 + constructionWallDepth + 3600 + constructionWallDepth,
                y: height + 3200 / 2 + 3200 + overlapHeight,
                z: fullWidth / 2,
            },
            [PartitionWall.CodeVariants.BOTTOM_CAPITAL_SHORT]: {
                x: facadeWallDepth + 20 + constructionWallDepth  * 2.5 + 3600 + 1900,
                y: height + 3200 / 2 ,
                z: fullWidth - sideWidthLeft / 2 - (facadeWallDepth + 20 + constructionWallDepth) /2,
            },
            [PartitionWall.CodeVariants.BOTTOM_LEFT]: {
                x: (depth - (facadeWallDepth * 2 + 20 + constructionWallDepth * 3 + 3600 + 1900)) / 2 + facadeWallDepth + 20 + constructionWallDepth * 2 + 3600 + 1900,
                y:  height +3200 / 2  ,
                z: fullWidth - sideWidthLeft - defaultWallDepth /2,
            },
            [PartitionWall.CodeVariants.BOTTOM_RIGHT]: {
                x: (depth - (facadeWallDepth * 2 + 40 + constructionWallDepth * 3 + 3600)) / 2 + facadeWallDepth + 20 + constructionWallDepth * 2 + 3600,
                y: height + 3200 / 2 ,
                z: sideWidthRight - defaultWallDepth /2,
            },
            [PartitionWall.CodeVariants.BOTTOM_RIGHT_SHORT_Z]: {
                x: facadeWallDepth+ 20 + constructionWallDepth * 2 + 3600 + 1500 ,
                y: height + 3200 / 2 ,
                z: sideWidthRight - 750 -defaultWallDepth /2,
            },
            [PartitionWall.CodeVariants.BOTTOM_RIGHT_SHORT_X]: {
                x: facadeWallDepth+ 20 + constructionWallDepth * 2 + 3600 + 1500 /2,
                y: height + 3200 / 2 ,
                z: sideWidthRight - 1500 - defaultWallDepth / 2 ,
            },
            [PartitionWall.CodeVariants.TOP_RIGHT_X]: {
                x: (depth - (facadeWallDepth * 2 + 20 + constructionWallDepth * 3 + 3600)) / 2 + facadeWallDepth + 20 + constructionWallDepth * 2 + 3600,
                y: height + 3200 / 2 + 3200 + overlapHeight,
                z: sideWidthRight - defaultWallDepth /2 +  + facadeWallDepth + 20 + constructionWallDepth ,
            },
            [PartitionWall.CodeVariants.TOP_RIGHT_Z]: {
                x: (depth - (facadeWallDepth * 2 + 20 + constructionWallDepth * 3 + 3600)) / 2  + facadeWallDepth  + 20 + constructionWallDepth * 2 + 3600 + defaultWallDepth /2,
                y: height + 3200 / 2 + 3200 + overlapHeight,
                z: facadeWallDepth + 20 + defaultWallDepth + (sideWidthRight ) /2,
            },
        }
        return positionVariants[code]
    }

    function getSubtractObjectsParams(code: PartitionWall.CodeVariants): SubtractObjectsParams[] {
        return []
    }

    function setParams(items: PartitionWall.ParamsRaw[]): PartitionWall.Params[] {
        return items.map((item) => {
            return {
                ...item,
                width: getWidth(item.code),
                height: getHeight(item.level),
                depth: getDepth(item.assigment),
                rotationY: getRotationY(item.direction),
                position: getPosition(item.code),
                subtractObjectsParams: getSubtractObjectsParams(item.code)
            }
        })
    }


    return setParams(paramsRaw)
}
