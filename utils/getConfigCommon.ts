export default function () {
    const fullHomeDepth = 12000
    const fullHomeWidth = 9200
    const fundamentHeight = 300

    const overlapHeight = 180

    const erkerWidth = 3200
    const erkerDepth = 2100

    const homeDepth = fullHomeDepth - erkerDepth
    const fullWidth = fullHomeWidth

    const sideWidthLeft = (fullWidth - erkerWidth) / 2
    const sideWidthRight = sideWidthLeft

    const wallHeight = 6400 + overlapHeight


    const defaultWallDepth = 150
    const facadeWallDepth = 100
    const constructionWallDepth = 380

    const windowDeltaOffsetX =  constructionWallDepth
    const windowDeltaOffsetZ =  constructionWallDepth / 2 + 20




    return {
        fullHomeDepth,
        fullHomeWidth,
        fundamentHeight,
        overlapHeight,
        erkerWidth,
        erkerDepth,
        homeDepth,
        fullWidth,
        sideWidthLeft,
        sideWidthRight,
        wallHeight,
        defaultWallDepth,
        facadeWallDepth,
        constructionWallDepth,
        windowDeltaOffsetX,
        windowDeltaOffsetZ
    }
}
