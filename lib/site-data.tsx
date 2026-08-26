export type Lang = 'zh' | 'en';
export const languages: Lang[] = ['zh', 'en'];

export const copy = {
  zh: {
    nav: { home: '首页', cv: '简历', research: '科研经历', blog: '博客' },
    switchLabel: 'EN', intro: '控制 · 数学 · 艺术 · 机器人',
    hero: <>让数学结构、工程理性与<em>艺术感知</em>在真实世界相遇。</>,
    lead: '我是郭乾琛，一名受训于自动化、根植于数学思维的研究者。我的工作围绕运动规划、基于优化的决策方法、实时世界模型与接触丰富的机器人任务展开。',
    viewResearch: '查看科研经历', readBlog: '阅读技术博客',
    status: '当前：重庆大学—MBZUAI 访问学生', role: '控制科学与工程硕士在读',
    metrics: [['40','知乎文章'],['14','知乎回答'],['50万+','公开技术写作字数'],['200+','零阶优化 MPC 社群成员']],
    focusTitle: '从规划出发，连接理论与物理智能',
    focusDesc: '研究关心的不只是单个算法，而是问题结构、实时推理与真实系统之间如何形成闭环。',
    focus: [
      { title: '决策与运动规划', text: '研究有限信息、交互博弈和多模态条件下的在线规划，将反馈控制、预测控制与全局优化统一起来。', tags: ['Motion Planning','MPC','Game Theory'] },
      { title: '优化与统计推断', text: '关注零阶优化、采样方法、变分推断及其在高维非凸决策空间中的实时应用。', tags: ['CMA-ES','CEM','SVGD','Control as Inference'] },
      { title: '机器人世界模型', text: '面向连续体机械臂和接触任务构建高性能半物理仿真器，结合离线全局优化与在线采样 MPC。', tags: ['Continuum Robot','Contact','World Model'] },
    ],
    statementTitle: '规划，是现有科学范式下探索“何为智能”的重要基石。',
    statement: [
      '真正驱动我的是一个又一个技术瓶颈，以及赋予物理实体以智能的追求。物理世界比符号世界复杂得多：它充满不确定性、接触与交互。我希望找到任务背后的结构，并用兼具数学优雅与计算性能的算法处理它们。',
      '我的路径从未知环境中的主动规划与探索开始，经过自动驾驶中的交互式决策，逐步进入连续体机械臂与接触丰富的操作任务。控制与优化对我而言不是工具箱，而是理解应用数学如何进入真实世界的一种语言。',
    ],
    footer: 'Living in mathematics, long live principles.',
  },
  en: {
    nav: { home: 'Home', cv: 'CV', research: 'Research', blog: 'Blog' },
    switchLabel: '中文', intro: 'CONTROL · MATH · ART · ROBOTICS',
    hero: <>Where mathematical structure, engineering reason, and <em>artistic perception</em> meet the physical world.</>,
    lead: 'I am Qianchen Guo, a researcher trained in automation and rooted in mathematical thinking. My work spans motion planning, optimization-based decision making, real-time world models, and contact-rich robotic tasks.',
    viewResearch: 'Explore research', readBlog: 'Read technical notes',
    status: 'Current: Visiting student at CQU–MBZUAI', role: 'M.Sc. candidate in Control Science and Engineering',
    metrics: [['40','Zhihu articles'],['14','Zhihu answers'],['500k+','Chinese characters published'],['200+','Zero-order Optimization MPC community']],
    focusTitle: 'Planning as a bridge between theory and physical intelligence',
    focusDesc: 'My research goes beyond isolated algorithms to study how problem structure, real-time inference, and physical systems form a coherent loop.',
    focus: [
      { title: 'Decision & motion planning', text: 'Online planning under partial information, strategic interaction, and multimodality—connecting feedback control, predictive control, and global optimization.', tags: ['Motion Planning','MPC','Game Theory'] },
      { title: 'Optimization & inference', text: 'Zeroth-order optimization, sampling, and variational inference for real-time reasoning in high-dimensional, non-convex decision spaces.', tags: ['CMA-ES','CEM','SVGD','Control as Inference'] },
      { title: 'Robotic world models', text: 'High-performance semi-physical simulation for continuum manipulators and contact-rich tasks, combining offline global optimization with online sampling-based MPC.', tags: ['Continuum Robot','Contact','World Model'] },
    ],
    statementTitle: 'Planning is a cornerstone for probing what constitutes intelligence under our current scientific paradigm.',
    statement: [
      'What drives me is the succession of technical bottlenecks and the pursuit of endowing physical entities with intelligence. The physical world is richer than symbolic domains: it is uncertain, contact-rich, and interactive. I look for the structure beneath a task and for algorithms that combine mathematical elegance with computational power.',
      'My path began with active planning and exploration in unknown environments, moved through interactive decision making in autonomous driving, and now reaches continuum manipulators and contact-rich manipulation. To me, control and optimization are not merely tools; they are a living language through which applied mathematics enters the physical world.',
    ],
    footer: 'Living in mathematics, long live principles.',
  },
} as const;

export const cv = {
  zh: {
    title: '简历', intro: '控制、优化与机器人方向的教育、研究与工程经历。出于隐私考虑，网页版不公开出生日期、性别和手机号。',
    education: [
      { time: '2025.09 — 至今', title: '控制科学与工程 · 硕士', place: '哈尔滨工程大学 · 智能科学与工程学院', points: ['一等奖学金','研究方向：规划、优化、机器人世界模型'] },
      { time: '2021.09 — 2025.06', title: '自动化 · 工学学士', place: '哈尔滨工程大学 · 智能科学与工程学院', points: ['平均成绩 89.61 / 100','系统学习控制、导航、数值方法与数学基础'] },
    ],
    skills: [
      ['数值分析与优化','数值积分、自动微分、ODE/DAE、Galerkin 方法；一阶与原始—对偶方法；IGO、CEM、NES、CMA-ES、NVA。'],
      ['统计推断与采样','MCMC、变分推断、SVGD、扩散 SDE/ODE、Wasserstein 几何、JKO、Langevin 动力学、FPK、Control as Inference。'],
      ['机器人建模与规划','FK/IK、Lagrange–Hamilton 力学、混杂系统、接触与互补约束、Nash/Stackelberg 博弈、预测与决策规划。'],
      ['工程工具','C/C++、MATLAB、CUDA、ROS、Git/Gerrit、Docker、Gazebo、PX4、QGroundControl。'],
    ],
    awards: ['国家发明专利：一种复杂动态环境下的高效运动规划方法（2025）','COMAP MCM/ICM Honorable Mention（2023）','全国大学生数学竞赛二等奖（2022）','校一等奖学金（2025）；多次二、三等奖学金','CET-4：528；CET-6：448'],
  },
  en: {
    title: 'Curriculum Vitae', intro: 'Education, research, and engineering experience in control, optimization, and robotics. Date of birth, gender, and phone number are intentionally omitted from the public web version.',
    education: [
      { time: 'Sep 2025 — Present', title: 'M.Sc. Candidate, Control Science and Engineering', place: 'Harbin Engineering University · College of Intelligent Systems Science and Engineering', points: ['First-class scholarship','Research focus: planning, optimization, and robotic world models'] },
      { time: 'Sep 2021 — Jun 2025', title: 'B.Eng. in Automation', place: 'Harbin Engineering University · College of Intelligent Systems Science and Engineering', points: ['Average score: 89.61 / 100','Coursework and self-study across control, navigation, numerical methods, and mathematics'] },
    ],
    skills: [
      ['Numerical analysis & optimization','Numerical integration, automatic differentiation, ODE/DAE solvers, Galerkin methods; first-order and primal–dual methods; IGO, CEM, NES, CMA-ES, and NVA.'],
      ['Inference & sampling','MCMC, variational inference, SVGD, diffusion SDE/ODEs, Wasserstein geometry, JKO schemes, Langevin dynamics, Fokker–Planck–Kolmogorov equations, and control as inference.'],
      ['Robot modeling & planning','FK/IK, Lagrangian and Hamiltonian mechanics, hybrid systems, contact and complementarity constraints, Nash/Stackelberg games, prediction, decision making, and motion planning.'],
      ['Engineering','C/C++, MATLAB, CUDA, ROS, Git/Gerrit, Docker, Gazebo, PX4, and QGroundControl.'],
    ],
    awards: ['Chinese invention patent: “An Efficient Motion-Planning Method for Complex Dynamic Environments” (2025)','COMAP MCM/ICM Honorable Mention (2023)','Second Prize, Chinese Mathematics Competitions for College Students (2022)','First-class scholarship (2025) and multiple second-/third-class scholarships','CET-4: 528; CET-6: 448'],
  },
} as const;

export const research = {
  zh: {
    title: '科研经历', intro: '从未知环境导航到自动驾驶决策，再到连续体机械臂：研究主线始终围绕有限信息下的规划、优化与实时推理。',
    items: [
      { time: '2026.03 — 至今 · 重庆', title: '连续体机械臂：动态操作与跟踪', place: '重庆大学—MBZUAI · 访问学生 · 吴克教授指导', points: ['面向连续体机械臂抛接球任务，研究规划与控制一体化方法。','独立开发任务导向的半物理仿真器：采用 Galerkin 空间离散、半隐式/辛 Euler 时间推进和阻尼连续接触模型，实现约 100 ms 级实时计算。','使用离线全局优化生成 warm start，并结合在线采样式 MPC；为多视角视觉状态观测下的抛接行为设计代价。','基于在线简化输入—输出模型辨识与 ILC 生成高质量轨迹—控制对，探索用于 diffusion policy 的前馈控制。'] },
      { time: '2025.12 — 2026.03 · 上海', title: '自动驾驶决策与规划', place: '北京小米移动软件有限公司上海分公司 · 算法工程师实习生', points: ['参与 L3 预研团队的决策规划算法、特征优化与遮挡盲区研究。','参与基于 RSS 不变集的规划框架改进与横向特征增强，完成方案、文档、编码和测试流程。','系统调研 PPnC 遮挡问题，并围绕典型 benchmark 提出处理思路。','学习交互式决策、基于拓扑的行为定义、控制理论驱动的分层结构，以及决策规划联合全局优化。'] },
      { time: '2024.07 — 2025.12 · 哈尔滨', title: '主动规划与空地协同探索', place: '哈尔滨工程大学智能导航与感知实验室 · 黄玉龙教授指导', points: ['搭建基于 Jetson NX、PX4、D435i、Mid-360、GNSS 与动捕的四旋翼实验平台，复现 Ego-Planner-Swarm 与 RACER。','研究有限通信和有限感知条件下 UAV/UGV 群体的高效未知环境探索。','构建地图置信度场，并结合视场约束设计感知型代价，在运动质量和感知能力之间取得平衡。','完成多类协同探索算法的仿真部署、对比和真车测试优化。'] },
    ],
  },
  en: {
    title: 'Research Experience', intro: 'From navigation in unknown environments to autonomous-driving decisions and continuum manipulators, my work centers on planning, optimization, and real-time inference under limited information.',
    items: [
      { time: 'Mar 2026 — Present · Chongqing', title: 'Continuum Manipulation: Dynamic Tasks & Tracking', place: 'Chongqing University–MBZUAI · Visiting Student · advised by Prof. Ke Wu', points: ['Planning and control for ball juggling with a cable-driven continuum manipulator.','Independently developed a task-oriented semi-physical simulator using Galerkin spatial discretization, semi-implicit/symplectic Euler integration, and a damped continuous contact model, reaching approximately 100 ms real-time computation.','Combined offline global optimization for warm starts with online sampling-based MPC, with task costs designed for juggling under multi-view visual state observations.','Generated high-quality trajectory–control pairs through online reduced input–output model identification and iterative learning control, with a path toward diffusion-policy feedforward control.'] },
      { time: 'Dec 2025 — Mar 2026 · Shanghai', title: 'Autonomous-Driving Decision Making & Planning', place: 'Beijing Xiaomi Mobile Software, Shanghai Branch · Algorithm Engineering Intern', points: ['Worked with an L3 pre-research team on decision/planning algorithms, feature refinement, and blind-spot handling.','Contributed to an RSS invariant-set-based planning framework and lateral feature improvements across design, documentation, implementation, and testing.','Conducted a technical survey of occlusion handling in prediction, planning, and control (PPnC), and proposed directions for representative benchmarks.','Studied interactive decision making, topology-based behavior definitions, control-theoretic hierarchical architectures, and joint global optimization for decision making and planning.'] },
      { time: 'Jul 2024 — Dec 2025 · Harbin', title: 'Active Planning & Air–Ground Collaborative Exploration', place: 'Intelligent Navigation and Perception Lab, Harbin Engineering University · advised by Prof. Yulong Huang', points: ['Built quadrotor platforms around Jetson NX, PX4, Intel RealSense D435i, Livox Mid-360, GNSS, and motion capture; reproduced Ego-Planner-Swarm and RACER.','Studied efficient exploration by UAV/UGV teams under limited communication and perception.','Constructed a map-confidence field and perception-aware costs under field-of-view constraints to balance motion quality with sensing quality.','Deployed and compared collaborative exploration algorithms in simulation, followed by real-platform testing and refinement.'] },
    ],
  },
} as const;

export const knownZhihuPosts = [
  ['2026-05-04','移动机器人决策规划 目录','https://zhuanlan.zhihu.com/p/1922973164197122321'],
  ['2026','泛 manipulation 方向溯源','https://zhuanlan.zhihu.com/p/2065896212180555389'],
  ['2026','PPnC 遮挡处理方案','https://zhuanlan.zhihu.com/p/2011795905771245937'],
  ['2026','自动驾驶 PPnC 遮挡相关处理','https://zhuanlan.zhihu.com/p/1997333141497590142'],
  ['2026','移动机器人规划 番外：定位与建图','https://zhuanlan.zhihu.com/p/6494410827'],
  ['2026','非线性系统控制相关资料','https://zhuanlan.zhihu.com/p/664881766'],
  ['2026','移动机器人规划（六）：运动规划任务框架','https://zhuanlan.zhihu.com/p/20950529001'],
  ['2026','最优序贯、统计推断与规划','https://zhuanlan.zhihu.com/p/29474410388'],
  ['2026','移动机器人规划（五）：多项式轨迹优化','https://zhuanlan.zhihu.com/p/15266756391'],
] as const;
