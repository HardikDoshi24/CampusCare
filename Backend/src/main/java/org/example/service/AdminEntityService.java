package org.example.service;

import jakarta.persistence.EntityNotFoundException;
import org.example.entity.AdminEntity;
import org.example.repository.AdminEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminEntityService {

    @Autowired
    private AdminEntityRepository adminEntityRepository;

    public List<AdminEntity> getAllAdminEntities() {
        return adminEntityRepository.findAll();
    }

    public AdminEntity getAdminEntityById(Long id) {
        return adminEntityRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Admin Entity not found with id: " + id));
    }

    public AdminEntity createAdminEntity(AdminEntity adminEntity) {
        return adminEntityRepository.save(adminEntity);
    }

    public AdminEntity updateAdminEntity(Long id, AdminEntity adminEntityDetails) {
        AdminEntity adminEntity = getAdminEntityById(id);
        adminEntity.setName(adminEntityDetails.getName());
        adminEntity.setDescription(adminEntityDetails.getDescription());
        adminEntity.setType(adminEntityDetails.getType());
        adminEntity.setImageUrl(adminEntityDetails.getImageUrl());
        return adminEntityRepository.save(adminEntity);
    }

    public void deleteAdminEntity(Long id) {
        adminEntityRepository.deleteById(id);
    }
}
