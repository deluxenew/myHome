<script setup lang="ts">
import {TresCanvas, useRenderLoop, vLightHelper, vLog} from '@tresjs/core';
import {shallowRef, watch} from 'vue';
import gsap from 'gsap';
import {
  Vector3,
  SRGBColorSpace,
  NoToneMapping, PCFSoftShadowMap, VSMShadowMap,
} from "three";
import getFundament from "/utils/getFundament";
import getWalls from "/utils/getWalls";
import getOverlap from "/utils/getOverlap";
import {OrbitControls} from '@tresjs/cientos';
import getPartitionWall from "/utils/getPartitionWall";
import MyHome from "~/home";
import {homeConfig} from "~/home/config";


const boxesRef = shallowRef();

const camera = ref(null)
const canvas = ref(null)

const cameraBind = ref({
  position: [3, 2, 3],
  lookAt: new Vector3(3, 2, 4),
  fov: 45,
  far: 100000,
})

const {onLoop} = useRenderLoop()

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
const partitionWalls = getPartitionWall()

const home = new MyHome(homeConfig)

const fundament = home.fundament3D
console.log(fundament)
const objects = ref([...overlap, ...walls, ...partitionWalls])

const gl = {
  clearColor: '#ffffff',
  shadows: true,
  shadowMapType: PCFSoftShadowMap,
  // outputColorSpace: SRGBColorSpace,
}


</script>

<template>
  <TresCanvas ref="canvas" window-size v-bind="gl" preset="realistic">
    <TresPerspectiveCamera ref="camera" v-bind="cameraBind" :far="100">

    </TresPerspectiveCamera>
    <OrbitControls/>



    <TresGroup ref="boxesRef" :scale="new Vector3(0.001, 0.001, 0.001)">
      <TresGroup>
        <TresObject3D v-bind="item" v-for="item in fundament.children">

        </TresObject3D>
      </TresGroup>
      <TresObject3D cast-shadow receive-shadow v-bind="item" v-for="item in objects">

      </TresObject3D>
      <TresSpotLight
          :position="new Vector3(3000,6400,3000)"
          :intensity="1"
          cast-shadow
          :angle="Math.PI"
      />

      <!--        <TresPointLight-->
      <!--            :position="new Vector3(8,6.4,3)"-->
      <!--            :intensity="10"-->
      <!--            cast-shadow-->
      <!--        />-->

      <TresSpotLight
          :position="new Vector3(8000,3000,3000)"
          :intensity="1"
          :angle="Math.PI"
          cast-shadow
      />

      <TresSpotLight
          :position="new Vector3(5000,3000,5000)"
          :intensity="1"
          :angle="Math.PI"
          cast-shadow
      />
    </TresGroup>
    <TresAmbientLight :intensity=".4"/>

  </TresCanvas>
</template>
