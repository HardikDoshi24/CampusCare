package org.example.restcontroller;

import org.example.entity.DamagedEntity;
import org.example.service.DamagedEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/damaged-entities")
public class DamagedEntityController {
    @Autowired
    private DamagedEntityService damagedEntityService;

    @GetMapping
    public List<DamagedEntity> getAllDamagedEntities() {
        return damagedEntityService.getAllDamagedEntities();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DamagedEntity> getDamagedEntityById(@PathVariable(value = "id") Long id) {
        DamagedEntity damagedEntity = damagedEntityService.getDamagedEntityById(id);
        return ResponseEntity.ok().body(damagedEntity);
    }

    @PostMapping
    public ResponseEntity<DamagedEntity> createDamagedEntity(@RequestBody DamagedEntity damagedEntity) {
        DamagedEntity createdEntity = damagedEntityService.createDamagedEntity(damagedEntity);
        return ResponseEntity.created(URI.create("/api/damaged-entities/" + createdEntity.getId())).body(createdEntity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DamagedEntity> updateDamagedEntity(@PathVariable(value = "id") Long id, @RequestBody DamagedEntity damagedEntityDetails) {
        DamagedEntity updatedEntity = damagedEntityService.updateDamagedEntity(id, damagedEntityDetails);
        return ResponseEntity.ok(updatedEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDamagedEntity(@PathVariable(value = "id") Long id) {
        damagedEntityService.deleteDamagedEntity(id);
        return ResponseEntity.ok().build();
    }
}
