export type BlogColumn = {
  slug: string;
  name: string;
  enName: string;
  zhDescription: string;
  enDescription: string;
};

export const blogColumns: BlogColumn[] = [
  {
    slug: 'mobile-robotics',
    name: '移动机器人决策规划',
    enName: 'Mobile Robotics & Decision Planning',
    zhDescription: '运动规划、决策规划、PPnC 遮挡处理与 manipulation 方向梳理。',
    enDescription: 'Motion planning, decision planning, occlusion handling, and manipulation surveys.',
  },
  {
    slug: 'optimization',
    name: '优化理论',
    enName: 'Optimization Theory',
    zhDescription: '零阶优化、非线性规划与面向机器人运动的最优化方法。',
    enDescription: 'Zeroth-order optimization, nonlinear programming, and optimization for robot motion.',
  },
  {
    slug: 'control-theory',
    name: '控制理论',
    enName: 'Control Theory',
    zhDescription: '控制理论、Kalman 滤波、最优估计与数学控制论笔记。',
    enDescription: 'Control theory, Kalman filtering, optimal estimation, and mathematical control notes.',
  },
  {
    slug: 'differential-manifold',
    name: '微分流形与分析力学',
    enName: 'Differential Manifolds & Analytical Mechanics',
    zhDescription: '流形、几何与分析力学相关的数学笔记。',
    enDescription: 'Mathematical notes on manifolds, geometry, and analytical mechanics.',
  },
  {
    slug: 'math-learning',
    name: '数学学习方法论',
    enName: 'Mathematics Learning',
    zhDescription: '数学学习方法、教材评价与学习路径整理。',
    enDescription: 'Mathematics learning methods, textbook notes, and study paths.',
  },
  {
    slug: 'engineering-computing',
    name: '工程与计算',
    enName: 'Engineering & Computing',
    zhDescription: '并行计算、CUDA、MATLAB 与工程工具笔记。',
    enDescription: 'Parallel computing, CUDA, MATLAB, and engineering tool notes.',
  },
];

export const columnBySlug = new Map(blogColumns.map(column => [column.slug, column]));
export const slugByColumnName = new Map(blogColumns.map(column => [column.name, column.slug]));
