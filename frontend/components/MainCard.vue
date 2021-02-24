<template>
  <div class="p-5 m-3 shadow rounded bg-white md:mx-0 lg:mx-0">
    <h1 class="text-lg text-gray-800">Lorem Ipsum</h1>
    <div class="p-1">
      <p class="text-md text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        consequuntur, recusandae voluptas esse....
      </p>
    </div>
    <div>
      <div class="mt-2">
        <div
          class="px-4 py-1 text-gray-200 inline text-sm rounded-sm"
          :class="colorTag"
        >
          <span style="color: yellow">#</span>Nodemcu
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colorTag: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      colorTags: 'bg-black',
    }
  },
}
</script>

<style></style>
