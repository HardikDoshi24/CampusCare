package org.example.restcontroller;

import org.example.entity.AdminEntity;
import org.example.service.AdminEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/admin-entities")
public class AdminEntityController {

    @Autowired
    private AdminEntityService adminEntityService;

    @GetMapping
    public List<AdminEntity> getAllAdminEntities() {
        return adminEntityService.getAllAdminEntities();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminEntity> getAdminEntityById(@PathVariable(value = "id") Long id) {
        AdminEntity adminEntity = adminEntityService.getAdminEntityById(id);
        return ResponseEntity.ok().body(adminEntity);
    }

    @PostMapping
    public ResponseEntity<AdminEntity> createAdminEntity(@RequestBody AdminEntity adminEntity) {
        AdminEntity createdEntity = adminEntityService.createAdminEntity(adminEntity);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(createdEntity.getId()).toUri();
        return ResponseEntity.created(location).body(createdEntity);
    }


    @PutMapping("/{id}")
    public ResponseEntity<AdminEntity> updateAdminEntity(@PathVariable(value = "id") Long id,
                                                         @RequestBody AdminEntity adminEntityDetails) {
        AdminEntity updatedEntity = adminEntityService.updateAdminEntity(id, adminEntityDetails);
        return ResponseEntity.ok(updatedEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAdminEntity(@PathVariable(value = "id") Long id) {
        adminEntityService.deleteAdminEntity(id);
        return ResponseEntity.ok().build();
    }
}
