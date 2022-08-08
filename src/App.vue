<template>
  <PostHeader />
  <div class="flex flex-row">
    <div class="w-1/2">
      <PostList />
    </div>
    <div class="w-1/2">
      <PostInput/>
    </div>
  </div>
</template>

<script>
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'              //core css
import 'primeicons/primeicons.css'                         //icons

import PostInput from "@/components/PostInput";
import PostList from "@/components/PostList";
import PostHeader from "@/components/Header";

export default {
  name: 'App',
  components: {
    PostHeader,
    PostList,
    PostInput
  }
}
</script>

<style>
</style>
