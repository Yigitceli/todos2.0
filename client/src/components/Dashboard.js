import React from 'react'
import './Dashboard.css';
import Sidebar from './Sidebar';
import Todos from './Todos';

export default function Dashboard() {
    return (
        <div className='dashboard d-flex py-3'>
            <Sidebar/>
            <Todos/>
        </div>
    )
}
