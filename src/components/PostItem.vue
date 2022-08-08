<template>
  <div class="border-2 border-green-500/[.30] mt-5">
    <div class="border-b-2 ml-5 mr-5 flex justify-between">
      <span>
        {{ name }}
      </span>
      <span>
        {{ date }}
      </span>
    </div>
    <div class="p-5">
      {{ text }}
    </div>
  </div>
</template>

<script>
import {toRefs} from "vue";

export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {post} = toRefs(props);
    return {
      name: post.value.username,
      text: post.value.message,
      date: post.value.creationDate
    }
  }
}
</script>

<style scoped>

</style>