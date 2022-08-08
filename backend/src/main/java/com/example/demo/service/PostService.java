package com.example.demo.service;

import com.example.demo.domain.Post;
import com.example.demo.persistence.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    public List<Post> findAll() {
        return postRepository.findAll();
    }


    public Post createPost(Post post) {
        post.setCreationDate(LocalDate.now());
        return postRepository.save(post);
    }
}
