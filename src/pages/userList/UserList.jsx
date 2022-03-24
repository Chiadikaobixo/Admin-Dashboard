import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material'
import { userRows } from '../../userData';
import { Link } from 'react-router-dom'
import './userList.css'


const UserList = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: ' User', width: 200, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img className='userListImg' src={params.row.avatar} alt='chiadi' />
                        {params.row.userName}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 150
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        <Link to={'/user/' + params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline 
                        className='userListDelete' 
                        onClick={() => handleDelete(params.row.id)}
                        />
                    </div>
                )
            }
        }
    ];


    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={4}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default UserList