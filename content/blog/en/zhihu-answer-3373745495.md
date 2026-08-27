---
title: In Control Theory Research, What Does It Mean to Be 'Good at Math' or 'Have a Solid Mathematical Foundation'?
date: 2024-03-24
excerpt: >-
  Control theory is essentially a branch of applied mathematics. As such, conducting research in control theory requires a deep engagement with mathematics—there is no upper limit, only room for improvement. Therefore, researchers must learn to apply mathematical tools selectively. The following list of courses is provided, but in practice, control theory research does not require every detail from each course; rather, the problems it addresses primarily draw on only a portion of these topics. Moreover, control theory, as an application-oriented discipline with a strong analytical component, ...
tags:
  - Zhihu Archive
  - Zhihu Answer
source: "https://www.zhihu.com/question/630028413/answer/3373745495"
sourceType: zhihu-answer
zhihuId: '3373745495'
translationStatus: translated
updated: "2024-03-24T17:20:58.000Z"
---

In Control Theory Research, What Does It Mean to Be 'Good at Math' or 'Have a Solid Mathematical Foundation'?

Control theory is, in essence, a branch of applied mathematics. So practically everyone working in control theory needs a lot of math—indeed, one could say there's no such thing as "good enough," only "better." Mathematics is limitless. Thus, when doing research, the key is knowing what to study and filling gaps as they arise.

Below I'll list a series of courses, but in reality, control theory research doesn't use every detail of every course. Quite the opposite: the problems that control theory focuses on typically draw on only a subset of these topics. Moreover, since control theory is an analysis-oriented branch of applied mathematics, having a solid mathematical foundation doesn't mean memorizing all the proofs in these courses—it means understanding the important tools and results well enough to apply them to control theory research.

Control theory can be divided into ODE control theory and [PDE control theory](https://zhida.zhihu.com/search?content_id=643484184&content_type=Answer&match_order=1&q=PDE%E6%8E%A7%E5%88%B6%E7%90%86%E8%AE%BA&zhida_source=entity). The former is fairly mature, while the latter has far more open problems than the former.

Items marked with \* are not critical—they can be skipped, or studied on an as-needed basis.

Items marked with \*\* are optional, provided certain conditions are met (conditions I'll mention after each course).

## 1. Foundational Courses

Building the groundwork.

1.1 Mathematical Analysis (The foundational course in analysis. It provides the calculus toolkit and builds an initial understanding of analysis—this is the basis of everything that follows.)

1.2 [Linear Algebra and Matrix Theory](https://zhida.zhihu.com/search?content_id=643484184&content_type=Answer&match_order=1&q=%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0%E4%B8%8E%E7%9F%A9%E9%98%B5%E8%AE%BA&zhida_source=entity) (The foundational course in algebra. As someone working in control theory, you'll need several important results from linear algebra, but standard linear algebra alone isn't enough—some matrix theory is necessary. For instance, LMIs (linear matrix inequalities) are a common tool in control.)

1.3 Ordinary Differential Equations (Essential groundwork whether you're doing ODE control or PDE control. The emphasis should be on qualitative theory and the theory of linear ODEs.)

\*\*1.4 Complex Analysis (Not used extensively, but some results come up and it provides a foundation for integral transforms. So you can study it selectively as needed.)

1.5 Integral Transforms (This has functional analysis as its background, but you can understand it with just calculus and complex analysis basics. If you're content with a working understanding rather than full rigor, you can start using it right away. It's the foundation of frequency-domain analysis for linear systems.)

\*\*1.6 Classical Calculus of Variations (With a calculus background, you can get started. This is the basic tool for optimal control theory. Alternatively, you can learn it in 1.7 or 1.8—some 1.7 textbooks cover it, and 1.8 typically covers it as well.)

\*\*1.7 Linear System Theory (This is, in a sense, a synthesis of the foundational courses. You apply the mathematical tools from 1.1–1.5 to complete the modeling and analysis of control systems, and also learn something about control system design. If you're planning to jump straight into 2.3, you can skip 1.7.)

\*\*1.8 Optimal Control Theory (This builds on 1.6; most textbooks will introduce 1.6 themselves. Optimal control is a major part of control theory, concerning the search for theoretically optimal control laws. Part of this is covered in 1.7 as well. If you're starting 2.3, you can postpone 1.7 and 1.8, but I'd still recommend studying 1.6.)

\*\*1.9 [Classical PDE Theory](https://zhida.zhihu.com/search?content_id=643484184&content_type=Answer&match_order=1&q=%E5%8F%A4%E5%85%B8%E5%81%8F%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E7%90%86%E8%AE%BA&zhida_source=entity) (Often called Mathematical Physics Equations or folded into Mathematical Methods in Physics. It covers the classical solution methods for several basic PDEs. It uses calculus from 1.1, and 1.3–1.5 come in to varying degrees. Of course, if you're determined to go straight into 2.7, you can skip 1.9.)

## 2. Advanced Courses

This section draws on various parts of the foundational courses, to a greater or lesser extent.

2.1 Functional Analysis (The backbone of analysis. If you've already encountered analysis on finite-dimensional normed linear spaces in 1.1, this will be much easier—but most 1.1 courses don't go that deep. As for real analysis, you don't need it unless you're taking 3.2, so we can drop the parts of 2.1 that require real analysis. The main goal is to master the more general analytic language of 2.1 compared to mathematical analysis, and to grasp some handy results, such as the contraction mapping principle. Of course, if you're planning to take 3.2, you'll need to follow the functional analysis track into semigroup theory.)

\*\*2.2 Geometric Theory of ODEs (Usually not covered in undergraduate ODE courses, but quite important for control theory. The core is Lyapunov stability theory, covering the analysis of equilibria and periodic orbits. If you want to understand how parameter variations affect systems, you'll also encounter bifurcation theory. If you're bold, you could go straight to 2.3, but that's not ideal.)

2.3 Nonlinear Systems (The introductory course for ODE control. In principle, 1.1, 1.2, and 1.3 suffice as prerequisites, but it'll be a struggle. With the foundation from 2.2 plus the mathematical groundwork from the foundational courses, it should be quite manageable. You'll have seen most of the qualitative theory of ODEs in 2.2, so you can skim that part; the control-related material later on is what deserves your full attention. Having 1.7 helps, but the two can also be learned independently.)

\*2.4 Abstract Algebra (No prerequisites needed, but it is abstract and hard to get into. Fortunately, we don't need much of it—basically just homomorphisms and isomorphisms from group theory, and some classical groups that serve as examples of Lie groups. You don't need to study it systematically; just fill in as needed.)

\*2.5 Algebraic Topology (Requires 2.4 as a prerequisite. It comes up in the deeper parts of 2.6 and 2.7, but you can learn it on the spot when needed.)

2.6 Modern Differential Geometry (The geometric foundation course. The objects of study are differentiable manifolds, and with a Riemannian metric, Riemannian manifolds. For ODE control, in general terms, you're studying distributions on manifolds. Here you'll draw to varying degrees on 1.1, 1.2, 1.3, 2.1, and 2.2. You'll also encounter some topology and Lie group material, but with 1.1 and 2.1 under your belt, you won't need a separate topology course, and for Lie groups, just a basic grasp of groups suffices.)

2.7 [Modern PDE Theory](https://zhida.zhihu.com/search?content_id=643484184&content_type=Answer&match_order=1&q=%E7%8E%B0%E4%BB%A3%E5%81%8F%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E7%90%86%E8%AE%BA&zhida_source=entity) (The foundation for PDE control. It requires 1.3 and 2.1 as background, and 1.9 is a plus. However, much of it isn't fully used in PDE control, since PDE control is just one direction within the field.)

2.8 [Geometric Theory of Nonlinear Systems](https://zhida.zhihu.com/search?content_id=643484184&content_type=Answer&match_order=1&q=%E9%9D%9E%E7%BA%BF%E6%80%A7%E7%B3%BB%E7%BB%9F%E5%87%A0%E4%BD%95%E7%90%86%E8%AE%BA&zhida_source=entity) (Requires some background from 2.6; most books include the necessary mathematical material. This is predictably a major direction for nonlinear systems, though it's currently quiet in the academic community—mainly because it's too mathematical, so few people work on it.)

## 3. Advanced/Top-Level Courses

Often not used, or only partially used. Since these go quite deep, I won't mark them with \* or \*\*.

3.1 Modern Calculus of Variations (A more modern perspective on the calculus of variations, covering far more than the classical version—they're quite different. In fact, the calculus of variations is part of nonlinear functional analysis. With 2.1 and 2.5 as background, you can study it; some algebraic topology comes up, but you can also pick that up as needed.)

3.2 PDE Control (This direction has a relatively short history, and there are few course materials in China. I know there are some researchers in China working on evolution equations, but not all of them are in control theory. France has substantial research in this area; there's a relevant book in the *Collection of Fine French Mathematical Translations*.)

3.3 [Riemannian Geometry](https://zhida.zhihu.com/search?content_id=643484184&content_type=Answer&match_order=1&q=Riemann%E5%87%A0%E4%BD%95&zhida_source=entity) (A deeper direction extending 2.6. After learning differentiable manifolds in 2.6, you add a Riemannian metric to obtain Riemannian manifolds as the object of study, going deeper than 2.6. Here you need not only 2.6 but also the calculus of variations to find geodesics on Riemannian manifolds.)

3.4 Differential Topology (The objects of study are differentiable manifolds. Requires 2.5 and 2.6 as background; it's "softer" than 3.2.)

3.5 Nonlinear Analysis (Focused on the various tools of nonlinear functional analysis; 2.1, 2.5, and 2.7 are all necessary prerequisites.)

3.6 Integrable Systems (The integrability of ODEs is given by [Frobenius' theorem](https://zhida.zhihu.com/search?content_id=643484184&content_type=Answer&match_order=1&q=Frobenius%E5%AE%9A%E7%90%86&zhida_source=entity), while this course studies integrability properties of PDE systems. Many advanced tools can be used, but at minimum, 2.6 should be solid.)

## 4. Other

Sometimes the branch we work on isn't ODE control or PDE control. In that case, the following courses come into play. Since this section targets different directions, I won't mark \* or \*\*.

4.1 Probability and Mathematical Statistics (The most basic foundation for working on stochastic systems.)

4.2 Stochastic Processes

4.3 Measure Theory

4.4 Stochastic Analysis

4.5 Stochastic PDEs (Research on stochastic PDEs requires not only PDE knowledge but also results from stochastic analysis. 4.1–4.5 are all mathematical topics used in stochastic systems work.)

4.6 Graph Theory

4.7 Convex Optimization (The foundational course for optimization. In the mathematics department, there's a corresponding course called Convex Analysis, which covers the same material but with a more analytic treatment. Since the two big questions in control are stability and optimal control, and optimal control essentially uses Pontryagin's maximum principle to extremize a performance index, the reason linear LQR is so simple is that its performance index happens to be a convex quadratic form.)

4.8 Operations Research (Here I mean the undergraduate-level course, which covers linear programming and some nonlinear programming.)

4.9 Nonlinear Programming (Highly related to convex optimization; 4.7–4.9 all belong to the field of optimization theory in mathematics.)

Of course, if you're not a math major—say, automation—reading the above list will likely be intimidating. But don't panic. If we lower the bar for what counts as "studying" these courses, you'll find it's not all that different.

In the foundational courses, 1.1–1.5 correspond to what you've already encountered: calculus, linear algebra, ODEs from engineering math, complex analysis, and integral transforms. So you do have some background—it's just a matter of filling in concepts as they come up in research. As for 1.6 and 1.7, I believe automation majors have a course on modern control theory in their undergraduate curriculum, which already covers part of linear system theory and [optimal control and the calculus of variations](https://zhida.zhihu.com/search?content_id=643484184&content_type=Answer&match_order=1&q=%E6%9C%80%E4%BC%98%E6%8E%A7%E5%88%B6%E4%B8%8E%E5%8F%98%E5%88%86%E6%B3%95&zhida_source=entity). (As for Automatic Control Theory, that classical control theory is really just a part of linear system theory; it gets its own mention only because it's classical and widely applied.) For 1.8, I believe optimal control is available as an elective or graduate course in automation programs. And matrix theory from 1.2 is a required course for automation graduate students.

Among the advanced courses, 2.1 is required for automation graduate students, and 2.3 is necessary if you're working in nonlinear systems.

For automation PhD students, certain directions will touch on parts of the advanced and top-level courses, but systematic coverage of all the above is certainly not appropriate.

As for the material in section 4, various graduate directions will use parts of it to varying degrees.

From all this, you can see that automation students doing control theory aren't necessarily at a disadvantage. The key is not to think you need to build a rock-solid mathematical foundation before starting research—if you take that approach, your math foundation will never be solid enough.
