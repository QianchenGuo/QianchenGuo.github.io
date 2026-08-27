---
title: Why is the uniqueness of solutions to differential equations a prerequisite for proving the stability of nonlinear systems via Lyapunov's theorem?
date: 2023-08-17
excerpt: >-
  First, we define the dynamical system of differential equations, taking an autonomous system as an example, whose Cauchy problem is x' = f(x), x(0) = x0. If the unique solution is denoted as x(t, x0), we construct a family of mappings φᵗ: x0 ∈ Rⁿ → x(t, x0) ∈ Rⁿ with parameter t ∈ R. Due to the continuous dependence of solutions on initial conditions, φᵗ is continuous; due to the uniqueness of solutions, φᵗ is bijective and has an inverse φ⁻ᵗ. Furthermore, it can be shown that φᵗ satisfies: 1. φ⁰ = id (identity mapping).
tags:
  - Zhihu Archive
  - Zhihu Answer
source: "https://www.zhihu.com/question/617258529/answer/3170581527"
sourceType: zhihu-answer
zhihuId: '3170581527'
translationStatus: translated
updated: "2023-08-17T15:57:55.000Z"
---

Let me first give the definition of a dynamical system from differential equations. Taking an [autonomous system](https://zhida.zhihu.com/search?content_id=606553320&content_type=Answer&match_order=1&q=%E8%87%AA%E6%B2%BB%E7%B3%BB%E7%BB%9F&zhida_source=entity) as an example, its Cauchy problem is x′ = f(x), x(0) = x₀. If a unique solution exists, it is denoted as x(t, x₀), and we construct the family of mappings

φᵗ: x₀ ∈ ℝⁿ ↦ x(t, x₀) ∈ ℝⁿ

with parameter t ∈ ℝ. Since solutions depend continuously on initial conditions, φᵗ is continuous; since solutions are unique, φᵗ is bijective and has an inverse φ⁻ᵗ.

Furthermore, one can show that φᵗ satisfies:

1. φ⁰ = id (the [identity mapping](https://zhida.zhihu.com/search?content_id=606553320&content_type=Answer&match_order=1&q=%E6%81%92%E5%90%8C%E6%98%A0%E5%B0%84&zhida_source=entity)).

2. φᵗ ∘ φˢ = φᵗ⁺ˢ (∘ denotes composition of mappings).

3. φᵗ is a homeomorphism.

Thus, {φᵗ} forms a [one-parameter transformation group](https://zhida.zhihu.com/search?content_id=606553320&content_type=Answer&match_order=1&q=%E5%8D%95%E5%8F%82%E6%95%B0%E5%8F%98%E6%8D%A2%E7%BE%A4&zhida_source=entity), which is also an [Abelian group](https://zhida.zhihu.com/search?content_id=606553320&content_type=Answer&match_order=1&q=Abel%E7%BE%A4&zhida_source=entity), and this is called the dynamical system of the ordinary differential equation.

At the most fundamental level, if a unique solution cannot even be discussed, then the one-parameter transformation group cannot be defined, because φᵗ would not be bijective.

To put it in more intuitive terms, the phase trajectory of a point x₀ in the phase space of the dynamical system would not be unique. If that is the case, Lyapunov stability is entirely out of the question—when discussing stability, one could ask you back: which solution are you saying is stable? And then it goes without saying that you cannot use the [Lyapunov theorem](https://zhida.zhihu.com/search?content_id=606553320&content_type=Answer&match_order=1&q=Lyapunov%E5%AE%9A%E7%90%86&zhida_source=entity) to prove stability, because you do not even know whose stability you are proving (just kidding).
