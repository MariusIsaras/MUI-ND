import React from 'react'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material'

const MuiTable = () => {
  return (
    <TableContainer component={Paper}
    sx={{maxHeight:'300px'}}>
        <h2>Tutorial 33 Table</h2>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map((row) => (
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border:0}}}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell align='center'>{row.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MuiTable

const tableData =[
    {
        "id": 1,
        "first_name": "Aurelie",
        "last_name": "Fenkel",
        "email": "afenkel0@ed.gov",
        "gender": "Agender",
        "ip_address": "8.63.153.81"
      }, {
        "id": 2,
        "first_name": "Theo",
        "last_name": "Breacher",
        "email": "tbreacher1@hibu.com",
        "gender": "Male",
        "ip_address": "223.249.10.140"
      }, {
        "id": 3,
        "first_name": "Jannelle",
        "last_name": "Aust",
        "email": "jaust2@archive.org",
        "gender": "Female",
        "ip_address": "203.5.124.207"
      }, {
        "id": 4,
        "first_name": "Cristen",
        "last_name": "Devericks",
        "email": "cdevericks3@hao123.com",
        "gender": "Female",
        "ip_address": "94.178.240.193"
      }, {
        "id": 5,
        "first_name": "Nicolais",
        "last_name": "Varden",
        "email": "nvarden4@dailymotion.com",
        "gender": "Male",
        "ip_address": "184.130.183.182"
      }, {
        "id": 6,
        "first_name": "Martino",
        "last_name": "Fancet",
        "email": "mfancet5@odnoklassniki.ru",
        "gender": "Male",
        "ip_address": "127.235.225.232"
      }, {
        "id": 7,
        "first_name": "Nicolai",
        "last_name": "Acuna",
        "email": "nacuna6@cdc.gov",
        "gender": "Male",
        "ip_address": "242.245.74.245"
      }, {
        "id": 8,
        "first_name": "Karim",
        "last_name": "Search",
        "email": "ksearch7@nyu.edu",
        "gender": "Male",
        "ip_address": "72.191.234.104"
      }, {
        "id": 9,
        "first_name": "Glendon",
        "last_name": "Sallter",
        "email": "gsallter8@blog.com",
        "gender": "Male",
        "ip_address": "114.154.217.159"
      }, {
        "id": 10,
        "first_name": "Whitney",
        "last_name": "Andrivel",
        "email": "wandrivel9@cafepress.com",
        "gender": "Male",
        "ip_address": "116.95.73.24"
      }
      
]
