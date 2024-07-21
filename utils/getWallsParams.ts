import * as THREE from "three";
import configCommon from "~/utils/getConfigCommon";
import getCongigWindows from "~/utils/getConfigWindows";
import type {WallAssigmentType, WallSubtractObjectsVariantsType, WidthVariantsType} from "~/utils/wallTypes";
import type {WallTextureColorType, WallDirectionType, PositionVariantsType} from "~/utils/wallTypes";
import {
    WallAssignmentVariants, WallSideVariants,  WallConstructionVariants, WallDirectionVariants
} from "~/utils/wallTypes";
import type {SubtractObjectsParams, WallParams, WallParamsRaw} from "~/utils/wallTypes";

export default function (): WallParams[] {
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

    const {
        leftHomeWindowParams,
        frontHomeWindowBottomLeft,
        frontHomeWindowTopLeft,
        frontHomeWindowBottomRight,
        frontHomeWindowTopRight,
        backHomeWindowBottomLeft,
        backHomeWindowTopLeft,
        backHomeWindowBottomRight,
        backHomeWindowTopRight,
        leftErkerWindowBottom,
        leftErkerWindowTop,
        rightErkerWindowTop,
        rightErkerWindowBottom,
        frontErkerWindowBottom,
        frontErkerWindowTop,

    } = getCongigWindows()


    const wallsParams: WallParamsRaw[] = [
        {
            code: 'HOME_RIGHT_FACADE',
            assigment: WallAssignmentVariants.FACADE,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.HOME_RIGHT,
            direction: WallDirectionVariants.WALLS_Z,
        }, {
            code: 'HOME_LEFT_FACADE',
            assigment: WallAssignmentVariants.FACADE,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.HOME_LEFT,
            direction: WallDirectionVariants.WALLS_Z,

        }, {
            code: 'HOME_BACK_FACADE',
            assigment: WallAssignmentVariants.FACADE,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.HOME_BACK,
            direction: WallDirectionVariants.WALLS_X,
        }, {
            code: 'HOME_FRONT_RIGHT_FACADE',
            assigment: WallAssignmentVariants.FACADE,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.HOME_FRONT_RIGHT,
            direction: WallDirectionVariants.WALLS_X,
        }, {
            code: 'HOME_FRONT_LEFT_FACADE',
            assigment: WallAssignmentVariants.FACADE,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.HOME_FRONT_LEFT,
            direction: WallDirectionVariants.WALLS_X,
        }, {
            code: 'ERKER_RIGHT_FACADE',
            assigment: WallAssignmentVariants.FACADE,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.ERKER_RIGHT,
            direction: WallDirectionVariants.WALLS_Z,
        }, {
            code: 'ERKER_LEFT_FACADE',
            assigment: WallAssignmentVariants.FACADE,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.ERKER_LEFT,
            direction: WallDirectionVariants.WALLS_Z,
        }, {
            code: 'ERKER_FRONT_FACADE',
            assigment: WallAssignmentVariants.FACADE,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.ERKER_FRONT,
            direction: WallDirectionVariants.WALLS_X,
        },
        {
            code: 'HOME_RIGHT_SUPPORT',
            assigment: WallAssignmentVariants.SUPPORT,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.HOME_RIGHT,
            direction: WallDirectionVariants.WALLS_Z,
        }, {
            code: 'HOME_LEFT_SUPPORT',
            assigment: WallAssignmentVariants.SUPPORT,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.HOME_LEFT,
            direction: WallDirectionVariants.WALLS_Z,
        }, {
            code: 'HOME_BACK_SUPPORT',
            assigment: WallAssignmentVariants.SUPPORT,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.HOME_BACK,
            direction: WallDirectionVariants.WALLS_X,
        }, {
            code: 'HOME_FRONT_RIGHT_SUPPORT',
            assigment: WallAssignmentVariants.SUPPORT,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.HOME_FRONT_RIGHT,
            direction: WallDirectionVariants.WALLS_X,
        }, {
            code: 'HOME_FRONT_LEFT_SUPPORT',
            assigment: WallAssignmentVariants.SUPPORT,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.HOME_FRONT_LEFT,
            direction: WallDirectionVariants.WALLS_X,
        }, {
            code: 'ERKER_RIGHT_SUPPORT',
            assigment: WallAssignmentVariants.SUPPORT,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.ERKER_RIGHT,
            direction: WallDirectionVariants.WALLS_Z,
        }, {
            code: 'ERKER_LEFT_SUPPORT',
            assigment: WallAssignmentVariants.SUPPORT,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.ERKER_LEFT,
            direction: WallDirectionVariants.WALLS_Z,
        }, {
            code: 'ERKER_FRONT_SUPPORT',
            assigment: WallAssignmentVariants.SUPPORT,
            construction: WallConstructionVariants.WALLS,
            side: WallSideVariants.ERKER_FRONT,
            direction: WallDirectionVariants.WALLS_X,
        },
    ]

    function getWidthParam(side: WallSideVariants, assigment: WallAssignmentVariants) {
        function getSupportDepth(depth: number) {
            return depth - facadeWallDepth * 2 - 40
        }

        function getSupportWidth(width: number) {
            return width - constructionWallDepth * 2 - 40
        }

        const widthVariants: WidthVariantsType = {
            [WallAssignmentVariants.FACADE]: {
                [WallSideVariants.HOME_LEFT]: depth,
                [WallSideVariants.HOME_RIGHT]: depth,
                [WallSideVariants.HOME_BACK]: fullWidth - facadeWallDepth * 2,
                [WallSideVariants.HOME_FRONT_LEFT]: sideWidthLeft,
                [WallSideVariants.HOME_FRONT_RIGHT]: sideWidthRight,
                [WallSideVariants.ERKER_LEFT]: erkerDepth + facadeWallDepth,
                [WallSideVariants.ERKER_RIGHT]: erkerDepth + facadeWallDepth,
                [WallSideVariants.ERKER_FRONT]: erkerWidth - facadeWallDepth * 2,
            },

            [WallAssignmentVariants.SUPPORT]: {
                [WallSideVariants.HOME_LEFT]: getSupportDepth(depth),
                [WallSideVariants.HOME_RIGHT]: getSupportDepth(depth),
                [WallSideVariants.HOME_BACK]: getSupportWidth(fullWidth - facadeWallDepth * 2),
                [WallSideVariants.HOME_FRONT_LEFT]: sideWidthLeft - constructionWallDepth + 20 + facadeWallDepth,
                [WallSideVariants.HOME_FRONT_RIGHT]: sideWidthLeft - constructionWallDepth + 20 + facadeWallDepth,
                [WallSideVariants.ERKER_LEFT]: erkerDepth + constructionWallDepth,
                [WallSideVariants.ERKER_RIGHT]: erkerDepth + constructionWallDepth,
                [WallSideVariants.ERKER_FRONT]: getSupportWidth(erkerWidth - facadeWallDepth * 2),
            },

            [WallAssignmentVariants.DEFAULT]: {
                [WallSideVariants.DEFAULT]: 0
            }

        }

        if (assigment in widthVariants && side in widthVariants[assigment]) {
            return widthVariants[assigment][side]
        }

        return widthVariants[WallAssignmentVariants.DEFAULT][WallSideVariants.DEFAULT]
    }

    function getPositionParam(side: WallSideVariants, assigment: WallAssignmentVariants) {
        function getDeltaPosition(coordinate: number, multiplier: number) {
            return coordinate + (multiplier * (facadeWallDepth / 2  + constructionWallDepth / 2 + 20))
        }

        const widthVariants: PositionVariantsType = {
            [WallAssignmentVariants.FACADE]: {
                [WallSideVariants.HOME_LEFT]: {
                    x: depth / 2,
                    y: height + wallHeight / 2,
                    z: fullWidth - facadeWallDepth / 2
                },
                [WallSideVariants.HOME_RIGHT]: {
                    x: depth / 2,
                    y: height + wallHeight / 2,
                    z: facadeWallDepth / 2
                },
                [WallSideVariants.HOME_BACK]: {
                    x: facadeWallDepth / 2,
                    y: height + wallHeight / 2,
                    z: fullWidth / 2
                },
                [WallSideVariants.HOME_FRONT_LEFT]: {
                    x: depth - facadeWallDepth / 2,
                    y: height + wallHeight / 2,
                    z: fullWidth - sideWidthRight / 2 - facadeWallDepth
                },
                [WallSideVariants.HOME_FRONT_RIGHT]: {
                    x: depth - facadeWallDepth / 2,
                    y: height + wallHeight / 2,
                    z: sideWidthLeft / 2 + facadeWallDepth
                },
                [WallSideVariants.ERKER_LEFT]: {
                    x: depth + erkerDepth / 2,
                    y: height + wallHeight / 2,
                    z: fullWidth - sideWidthLeft - facadeWallDepth / 2
                },
                [WallSideVariants.ERKER_RIGHT]: {
                    x: depth + erkerDepth / 2,
                    y: height + wallHeight / 2,
                    z: sideWidthLeft + facadeWallDepth / 2
                },
                [WallSideVariants.ERKER_FRONT]: {
                    x: fullDepth - facadeWallDepth / 2,
                    y: height + wallHeight / 2,
                    z: fullWidth / 2
                },
            },

            [WallAssignmentVariants.SUPPORT]: {
                [WallSideVariants.HOME_LEFT]: {
                    x: depth / 2,
                    y: height + wallHeight / 2,
                    z: getDeltaPosition(fullWidth - facadeWallDepth / 2, -1)
                },
                [WallSideVariants.HOME_RIGHT]: {
                    x: depth / 2,
                    y: height + wallHeight / 2,
                    z: getDeltaPosition(facadeWallDepth / 2, 1)
                },
                [WallSideVariants.HOME_BACK]: {
                    x: getDeltaPosition(facadeWallDepth / 2, 1),
                    y: height + wallHeight / 2,
                    z: fullWidth / 2
                },
                [WallSideVariants.HOME_FRONT_LEFT]: {
                    x: getDeltaPosition(depth - facadeWallDepth / 2, -1),
                    y: height + wallHeight / 2,
                    z: fullWidth - sideWidthRight / 2 - facadeWallDepth - windowDeltaOffsetZ
                },
                [WallSideVariants.HOME_FRONT_RIGHT]: {
                    x: getDeltaPosition(depth - facadeWallDepth / 2, -1),
                    y: height + wallHeight / 2,
                    z: sideWidthLeft / 2 + facadeWallDepth + windowDeltaOffsetZ
                },
                [WallSideVariants.ERKER_LEFT]: {
                    x: depth + erkerDepth / 2 - windowDeltaOffsetX + facadeWallDepth / 2 + 20,
                    y: height + wallHeight / 2,
                    z: getDeltaPosition(fullWidth - sideWidthLeft - facadeWallDepth / 2, -1)
                },
                [WallSideVariants.ERKER_RIGHT]: {
                    x: depth + erkerDepth / 2 - windowDeltaOffsetX + facadeWallDepth / 2 + 20,
                    y: height + wallHeight / 2,
                    z: getDeltaPosition(sideWidthLeft + facadeWallDepth / 2, 1)
                },
                [WallSideVariants.ERKER_FRONT]: {
                    x: getDeltaPosition(fullDepth - facadeWallDepth / 2, -1),
                    y: height + wallHeight / 2,
                    z: fullWidth / 2
                },
            },

            [WallAssignmentVariants.DEFAULT]: {
                [WallSideVariants.DEFAULT]: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }
        }

        if (assigment in widthVariants && side in widthVariants[assigment]) {
            return widthVariants[assigment][side]
        }

        return widthVariants[WallAssignmentVariants.DEFAULT][WallSideVariants.DEFAULT]
    }

    function getSubtractObjectsParam(side: WallSideVariants, assigment: WallAssignmentVariants) {
        function mapX(params: SubtractObjectsParams, delta: number) {
            return {
                ...params,
                position: {
                    ...params.position,
                    x: params.position.x + delta
                }

            }
        }
        const sideVariants: WallSubtractObjectsVariantsType = {
            [WallAssignmentVariants.FACADE]: {
                [WallSideVariants.DEFAULT]: [],
                [WallSideVariants.ERKER_FRONT]: [frontErkerWindowBottom, frontErkerWindowTop],
                [WallSideVariants.ERKER_LEFT]: [leftErkerWindowBottom, leftErkerWindowTop],
                [WallSideVariants.ERKER_RIGHT]: [rightErkerWindowTop, rightErkerWindowBottom],
                [WallSideVariants.HOME_BACK]: [backHomeWindowBottomLeft, backHomeWindowTopLeft, backHomeWindowBottomRight, backHomeWindowTopRight],
                [WallSideVariants.HOME_LEFT]: [leftHomeWindowParams],
                [WallSideVariants.HOME_RIGHT]: [],
                [WallSideVariants.HOME_FRONT_LEFT]: [frontHomeWindowBottomLeft, frontHomeWindowTopLeft],
                [WallSideVariants.HOME_FRONT_RIGHT]: [frontHomeWindowBottomRight, frontHomeWindowTopRight],
            },
            [WallAssignmentVariants.SUPPORT]: {
                [WallSideVariants.DEFAULT]: [],
                [WallSideVariants.ERKER_FRONT]: [frontErkerWindowBottom, frontErkerWindowTop],
                [WallSideVariants.ERKER_LEFT]: [mapX(leftErkerWindowBottom, windowDeltaOffsetX), mapX(leftErkerWindowTop, windowDeltaOffsetX)],
                [WallSideVariants.ERKER_RIGHT]: [mapX(rightErkerWindowTop, windowDeltaOffsetX), mapX(rightErkerWindowBottom, windowDeltaOffsetX)],
                [WallSideVariants.HOME_BACK]: [backHomeWindowBottomLeft, backHomeWindowTopLeft, backHomeWindowBottomRight, backHomeWindowTopRight],
                [WallSideVariants.HOME_LEFT]: [leftHomeWindowParams],
                [WallSideVariants.HOME_RIGHT]: [],
                [WallSideVariants.HOME_FRONT_LEFT]: [mapX(frontHomeWindowBottomLeft, -windowDeltaOffsetZ), mapX(frontHomeWindowTopLeft, -windowDeltaOffsetZ)],
                [WallSideVariants.HOME_FRONT_RIGHT]: [mapX(frontHomeWindowBottomRight, windowDeltaOffsetZ), mapX(frontHomeWindowTopRight, windowDeltaOffsetZ)],
            },

        }
        if (assigment in sideVariants && side in sideVariants[assigment]) {
            return sideVariants[assigment][side]
        }

        return sideVariants[assigment][WallSideVariants.DEFAULT]
    }

    function getDepthParam(assigment: WallAssignmentVariants) {
        const assigmentVariants: WallAssigmentType = {
            [WallAssignmentVariants.FACADE]: facadeWallDepth,
            [WallAssignmentVariants.SUPPORT]: constructionWallDepth,
            [WallAssignmentVariants.DEFAULT]: constructionWallDepth,
        }

        if (assigment in assigmentVariants) {
            return assigmentVariants[assigment]
        }

        return assigmentVariants[WallAssignmentVariants.DEFAULT]

    }

    function getRotationY(direction: WallDirectionVariants) {
        const directionsVariants: WallDirectionType = {
            [WallDirectionVariants.WALLS_X]: THREE.MathUtils.degToRad(90),
            [WallDirectionVariants.WALLS_Z]: THREE.MathUtils.degToRad(0)
        }

        if (direction in directionsVariants) {
            return directionsVariants[direction]
        }

        return 0
    }

    function getTextureColorParam(assigment: WallAssignmentVariants) {
        const textureColorVariants: WallTextureColorType = {
            [WallAssignmentVariants.FACADE]: new THREE.Color('#493e3c'),
            [WallAssignmentVariants.SUPPORT]: new THREE.Color('#aa3507'),
            [WallAssignmentVariants.DEFAULT]: new THREE.Color('#ffffff'),
        }

        if (assigment in textureColorVariants) {
            return textureColorVariants[assigment]
        }

        return textureColorVariants[WallAssignmentVariants.DEFAULT]
    }

    function setParams(collection: WallParamsRaw[]): WallParams[] {
        return collection.map((item: WallParamsRaw) => {
            return {
                ...item,
                width: getWidthParam(item.side, item.assigment),
                height: wallHeight,
                depth: getDepthParam(item.assigment),
                rotationY: getRotationY(item.direction),
                textureColor: getTextureColorParam(item.assigment),
                subtractObjectsParams: getSubtractObjectsParam(item.side, item.assigment),
                position: getPositionParam(item.side, item.assigment)
            }

        })
    }


    return setParams(wallsParams)
}
