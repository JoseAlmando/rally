<template>
  <div>
    <Menu />
    <div class="flex items-center h-screen justify-center bg-gray-200">
      <div class="w-7/12 max-w-2xl">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
          <div class="mb-4">
            <h1 class="text-center text-green-500 text-2xl font-bold mb-2">
              RALLY EDUCATIVO - ITESA
            </h1>
          </div>
          <div class="mb-4">
            <h2 class="block text-gra  y-700 text-md mb-2 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              harum vel facilis suscipit velit minima officia. Totam quis
              placeat ipsum exercitationem suscipit tenetur nulla veritatis
              alias, maxime assumenda, omnis aliquam! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Excepturi harum magnam
              deserunt exercitationem eligendi odio, blanditiis asperiores quam
              ipsam. Quo quos aspernatur voluptate laudantium ad molestiae odit
              similique earum reiciendis?
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu'
export default {
  name: "Inicio",
  components:{
    Menu
  }
};
</script>
