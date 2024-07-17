export default function () {
    const fullDepth = 12000
    const fullWidth = 9200
    const height = 300

    const erkerWidth = 3200
    const erkerDepth = 2100

    const depth = fullDepth - erkerDepth
    const width = fullWidth

    const sideWidthLeft = (width - erkerWidth) / 2
    const sideWidthRight = sideWidthLeft

    const wallHeight = 6400

    const facadeWallDepth = 100
    const constructionWallDepth = 420


    return {
        fullDepth,
        fullWidth,
        height,
        erkerWidth,
        erkerDepth,
        depth,
        width,
        sideWidthLeft,
        sideWidthRight,
        wallHeight,
        facadeWallDepth,
        constructionWallDepth
    }
}
