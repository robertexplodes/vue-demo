<template>
  <div class="ml-5">
    <div v-if="!loading" class="flex justify-center flex-col">
      <PostItem v-for="post in posts" :key="post.id" :post="post"/>
    </div>
    <div v-else>
      <div class="flex w-full justify-center">
        <ProgressSpinner/>
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
import postService from "@/service/PostService";
import ProgressSpinner from 'primevue/progressspinner';
import {onMounted, ref} from "vue";

export default {
  name: "PostList",
  components: {PostItem, ProgressSpinner},
  setup() {
    const posts = ref([]);
    const loading = ref(true);
    onMounted(() => {
      postService.getAllPosts()
          .then((response) => {
            posts.value = response.data;
            loading.value = false;
          })
          .catch(err => {
            console.log(err);
            loading.value = false;
          });
    })
    return {
      posts,
      loading
    }
  }
}
</script>

<style scoped>

</style>