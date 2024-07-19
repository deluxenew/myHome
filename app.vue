<script setup lang="ts">
import {TresCanvas} from '@tresjs/core';
import {shallowRef, watch} from 'vue';
import gsap from 'gsap';
import {
    BasicShadowMap,
    Vector3,
    SRGBColorSpace,
    NoToneMapping, PerspectiveCamera, Camera,
} from "three";
import getFundament from "/utils/getFundament";
import getWalls from "/utils/getWalls";
import getOverlap from "/utils/getOverlap";


const boxesRef = shallowRef();
const zs = [];
for (let z = -4.5; z <= 4.5; z++) {
    zs.push(z);
}

const camera = ref(null)
const canvas = ref(null)

const cameraBind = ref({
    position: [15000, 10000, 0],
    lookAt: new Vector3(5000, 0, 5000),
    fov: 45,
    far: 100000,


})

watch(boxesRef, (v) => {
    v.children.forEach((child) => child.scale.set(0, 0, 0))
    const opacities = Array.from(v.children).map(
        (child) => child.scale
    );

    const animProperties = {
        ease: 'power1.inOut',
        duration: .5,
        overwrite: true,
        stagger: {
            each: .1,
            // repeat: 1,
            yoyo: true,
        },
    };
    gsap.to(opacities,
        {
            y: 1,
            x: 1,
            z: 1,
            ...animProperties,
        }
    );
    animProperties.stagger.repeat = 1
});

const fundaments = getFundament()
const walls = getWalls()
const overlap = getOverlap()

const objects = ref([...fundaments, ...walls, ...overlap])

const gl = {
    clearColor: '#82DBC5',
    shadows: true,
    alpha: false,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
}
const aspect = computed(() => {
    if (typeof window === "undefined") return 800/600
    return window.innerWidth/ window.innerHeight
})
</script>

<template>
    <TresCanvas ref="canvas" clear-color="#82DBC5" window-size v-bind="gl" preset="realistic">
        <TresPerspectiveCamera  ref="camera" v-bind="cameraBind" :far="1000000" >

        </TresPerspectiveCamera>
        <OrbitControls :target="new Vector3(5000, 2500, 5000)"/>
        <TresDirectionalLight  :position="new Vector3(10000,10000,10000)" :intensity="1" :shadow="true">

        </TresDirectionalLight>
        <TresGroup ref="boxesRef">
            <TresObject3D v-bind="item" v-for="item in objects">

            </TresObject3D>
        </TresGroup>
    </TresCanvas>
</template>
