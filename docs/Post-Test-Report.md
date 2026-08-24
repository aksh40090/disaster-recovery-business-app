# Post-Test Failover Report

## 1. Test Overview

A controlled disaster recovery failover test was performed for the Business Inventory Application.

The objective was to verify that the application could recover from a simulated primary-region failure by switching to the secondary recovery environment.

## 2. Test Environment

### Primary Region
- URL: http://localhost:3000
- Status before failure: Healthy
- Region: Primary Region

### Secondary Region
- URL: http://localhost:3001
- Status: Healthy
- Region: Secondary Region

## 3. Failover Procedure

1. Started the application in the Primary Region on port 3000.
2. Verified application health using the `/health` endpoint.
3. Verified that the inventory application was accessible.
4. Started the recovery environment on port 3001.
5. Verified that the Secondary Region was healthy.
6. Stopped the Primary Region application to simulate a failure.
7. Switched application access to the Secondary Region.
8. Verified that the application was accessible from the Secondary Region.

## 4. Failover Result

The failover test was successful.

After the simulated failure of the Primary Region, the application was successfully accessed through the Secondary Region.

The secondary application displayed:

**Status: HEALTHY | Region: Secondary Region**

## 5. RPO and RTO

| Metric | Target | Result |
|---|---:|---|
| RPO | 15 minutes | Not measured in this local simulation |
| RTO | 10 minutes | Successful recovery; exact elapsed time not formally timed |

## 6. Limitations

This test is a local disaster recovery simulation using two application instances on different ports.

It demonstrates the failover concept and application recovery process but does not represent a physical cross-cloud-region failure.

A production implementation would use cloud-based cross-region replication, automated backups, DNS failover, monitoring, and automated recovery.

## 7. Conclusion

The simulated disaster recovery test successfully demonstrated recovery of the business-critical application from a Primary Region failure to a Secondary Region.

The Pilot Light strategy provides a practical balance between recovery capability, cost, and operational complexity.
