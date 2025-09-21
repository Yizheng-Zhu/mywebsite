// 文档专用布局组件
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

interface DocLayoutProps {
  children: React.ReactNode
  title: string
}

export default function DocLayout({ children, title }: DocLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [isDocSection, setIsDocSection] = useState(false)

  useEffect(() => {
    // 根据当前路径判断是文档区域还是个人介绍区域
    // 浏览文档(contribution-guide)和了解我(intro, about)的区分
    setIsDocSection(location.pathname.includes('contribution-guide'))
  }, [location.pathname])

  // 处理导航点击，确保页面能够自动刷新
  const handleNavigation = (path: string) => {
    // 使用replace方法强制替换当前历史记录，确保页面完全重新加载
    navigate(path, { replace: true })
  }

  return (
    <div style={{
      display: 'flex',
      gap: '24px',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '24px'
    }}>
      {/* 文档侧边栏 */}
      <aside style={{
        width: '200px',
        flexShrink: 0,
        position: 'sticky',
        top: '24px',
        alignSelf: 'flex-start',
        maxHeight: 'calc(100vh - 48px)',
        overflowY: 'auto'
      }}>
        <h3 style={{ marginBottom: '16px' }}>{isDocSection ? '文档导航' : '个人导航'}</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {/* 根据区域显示不同的导航链接 */}
          {isDocSection ? (
            // 文档区域导航 - 浏览文档后显示
            <>
              <li style={{ marginBottom: '12px' }}>
                <button 
                  onClick={() => handleNavigation('/docs/contribution-guide')}
                  style={{
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    color: title === 'CTRL-A 项目贡献指南' ? '#1677ff' : '#333',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '0',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  项目贡献指南
                </button>
              </li>
              {/* 未来可以在这里添加更多文档链接 */}
            </>
          ) : (
            // 个人介绍区域导航 - 了解我后显示
            <>
              <li style={{ marginBottom: '12px' }}>
                <button 
                  onClick={() => handleNavigation('/docs/intro')}
                  style={{
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    color: title === '欢迎来到我的网站' ? '#1677ff' : '#333',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '0',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  介绍
                </button>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <button 
                  onClick={() => handleNavigation('/docs/about')}
                  style={{
                    background: 'none',
                    border: 'none',
                    textDecoration: 'none',
                    color: title === '关于我' ? '#1677ff' : '#333',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '0',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  关于我
                </button>
              </li>
            </>
          )}
        </ul>
      </aside>
      
      {/* 文档内容区 */}
      <main style={{ flex: 1, minWidth: 0 }}>
        <div style={{ marginBottom: '32px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#666', marginBottom: '16px', display: 'inline-block' }}>
            ← 返回首页
          </Link>
        </div>
        {children}
      </main>
    </div>
  )
}