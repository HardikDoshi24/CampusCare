package org.example.service;// ReportService.java

import org.example.entity.Report;
import org.example.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {

    @Autowired
    private ReportRepository reportRepository;

    public void submitReport(Report report) {
        // Logic to save the report
        reportRepository.save(report);
    }

    public List<Report> getUserReports(String email) {
        // Logic to fetch reports for the given user email
        return reportRepository.findByEmail(email);
    }

    public List<Report> getAllReports() {
        // Logic to fetch all reports
        return reportRepository.findAll();
    }

    public void updateReportStatus(Long reportId, String status) throws ChangeSetPersister.NotFoundException {
        // Logic to update report status
        // Example: Update status of the report with given ID
        // Replace this with your actual logic
        Report report = reportRepository.findById(reportId).orElseThrow(ChangeSetPersister.NotFoundException::new);
        report.setStatus(status);
        reportRepository.save(report);
    }

    // Additional methods as needed
}
