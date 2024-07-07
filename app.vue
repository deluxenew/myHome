<script setup lang="ts">
import {TresCanvas} from '@tresjs/core';
import {shallowRef, watch} from 'vue';
import gsap from 'gsap';
import {Vector3} from "three";

const boxesRef = shallowRef();
const zs = [];
for (let z = -4.5; z <= 4.5; z++) {
    zs.push(z);
}

const camera = ref(null)
const canvas = ref(null)

const cameraBind = ref({
    // position: [10, 10, 10],
    // lookAt: [0, 0, 0]
})

watch(boxesRef, (v) => {
    //getting positions for all the boxes
    // const positions = Array.from(v.children).map(
    //     (child) => child.position
    // );
    //getting rotations for all the boxes
    const rotations = Array.from(v.children).map(
        (child) => child.rotation
    );

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
    gsap.to(rotations, {
        x: 2,
        ...animProperties,
    });
});


</script>

<template>
    <button class="fixed z-10" id="lock">Lock</button>
    <TresCanvas ref="canvas" clear-color="#82DBC5" window-size>
        <TresPerspectiveCamera ref="camera" v-bind="cameraBind"/>
        <OrbitControls/>
        <TresGroup ref="boxesRef">
            <TresMesh v-for="(z, i) of zs" :key="i" :position="new Vector3(0, 0.5, z)">
                <TresBoxGeometry/>
                <TresMeshNormalMaterial/>
            </TresMesh>
        </TresGroup>
        <TresGridHelper :args="[10, 10, 0x444444, 'teal']"/>
    </TresCanvas>
</template>
