// src/pages/Home.tsx
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>我的个人网站</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#666' }}>
        React + Vite + TypeScript + MDX 构建的现代网站
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
        <Link 
          to="/docs/intro" 
          style={{
            padding: '12px 24px',
            backgroundColor: '#1677ff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0958d9'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1677ff'}
        >
          浏览文档
        </Link>
        
        <Link 
          to="/docs/about" 
          style={{
            padding: '12px 24px',
            backgroundColor: '#f0f0f0',
            color: '#333',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
        >
          了解我
        </Link>
      </div>
      
      <div style={{ marginTop: '80px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
        <h3 style={{ marginBottom: '16px' }}>项目特点</h3>
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
          <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#1677ff' }}>•</span>
            基于React 19和TypeScript的现代前端开发
          </li>
          <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#1677ff' }}>•</span>
            Vite提供的极速开发体验和构建优化
          </li>
          <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#1677ff' }}>•</span>
            MDX支持，轻松编写富文本文档
          </li>
          <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#1677ff' }}>•</span>
            React Router实现的客户端路由
          </li>
        </ul>
      </div>
    </div>
  )
}
