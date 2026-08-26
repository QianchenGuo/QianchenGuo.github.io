---
title: 为什么作用，李雅普诺夫定理证明非线性系统稳定性要在微分方程有唯一解的前提下呢？
date: '2023-08-17'
excerpt: >-
  先给出微分方程动力系统的定义，以自治系统为例，其Cauchy问题x'＝f(x)，x(0)＝x0。有唯一解记为x(t，x0)，构造映射族
  φᵗ：x0∈Rⁿ→x(t，x0)∈Rⁿ 参数t∈R，由于解对初值连续依赖性φᵗ连续，由于解具有唯一性，所以φᵗ为双射，有逆φ⁻ᵗ。 此外可以证明φᵗ满足：
  1.φ⁰＝id(恒同映射) 
tags:
  - 知乎归档
  - 知乎回答
source: 'https://www.zhihu.com/question/617258529/answer/3170581527'
sourceType: zhihu-answer
zhihuId: '3170581527'
translationStatus: source-only
updated: '2023-08-17T15:57:55.000Z'
questionTitle: 为什么作用，李雅普诺夫定理证明非线性系统稳定性要在微分方程有唯一解的前提下呢？
---
先给出微分方程动力系统的定义，以[自治系统](https://zhida.zhihu.com/search?content_id=606553320&content_type=Answer&match_order=1&q=%E8%87%AA%E6%B2%BB%E7%B3%BB%E7%BB%9F&zhida_source=entity)为例，其Cauchy问题x'＝f(x)，x(0)＝x0。有唯一解记为x(t，x0)，构造映射族

φᵗ：x0∈Rⁿ→x(t，x0)∈Rⁿ

参数t∈R，由于解对初值连续依赖性φᵗ连续，由于解具有唯一性，所以φᵗ为双射，有逆φ⁻ᵗ。

此外可以证明φᵗ满足：

1.φ⁰＝id([恒同映射](https://zhida.zhihu.com/search?content_id=606553320&content_type=Answer&match_order=1&q=%E6%81%92%E5%90%8C%E6%98%A0%E5%B0%84&zhida_source=entity))

2.φᵗ︒φˢ＝φᵗ⁺ˢ(︒代表映射复合)

3.φᵗ为同胚

于是｛φᵗ｝构成一个[单参数变换群](https://zhida.zhihu.com/search?content_id=606553320&content_type=Answer&match_order=1&q=%E5%8D%95%E5%8F%82%E6%95%B0%E5%8F%98%E6%8D%A2%E7%BE%A4&zhida_source=entity)，且为[Abel群](https://zhida.zhihu.com/search?content_id=606553320&content_type=Answer&match_order=1&q=Abel%E7%BE%A4&zhida_source=entity)，称为常微分方程的动力系统。

从最根本上来说，如果唯一解都无从谈起，也就无法定义单参数变换群，因为φᵗ不是双射。

用更好理解的方式去说，动力系统相空间中某点x0的相轨迹不唯一。这样下去Lyapunov稳定更是无从谈起，要说稳定性就可以反问你你说的是哪个解稳定。于是乎更不要说题主所说的用[Lyapunov定理](https://zhida.zhihu.com/search?content_id=606553320&content_type=Answer&match_order=1&q=Lyapunov%E5%AE%9A%E7%90%86&zhida_source=entity)证明稳定性了，你连证哪个解的稳定性你都不知道(狗头)。
