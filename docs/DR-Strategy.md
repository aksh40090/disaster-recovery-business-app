# Disaster Recovery Strategy

## 1. Project Overview

This project presents a Disaster Recovery (DR) solution for a sample business-critical application.

The objective is to maintain application availability and reduce data loss during a failure of the primary cloud region.

## 2. Business Continuity Requirements

The application should:

- Remain recoverable after a regional failure.
- Minimize potential data loss.
- Restore service within the defined recovery time.
- Use a practical and cost-conscious DR strategy.
- Support testing without unnecessarily disrupting the application.

## 3. Selected DR Strategy

### Pilot Light

The selected strategy is Pilot Light.

In this approach, the primary region contains the active application environment, while essential recovery resources and protected data are maintained in a secondary region.

This provides a balance between:

- Recovery speed
- Cost
- Complexity
- Availability

The secondary environment can be activated when the primary region becomes unavailable.

## 4. Recovery Point Objective (RPO)

**Target RPO: 15 minutes**

RPO represents the maximum acceptable amount of data that could potentially be lost after a disaster.

The target is to limit potential data loss to approximately 15 minutes.

## 5. Recovery Time Objective (RTO)

**Target RTO: 10 minutes**

RTO represents the maximum acceptable time required to restore the application after a disaster.

The target is to recover the application in the secondary region within 10 minutes.

The actual RTO will be measured during the failover test.

## 6. Primary and Secondary Regions

### Primary Region

The primary region hosts the active application and handles normal user requests.

### Secondary Region

The secondary region provides the recovery environment and protected data required to restore the application after a primary-region failure.

The exact cloud regions and services will be documented after implementation.

## 7. Data Protection

The DR design includes:

- Automated backups
- Cross-region data protection or replication
- Recovery verification

The implementation will use free resources where possible, as required by the internship task.

## 8. Failover Strategy

Under normal operation:

User → DNS → Primary Region → Application

During a simulated disaster:

Primary Region Failure
→ DNS Failover
→ Secondary Region
→ Application Recovery

The failover process will be tested and recorded.

## 9. Failover Test

The test will verify:

1. Application availability in the primary region.
2. Failure of the primary environment.
3. Failover to the secondary environment.
4. Application availability after recovery.
5. Data availability and integrity.
6. Actual recovery time.

## 10. RTO Measurement

The actual recovery time will be measured using timestamps recorded during the failover test.

### Results

| Metric | Target | Actual |
|---|---:|---:|
| RPO | 15 minutes | To be measured |
| RTO | 10 minutes | To be measured |

The final values will be updated after the real test.

## 11. Conclusion

The proposed Pilot Light strategy provides a practical balance between recovery capability and cost.

The final implementation and failover test will determine whether the selected RPO and RTO targets are achieved.
