import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from 'axios';
import { baseUrl } from '../../API/Api';
import { newContext } from '../../App';

function DocumentTable() {
  const { token, setTocken } = useContext(newContext)

    const handleUpdate=async(id)=>{
        try{
        const response = await axios.put(`${baseUrl}api/admin/tool-documents/${id}`)
        } catch(err){
            console.log(err);
        }
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No</th>
                    <th>File Title</th>
                    <th>Sort Order</th>
                    <th>Download</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td ><MdOutlineDelete/></td>
                    <td onClick={handleUpdate}><CiEdit/></td>
                </tr>

            </tbody>
        </Table>
    )
}

export default DocumentTable