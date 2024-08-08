import {Fundament} from "~/home/fundament/types";
import {commonConfig} from "~/home/commonConfig";
import {Material} from "~/home/textureMaterial/types";
const {
    fullHomeWidth,
    fundamentHeight,
    erkerWidth,
    erkerDepth,
    homeDepth,
    } = commonConfig;

export const fundamentConfig: Fundament.Config  = {

    boxes: [
        {
            name: Fundament.NameVariants.HOME_FUNDAMENT,
            geometryParams: {
                width: fullHomeWidth,
                height: fundamentHeight,
                depth: homeDepth,
            },
            materialParams: {
                materialColor: Material.Colors.FUNDAMENT,
            },
            positionParams: {
                x: 0,
                y: fundamentHeight / 2 ,
                z: 0
            },
            rotationParams: {
                x: 0,
                y: 0,
                z: 0,
            }
        },
        {
            name: Fundament.NameVariants.ERKER_FUNDAMENT,
            geometryParams: {
                width: erkerWidth,
                height: fundamentHeight,
                depth: erkerDepth
            },
            materialParams: {
                materialColor: Material.Colors.FUNDAMENT,
            },
            positionParams: {
                x: 0,
                y: fundamentHeight / 2,
                z: homeDepth / 2 + erkerDepth / 2
            },
            rotationParams: {
                x: 0,
                y: 0,
                z: 0,
            }
        }
    ]
}
