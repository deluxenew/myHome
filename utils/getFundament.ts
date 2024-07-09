import * as THREE from 'three'
import {BufferGeometry} from "three";
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

    //             z
    //    0________________
    //    /        h      /|
    //  x/a              / /
    //  /____      _____/g/
    //  |_b_/c    /|__f_|/
    //     |‾‾d‾‾|e
    //      ‾‾‾‾‾

    const A = {pos: [0, 0, 0], norm: [0, 0, 1], uv: [0, 0],}
    const A1 = {pos: [0, height, 0], norm: [0, 0, 1], uv: [0, 1],}

    const B = {pos: [depth, 0, 0], norm: [0, 0, 1], uv: [depth / fullDepth, 0],}
    const B1 = {pos: [depth, height, 0], norm: [0, 0, 1], uv: [depth / fullDepth, 1],}
    const ABB1 = [B, A, B1]
    const AA1B1 = [A, A1, B1]

    const C = {pos: [depth, 0, sideWidthLeft], norm: [1, 0, 0], uv: [sideWidthLeft / fullWidth, 0],}
    const C1 = {pos: [depth, height, sideWidthLeft], norm: [1, 0, 0], uv: [sideWidthLeft / fullWidth, 1],}
    const BCC1 = [C, B,  C1]
    const BB1C1 = [B, B1, C1]

    const D = {pos: [fullDepth, 0, sideWidthLeft], norm: [0, 0, 1], uv: [erkerDepth / fullDepth, 0],}
    const D1 = {pos: [fullDepth, height, sideWidthLeft], norm: [0, 0, 1], uv: [erkerDepth / fullDepth, 1],}
    const CDD1 = [D,C,  D1]
    const CC1D1 = [C, C1, D1]

    const E = {pos: [fullDepth, 0, sideWidthLeft + erkerWidth], norm: [1, 0, 0], uv: [erkerWidth / fullWidth, 0],}
    const E1 = {pos: [fullDepth, height, sideWidthLeft + erkerWidth], norm: [1, 0, 0], uv: [erkerWidth / fullWidth, 1],}
    const DEE1 = [E, D,  E1]
    const DD1E1 = [D, D1, E1]

    const F = {pos: [depth, 0, sideWidthLeft + erkerWidth], norm: [0, 0, 1], uv: [erkerDepth / fullDepth, 0],}
    const F1 = {pos: [depth, height, sideWidthLeft + erkerWidth], norm: [0, 0, 1], uv: [erkerDepth / fullDepth, 1],}
    const EFF1 = [F, E,  F1]
    const EE1F1 = [E, E1, F1]

    const G = {pos: [depth, 0, fullWidth], norm: [1, 0, 0], uv: [sideWidthRight / fullWidth, 0],}
    const G1 = {pos: [depth, height, fullWidth], norm: [1, 0, 0], uv: [sideWidthRight / fullWidth, 1],}
    const FGG1 = [G, F,  G1]
    const FF1G1 = [F, F1, G1]

    const H = {pos: [0, 0, fullWidth], norm: [0, 0, 1], uv: [depth / fullDepth, 0],}
    const H1 = {pos: [0, height, fullWidth], norm: [0, 0, 1], uv: [depth / fullDepth, 1],}
    const GHH1 = [H, G,  H1]
    const GG1H1 = [G, G1, H1]

    const HAA1 = [A, H,  A1]
    const HH1A1 = [H, H1, A1]

    //             z
    //    0________________
    //    /        h      /|
    //  x/a              / /
    //  /____      _____/g/
    //  |_b_/c    /|__f_|/
    //     |‾‾d‾‾|e
    //      ‾‾‾‾‾

    const CDE =  [C,D,E]
    const CFE = [C,F,E]

    const vertices = [
        ...ABB1, ...AA1B1,
        ...BCC1, ...BB1C1,
        ...CDD1, ...CC1D1,
        ...DEE1, ...DD1E1,
        ...EFF1, ...EE1F1,
        ...FGG1, ...FF1G1,
        ...GHH1, ...GG1H1,
        ...HH1A1, ...HAA1,
    ]

    const positions = [];
    const normals = [];
    const uvs = [];
    for (const vertex of vertices) {
        positions.push(...vertex.pos);
        normals.push(...vertex.norm);
        uvs.push(...vertex.uv);
    }

    const geometry = new THREE.BufferGeometry();
    const positionNumComponents = 3;
    const normalNumComponents = 3;
    const uvNumComponents = 2;
    geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
    geometry.setAttribute(
        'normal',
        new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
    geometry.setAttribute(
        'uv',
        new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));


    // return {
    //     position: new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents),
    //     normal: new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents),
    //     uv: new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents)
    // }
    return geometry
}
