// src/routes.tsx
import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const DocPage = lazy(() => import('./pages/DocPage'))

export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/docs/intro', element: <DocPage docName="intro" title="欢迎来到我的网站" /> },
  { path: '/docs/about', element: <DocPage docName="about" title="关于我" /> },
  { path: '/docs/contribution-guide', element: <DocPage docName="CTRL-A 项目贡献指南父爱版" title="CTRL-A 项目贡献指南" format="md" /> },
  { path: '*', element: <div>页面不存在</div> },
]
