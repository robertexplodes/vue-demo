<template>
  <br/>
  <div class="flex w-full mt-2 justify-center">
    <div class="flex flex-col">
      <div>
        <span class="p-float-label">
            <InputText id="username" type="text" v-model="username" class="w-full"/>
            <label for="username">Username</label>
        </span>
      </div>
      <div class="mt-6">
        <span class="p-float-label">
          <Textarea id="inputtext" type="text" v-model="message" cols="50" rows="10"/>
          <label for="inputtext">post message</label>
        </span>
      </div>
      <div class="w-full">
        <Button label="Post" class="border-green-400 hover:bg-green-500 bg-green-400 w-full" @click="postPost"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import postService from "@/service/PostService";

export default {
  name: "PostInput",
  components: {
    Textarea,
    Button,
    InputText
  },
  setup() {
    const message = ref('');
    const username = ref('');

    function postPost() {
      const post = {
        message: message.value,
        username: username.value
      };
      postService.postPost(post)
          .then(() => {
            message.value = '';
            username.value = '';
          })
          .catch(err => {
            console.log(err);
          });
    }

    return {
      message: message,
      username: username,
      postPost
    }
  }
}
</script>

<style scoped>

</style>