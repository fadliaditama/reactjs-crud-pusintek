import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const AnggaranList = () => {
    const [anggaran, setAnggaran] = useState([]);

    useEffect(() => {
        fecthData();
    },[]);

    const fecthData = async() =>{
        const response = await fetch('http://localhost:8080/anggaran');
        const data = await response.json();
        setAnggaran(data);
    }

    const deleteAnggaran = async(id) => {
        await fetch(`http://localhost:8080/anggaran/${id}`, {
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        });
        fecthData();
        alert("Data telah terhapus");
    }
  return (
    <div className='container mx-auto py-10'>
    <div className='pb-2'>
        <Link to='/add-anggaran' className='bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded'>Tambah Data</Link>
    </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-white uppercase bg-black ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nama Anggaran
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Penanggung Jawab
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Jumlah Anggaran
                        </th>
                        <th scope="col" className="text-right px-12">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                { anggaran.map((anggaran,index) =>(
                    <tr className="bg-slate-800 text-white border-b hover:bg-gray-700" key={anggaran.id}>
                        <td className="px-6 py-3">
                            { index + 1 }
                        </td>
                        <td className='px-6 py-4'>
                            {anggaran.nama_anggaran}
                        </td>
                        <td className="px-6 py-4">
                            {anggaran.penanggung_jawab}
                        </td>
                        <td className="px-6 py-4">
                            {anggaran.jumlah_anggaran}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <Link to={`edit-anggaran/${anggaran.id}`} className="font-medium text-blue-600 hover:underline px-5">Edit</Link>
                            <button onClick={ () => deleteAnggaran(anggaran.id) } className="font-medium text-red-600 hover:underline">Hapus</button>
                        </td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AnggaranList