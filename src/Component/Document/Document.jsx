import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import DocumentTable from './DocumentTable'
import './Document.css'
import { baseUrl } from '../../API/Api'
import { newContext } from '../../App'

function Document() {
  const { token, setTocken } = useContext(newContext)

    useEffect(() => {
        handleData()
    }, [])
    const handleData = async () => {
        try {
            const response = await axios.get(`${baseUrl}api/admin/tool-documents`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
    const addNewDoc=async()=>{
        try {
            const response = await axios.put(`${baseUrl}/api/admin/tool-documents/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='document-container'>
            <h1>Documents</h1>
            <div className='upload-file'>
                <button className='uplaod' onClick={addNewDoc}>Upload Files</button>
            </div>
            <DocumentTable />
        </div>
    )
}

export default Document