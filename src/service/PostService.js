import axios from "axios";

class PostService {
    static #instance;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new PostService();
        }
        return this.#instance;
    }

    getAllPosts() {
        return axios.get("/posts");
    }

    postPost(post) {
        console.log(post)
        if(post.message === "") {
            return;
        }
        return axios.post("/posts", post);
    }
}

const postService = PostService.getInstance();
export default postService;