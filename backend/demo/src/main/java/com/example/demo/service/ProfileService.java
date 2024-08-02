package com.example.demo.service;


import com.example.demo.model.Profile;
import com.example.demo.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile saveProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    public Optional<Profile> findProfileById(Long id) {
        return profileRepository.findById(id);
    }

    public void deleteProfile(Long id) {
        profileRepository.deleteById(id);
    }
}
