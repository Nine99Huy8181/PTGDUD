import React from 'react'
import './MainLayout.css'

export default function MainLayout() {
  return (
    <div className='gird-layout'>
        <div className='item1'>
            <div>Dash board</div>
            <div className='header-infor'>
                <input type="text" />
                <span>icon</span>
                <span>icon</span>
                <span>icon</span>
            </div>
        </div>
        <div className='item2'>
            <div className='menu-logo'>Logo</div>
            <div className='menu-bar'>
                <ul>
                    <li><a href="">Dash board</a></li>
                    <li><a href="">Dash board</a></li>
                    <li><a href="">Dash board</a></li>
                    <li><a href="">Dash board</a></li>
                    <li><a href="">Dash board</a></li>
                    <li><a href="">Dash board</a></li>
                </ul>
            </div>
        </div>
        <div className='item3'>
            <div>
                <div>Overview</div>
                <div className='statistic'>
                    <div>Component</div>
                    <div>Component</div>
                    <div>Component</div>
                </div>
            </div>
            <div className='content2'>
                <div className='labelB'>
                    <div >Detail report</div>
                    <div>Export, Import</div>
                </div>
                <div className='table-data'>
                    Table
                </div>
            </div>
        </div>
    </div>
  )
}
