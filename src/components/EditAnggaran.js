import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditAnggaran = () => {
    const [nama_anggaran, setNamaAnggaran] = useState('');
    const [penanggung_jawab, setPenanggungJawab] = useState('');
    const [jumlah_anggaran, setJumlahAnggaran] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() =>{
        getAnggaranById();
    }, []);

    const getAnggaranById = async() => {
        const response = await fetch(`http://localhost:8080/anggaran/${id}`);
        const data = await response.json();
        setNamaAnggaran(data.nama_anggaran);
        setPenanggungJawab(data.penanggung_jawab);
        setJumlahAnggaran(data.jumlah_anggaran);
    }

    const saveAnggaran = async (e) =>{
        e.preventDefault();
        const anggaran = { nama_anggaran, penanggung_jawab, jumlah_anggaran };
        await fetch(`http://localhost:8080/anggaran/${id}`, {
            method: "PUT",
            body: JSON.stringify(anggaran),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        navigate("/list-anggaran");
        alert("Data berhasil diubah!");
    }

  return (
    <div className='container mx-auto'>
        <form onSubmit={ saveAnggaran }>
            <div className="grid xl:grid-cols-2 xl:gap-6 pt-10">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="nama_anggaran" id="nama_anggaran" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={nama_anggaran} onChange={ (e) => setNamaAnggaran(e.target.value) } required />
                    <label htmlFor="nama_anggaran" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Anggaran</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="penanggung_jawab" id="penanggung_jawab" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={penanggung_jawab} onChange={ (e) => setPenanggungJawab(e.target.value) } required />
                    <label htmlFor="penanggung_jawab" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Penanggung Jawab</label>
                </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="jumlah_anggaran" id="jumlah_anggaran" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={jumlah_anggaran} onChange={ (e) => setJumlahAnggaran(e.target.value) } required />
                    <label htmlFor="jumlah_anggaran" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jumlah Anggaran</label>
                </div>
            </div>
            <button className='text-white bg-blue-700 rounded px-2 py-2 m-1'>Update Data</button>
            <Link to="/list-anggaran" className='text-white bg-yellow-500 rounded px-2 py-2 inline-block'>Kembali</Link>
        </form>
    </div>
  )
}

export default EditAnggaran