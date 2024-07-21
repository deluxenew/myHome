import {PartitionWall} from "~/utils/partitionWallTypes";
import configCommon from "~/utils/getConfigCommon";
import {WallDirectionVariants} from "~/utils/wallTypes";

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
            direction: WallDirectionVariants.WALLS_Z
        },
        {
            code: PartitionWall.CodeVariants.BOTTOM_CAPITAL_SHORT,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.BOTTOM,
            direction: WallDirectionVariants.WALLS_Z
        },
        {
            code: PartitionWall.CodeVariants.BOTTOM_LEFT,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.BOTTOM,
            direction: WallDirectionVariants.WALLS_X
        },
        {
            code: PartitionWall.CodeVariants.BOTTOM_RIGHT,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.BOTTOM,
            direction: WallDirectionVariants.WALLS_X
        },
        {
            code: PartitionWall.CodeVariants.BOTTOM_RIGHT_SHORT_Z,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.BOTTOM,
            direction: WallDirectionVariants.WALLS_Z
        },
        {
            code: PartitionWall.CodeVariants.BOTTOM_RIGHT_SHORT_X,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.BOTTOM,
            direction: WallDirectionVariants.WALLS_X
        },
        {
            code: PartitionWall.CodeVariants.TOP_CAPITAL_FULL,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.TOP,
            direction: WallDirectionVariants.WALLS_Z
        },
        {
            code: PartitionWall.CodeVariants.TOP_RIGHT_X,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.TOP,
            direction: WallDirectionVariants.WALLS_X
        },
        {
            code: PartitionWall.CodeVariants.TOP_RIGHT_Z,
            assigment: WallConstructionVariants.PARTITION_WALLS,
            level: PartitionWall.Levels.TOP,
            direction: WallDirectionVariants.WALLS_Z
        },
    ]

    function getWidth(code: PartitionWall.CodeVariants):number {
        return 0
    }

    function getHeight(level: PartitionWall.Levels): number {
        return  0
    }

    function getDepth(code: PartitionWall.CodeVariants): number {
        return 0
    }

    function getRotationY(direction: WallDirectionVariants): number {
        return 0
    }

    function getPosition(code: PartitionWall.CodeVariants) {
        return {
            x: 0,
            y: 0,
            z: 0
        }
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
                depth: getDepth(item.code),
                rotationY: getRotationY(item.direction),
                position: getPosition(item.code),
                subtractObjectsParams: getSubtractObjectsParams(item.code)
            }
        })
    }


    return setParams(paramsRaw)
}
