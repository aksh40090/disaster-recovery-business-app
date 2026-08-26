# Disaster Recovery Design for a Business-Critical Application

## Overview

This project demonstrates the design and implementation of a Disaster Recovery (DR) solution for a sample business-critical application.

The solution demonstrates business continuity concepts using a Primary and Secondary recovery environment.

## Objectives

- Design a practical Disaster Recovery strategy.
- Define suitable Recovery Point Objective (RPO) and Recovery Time Objective (RTO) targets.
- Demonstrate application recovery in a secondary environment.
- Perform a controlled failover simulation.
- Document the failover process and results.
- Demonstrate independent CI/CD pipelines for microservices.

## Disaster Recovery Strategy

### Selected Strategy

**Pilot Light**

The Pilot Light approach was selected as a balance between recovery speed, operational complexity, and cost.

The Primary Region represents the active application environment, while the Secondary Region represents the recovery environment.

## RPO and RTO

### Recovery Point Objective (RPO)

**Target RPO: 15 minutes**

The target is to limit potential data loss to approximately 15 minutes.

### Recovery Time Objective (RTO)

**Target RTO: 10 minutes**

The application should ideally be restored and accessible in the secondary environment within 10 minutes after a simulated disaster.

## Proposed Architecture

The demonstration consists of:

- Primary application environment.
- Secondary recovery environment.
- Application health monitoring.
- Failover simulation.
- Recovery verification.

### High-Level Flow

```text
User
  |
  v
Primary Region
  |
  | Simulated Failure
  v
Secondary Region
  |
  v
Recovered Application
# Disaster Recovery Design for a Business-Critical Application

## Overview

This project demonstrates the design and implementation of a Disaster Recovery (DR) solution for a sample business-critical application.

The solution demonstrates business continuity concepts using a Primary and Secondary recovery environment.

## Objectives

- Design a practical Disaster Recovery strategy.
- Define suitable Recovery Point Objective (RPO) and Recovery Time Objective (RTO) targets.
- Demonstrate application recovery in a secondary environment.
- Perform a controlled failover simulation.
- Document the failover process and results.
- Demonstrate independent CI/CD pipelines for microservices.

## Disaster Recovery Strategy

### Selected Strategy

**Pilot Light**

The Pilot Light approach was selected as a balance between recovery speed, operational complexity, and cost.

The Primary Region represents the active application environment, while the Secondary Region represents the recovery environment.

## RPO and RTO

### Recovery Point Objective (RPO)

**Target RPO: 15 minutes**

The target is to limit potential data loss to approximately 15 minutes.

### Recovery Time Objective (RTO)

**Target RTO: 10 minutes**

The application should ideally be restored and accessible in the secondary environment within 10 minutes after a simulated disaster.

## Proposed Architecture

The demonstration consists of:

- Primary application environment.
- Secondary recovery environment.
- Application health monitoring.
- Failover simulation.
- Recovery verification.

### High-Level Flow

```text
User
  |
  v
Primary Region
  |
  | Simulated Failure
  v
Secondary Region
  |
  v
Recovered Application
```

## Disaster Recovery Process

1. Operate the application in the Primary environment.
2. Verify application health.
3. Start the Secondary recovery environment.
4. Verify Secondary environment health.
5. Simulate failure of the Primary environment.
6. Switch application access to the Secondary environment.
7. Verify application availability.
8. Document the failover result.

## Failover Test

The failover test demonstrated:

```text
Primary Region
      ↓
Simulated Failure
      ↓
Secondary Region
      ↓
Application Recovery
```

The Secondary Region successfully displayed:

**Status: HEALTHY | Region: Secondary Region**

The implementation is a local simulation of a cloud Disaster Recovery architecture and does not represent an actual physical cross-cloud-region failure.

## RTO Test Results

| Metric | Target | Actual |
|---|---:|---|
| RPO | 15 minutes | Not formally measured |
| RTO | 10 minutes | Failover demonstrated; exact duration not captured |

## CI/CD Pipeline

The application is divided into two independent microservices:

- **Product Service**
- **Order Service**

Each service has its own GitHub Actions workflow:

- `product-service.yml`
- `order-service.yml`

Each pipeline performs:

1. Source checkout
2. Dependency installation
3. Automated testing
4. Docker image build
5. Container image push to GitHub Container Registry

A change to the Product Service triggers only the Product Service pipeline, while a change to the Order Service triggers only the Order Service pipeline.

## Microservice Structure

```text
services/
├── product-service/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── test.js
│
└── order-service/
    ├── Dockerfile
    ├── package.json
    ├── server.js
    └── test.js
```

## GitHub Actions

```text
.github/
└── workflows/
    ├── product-service.yml
    └── order-service.yml
```

Both pipelines were successfully executed through GitHub Actions.

A Product Service-only change was also tested. The change triggered the Product Service pipeline without creating a new Order Service pipeline run.

## Rollback Mechanism

Each microservice is deployed independently through its own GitHub Actions CI/CD pipeline.

If a deployment fails or introduces an issue, the previous stable Git commit can be restored and redeployed using the same service-specific pipeline.

The rollback process is:

1. Identify the failed deployment.
2. Identify the last known stable commit.
3. Revert the problematic change using Git.
4. Push the revert commit to the `main` branch.
5. The affected service's GitHub Actions pipeline runs again.
6. Automated tests are executed before deployment.
7. If the tests pass, the previous stable version is redeployed.

Because the pipelines are independently triggered based on service directories, rolling back one service does not require redeploying the other service.

### Rollback Strategy

The project uses **Git-based rollback**. Git provides version history, allowing a previous stable version of a microservice to be restored when required.

This approach is simple, auditable, and suitable for the demonstration project without requiring paid cloud infrastructure.

## Evidence

The repository contains evidence demonstrating:

- Product Service automated tests
- Order Service automated tests
- Successful Product Service CI/CD pipeline
- Successful Order Service CI/CD pipeline
- Product-only change triggering the Product Service pipeline
- Primary and Secondary Disaster Recovery environments
- Failover recovery demonstration

## Conclusion

This project demonstrates two important cloud engineering concepts:

1. **Disaster Recovery** using a Pilot Light strategy and a simulated Primary-to-Secondary failover.
2. **Independent CI/CD pipelines** for a microservices application using GitHub Actions and Docker.

The implementation provides a practical demonstration of recovery, automation, testing, independent deployments, and Git-based rollback.
