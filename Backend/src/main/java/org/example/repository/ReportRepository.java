package org.example.repository;// ReportRepository.java

import org.example.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReportRepository extends JpaRepository<Report, Long> {

    List<Report> findByEmail(String email);
}
