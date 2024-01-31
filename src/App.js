import React from 'react'
import {Navbar,Homepage,Exchanges,Cryptocurrencies,CryptoDetails,News} from './components'
import './App.css'
import Layout from 'antd/es/layout/layout'
import {Routes,Link,Route} from 'react-router-dom'
import Typography from 'antd/es/typography/Typography'
import { Space } from 'antd'

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
        <Navbar/>
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='/exchanges' element={<Exchanges/>}/>
                        <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                        <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
                        <Route path='/news' element={<News/>}/>
                    </Routes>
                </div>
            </Layout>
        <div className='footer'>
            <Typography.Title level={5} style={{
                color:'white',textAlign:'center'
                }}>
                CryptoVerse<br/>
                all rights reserved
            </Typography.Title>
            <Space>
                <Link to='/'>
                    Home
                </Link>
                
                <Link to='/exchanges'>
                Exchanges
                </Link>
                
                <Link to='/news'>
                News
                </Link>
            </Space>
        </div>
      </div>  
    </div>
  )
}

export default App