# Disaster Recovery Design for a Business-Critical Application

## Overview

This project demonstrates the design and implementation of a Disaster Recovery (DR) solution for a sample business-critical application.

The solution is designed to improve business continuity by providing backup, recovery, and failover capabilities in a secondary cloud region.

## Objectives

- Design a practical Disaster Recovery strategy.
- Define suitable Recovery Point Objective (RPO) and Recovery Time Objective (RTO) targets.
- Implement cross-region data protection.
- Configure automated backups.
- Implement DNS-based failover where applicable.
- Perform a real failover test.
- Measure the actual recovery time.
- Document the results and lessons learned.

## Disaster Recovery Strategy

### Selected Strategy

Pilot Light

The Pilot Light approach is selected as a balance between recovery speed, operational complexity, and cost.

The primary region hosts the active application, while essential resources and protected data are maintained in the secondary region so that the application can be recovered during a regional failure.

## RPO and RTO

### Recovery Point Objective (RPO)

Target RPO: 15 minutes

The target is to limit potential data loss to a maximum of approximately 15 minutes.

### Recovery Time Objective (RTO)

Target RTO: 10 minutes

The application should ideally be restored and accessible in the secondary region within 10 minutes after a simulated disaster.

> Actual RTO will be recorded during the failover test.

## Proposed Architecture

The architecture consists of:

- Primary region containing the active application.
- Secondary region containing the recovery environment.
- Cross-region data protection or replication.
- Automated backups.
- DNS failover mechanism.
- Monitoring and recovery testing.

### High-Level Flow

User
  |
  v
DNS
  |
  +--------------------+
  |                    |
  v                    v
Primary Region     Secondary Region
   Active              Standby
     |                    |
     v                    v
Application          Recovery
     |                Resources
     v                    ^
Primary Data -----> Protected Data

During a regional failure, traffic is redirected to the secondary recovery environment.

## Disaster Recovery Process

1. Operate the application in the primary region.
2. Protect application data using backups and/or replication.
3. Maintain the required recovery resources in the secondary region.
4. Simulate a failure in the primary region.
5. Trigger or verify DNS failover.
6. Recover the application in the secondary region.
7. Verify application availability and data integrity.
8. Measure the recovery time.
9. Compare the actual recovery time with the target RTO.
10. Document the test results.

## Failover Test

The failover test will demonstrate:

Primary Region
→ Simulated Failure
→ Failover
→ Secondary Region
→ Application Recovery

Evidence of the test will be added to the repository after implementation.

## RTO Test Results

| Metric | Target | Actual |
|---|---:|---:|
| RPO | 15 minutes | To be measured |
| RTO | 10 minutes | To be measured |

The actual results will be updated after the failover test.

## Repository Structure

```text
disaster-recovery-business-app/
│
├── README.md
├── app/
├── deployment/
├── failover-evidence/
├── reports/
└── docs/
