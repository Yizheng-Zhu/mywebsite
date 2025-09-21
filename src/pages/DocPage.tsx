// 文档页面组件
import { lazy, Suspense } from 'react'
import DocLayout from '../components/layout/DocLayout'

interface DocPageProps {
  docName: string
  title: string
  // 可选参数，默认为mdx格式
  format?: 'mdx' | 'md'
}

export default function DocPage({ docName, title, format = 'mdx' }: DocPageProps) {
  // 动态导入对应的文档，支持mdx和md格式
  const DocContent = lazy(() => import(`../docs/${docName}.${format}`))
  
  return (
    <DocLayout title={title}>
      <Suspense fallback={<div>文档加载中...</div>}>
        <DocContent />
      </Suspense>
    </DocLayout>
  )
}