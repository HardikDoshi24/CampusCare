//package org.example.service;
//
//import jakarta.persistence.EntityNotFoundException;
//import org.example.entity.DamagedEntity;
//import org.example.repository.DamagedEntityRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class DamagedEntityService {
//    @Autowired
//    private DamagedEntityRepository damagedEntityRepository;
//
//    // Methods for CRUD operations
//
//    public List<DamagedEntity> getAllDamagedEntities() {
//        return damagedEntityRepository.findAll();
//    }
//
//    public DamagedEntity getDamagedEntityById(Long id) {
//        return damagedEntityRepository.findById(id)
//                .orElseThrow(() -> new EntityNotFoundException("Damaged Entity not found with id: " + id));
//    }
//
//    public DamagedEntity createDamagedEntity(DamagedEntity damagedEntity) {
//        return damagedEntityRepository.save(damagedEntity);
//    }
//
//    public DamagedEntity updateDamagedEntity(Long id, DamagedEntity damagedEntityDetails) {
//        DamagedEntity damagedEntity = getDamagedEntityById(id);
//        damagedEntity.setName(damagedEntityDetails.getName());
//        damagedEntity.setType(damagedEntityDetails.getType());
//        return damagedEntityRepository.save(damagedEntity);
//    }
//
//    public void deleteDamagedEntity(Long id) {
//        damagedEntityRepository.deleteById(id);
//    }
//}
