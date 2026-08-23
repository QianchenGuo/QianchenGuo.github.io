import type { Metadata } from 'next';
import 'katex/dist/katex.min.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://qianchenguo.github.io'),
  title: {
    default: 'Qianchen Guo | Planning, Control & Robotics',
    template: '%s | Qianchen Guo',
  },
  description:
    'Qianchen Guo studies motion planning, optimization-based decision making, control, and robotic intelligence.',
  keywords: ['Qianchen Guo', '郭乾琛', 'motion planning', 'optimal control', 'robotics', 'zeroth-order optimization'],
  openGraph: {
    title: 'Qianchen Guo | Planning, Control & Robotics',
    description: 'Research at the intersection of mathematical structure and the physical world.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
