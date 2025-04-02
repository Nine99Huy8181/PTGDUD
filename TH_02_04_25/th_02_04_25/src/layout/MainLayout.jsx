import React from 'react'
import './MainLayout.css'
import Statistic from '../Components/Statistic'

export default function MainLayout() {
  return (
    <div className='gird-layout'>
        <div className='item1'>
            <div className='label-dashboard'>Dash board</div>
            <div className='header-infor'>
                <div style={{marginRight: "20px"}}><input type="text" /></div>
                <div>
                    <img src="../images/Bell 1.png" alt="" />
                    <img src="../images/Question 1.png" alt="" />
                    <img src="../images/Avatar (1).png" alt="" />
                </div>
            </div>
        </div>
        <div className='item2'>
            <div className='menu-logo'>
                <img src="../images/Image 1858.png" alt="" />
            </div>
            <div className='menu-bar'>
                <ul>
                    <li><img src="../images/Folder.png" alt="" /> <a href="">Dash board</a></li>
                    <li><img src="../images/Groups.png" alt="" /> <a href="">Dash board</a></li>
                    <li><img src="../images/Pie chart.png" alt="" /> <a href="">Dash board</a></li>
                    <li><img src="../images/Chat.png" alt="" /> <a href="">Dash board</a></li>
                    <li><img src="../images/Code.png" alt="" /> <a href="">Dash board</a></li>
                </ul>
            </div>
        </div>
        <div className='item3'>
            <div>
                <div className='overview'><img src="../images/Squares four 1.png" alt="" /> <span>Overview</span></div>
                <div className='statistic'>
                    <Statistic></Statistic>
                    <Statistic></Statistic>
                    <Statistic></Statistic>
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
