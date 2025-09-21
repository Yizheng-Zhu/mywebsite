import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import Layout from './components/Layout'
import { Suspense } from 'react'

export default function App() {
  const element = useRoutes(routes)
  return (
    <Layout>
      {/* 导航同上 */}
      <Suspense fallback={<div>加载中…</div>}>{element}</Suspense>
    </Layout>
  )
}
