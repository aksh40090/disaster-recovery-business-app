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
