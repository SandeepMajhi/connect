import React from 'react'
import "./sidebar.css"

import {Users} from "../../data/DummyData"
import CloseFriend from '../closeFriend/CloseFriend'
import {data} from "../../data/ListData"


export default function Sidebar() {

    const Listcomponent = ()=>{
        return data.map((d)=>(
            <li key={d.id} className="sidebarListItem">
            <d.icon className='sidebarIcon'/>
            <span className="sidebarListItemText">{d.name}</span>
            </li>
    
        ))
    
        
    }

  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
              <Listcomponent/>
                
            </ul>

            <button className='sidebarButton'> Show More</button>
            <hr className='sidebarHr'/>
            <ul className="sidebarFriendList">
              {
                Users.map((u)=>(
                    <CloseFriend  key ={u.id} user={u}/>

                ))
              }  
            </ul>
        </div>
    </div>
  )
}
