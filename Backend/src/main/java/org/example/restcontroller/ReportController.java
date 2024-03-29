package org.example.restcontroller;// ReportController.java

import org.example.entity.Report;
import org.example.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @PostMapping
    public ResponseEntity<?> submitReport(@RequestBody Report report) {
        reportService.submitReport(report);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/user")
    public ResponseEntity<List<Report>> getUserReports(@RequestParam("email") String email) {
        List<Report> userReports = reportService.getUserReports(email);
        return ResponseEntity.ok(userReports);
    }

    @GetMapping
    public ResponseEntity<List<Report>> getAllReports() {
        List<Report> allReports = reportService.getAllReports();
        return ResponseEntity.ok(allReports);
    }

    @PutMapping("/{reportId}")
    public ResponseEntity<?> updateReportStatus(@PathVariable("reportId") Long reportId,
                                                @RequestParam("status") String status) {
        try {
            reportService.updateReportStatus(reportId, status);
        } catch (ChangeSetPersister.NotFoundException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok().build();
    }
}
