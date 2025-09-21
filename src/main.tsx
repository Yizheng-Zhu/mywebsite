// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 或改成 HashRouter
import { MDXProvider } from '@mdx-js/react'
import App from './App'

// 可选：自定义 MDX 组件映射（统一样式）
const mdxComponents = {
  h1: (props: any) => <h1 style={{ fontSize: 28, margin: '1.2em 0 0.6em' }} {...props} />,
  h2: (props: any) => <h2 style={{ fontSize: 22, margin: '1.1em 0 0.5em' }} {...props} />,
  a:  (props: any) => <a style={{ textDecoration: 'underline' }} {...props} />,
  // 还可以映射 code、pre、img 等
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* 若用 HashRouter，就改这里 */}
      <MDXProvider components={mdxComponents}>
        <App />
      </MDXProvider>
    </BrowserRouter>
  </React.StrictMode>
)
