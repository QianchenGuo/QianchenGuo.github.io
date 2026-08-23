---
title: "Decision Making and Motion Planning for Mobile Agents: The Rising Sea"
date: "2026-05-04"
excerpt: "A structured map connecting predictive and feedback control, optimal control, numerical methods, and real-time approximation."
tags: ["Motion Planning", "Optimal Control", "MPC", "Robotics"]
source: "https://zhuanlan.zhihu.com/p/1922973164197122321"
---

Decision making and planning emerge naturally when fully automated systems operate in complex environments. This note focuses on motion: decision making and motion planning for mobile or embodied agents. Its foundations include predictive control, optimal control and its numerical methods, and differential games; its mathematical language spans feedback control, numerical differential equations, and numerical optimization.

## A unified problem view

A discrete-time motion-planning problem can be written as

$$
\min_{x_{0:T},u_{0:T-1}} \; \Phi(x_T)+\sum_{t=0}^{T-1}\ell(x_t,u_t)
$$

subject to

$$
x_{t+1}=f(x_t,u_t), \qquad (x_t,u_t)\in\mathcal{Z}_t.
$$

The hard part is rarely the notation itself. The difficulty lies in whether the state is sufficient, whether the objective expresses the task, whether the constraints are computationally tractable, and whether the problem can be solved quickly enough online.

## Planning, control, and hierarchy

Planning should not be reduced to geometric path generation. A complete formulation connects state, action, dynamics, information, and cost. Feedback provides robustness; prediction provides foresight. Their combination is the central structure behind model predictive control and many modern planning systems.

Hierarchy is valuable when it exposes task structure rather than merely splitting software into modules. Route, path, trajectory, behavior, and decision layers should be understood by the information and decision spaces they operate on.

## Optimal control and numerical methods

Dynamic programming and the Hamilton–Jacobi–Bellman equation describe global feedback but face the curse of dimensionality. Pontryagin's maximum principle provides local necessary conditions and connects control problems to differential-equation boundary-value problems. Practical systems additionally require direct and indirect methods, shooting and multiple shooting, collocation, sequential convexification, and suitable ODE solvers.

## Structure and approximation

Real-time planning depends on using temporal and spatial sparsity, conditional independence in factor graphs, convexification and operator splitting, reduced models and trajectory parameterization, and sampling or global optimization for non-smooth and multimodal objectives.

## From motion to intelligence

Planning is one route toward physical intelligence. Higher-level reasoning presents the same ingredients—states, actions, information, dynamics, and objectives—but they are substantially harder to define.

A productive direction is to discover richer task structure, complete the state when necessary, use control theory to construct interpretable objectives, and combine hierarchical approximation, sampling, and learning for real-time inference. Offline optimization or learning can provide priors; online feedback retains adaptability.

This view does not reject reinforcement learning, imitation learning, behavior cloning, VLA systems, or world models. It clarifies where each belongs in a complete decision-and-planning stack and which structural difficulty it is meant to address.
