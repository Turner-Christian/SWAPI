import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Films = (props) => {
    const { result, setResult, search, id } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${search}/${id}`)
            .then(response => { setResult(response.data) })
    }, [])

    const goBack = (e) => {
        setResult([]);
        navigate('/');
    }

    return (
        <>
            {
                result.length === 0 ?
                    <div className="spinner-border mb-5"
                        style={{ width: '3rem', height: '3rem' }} role="status">
                    </div>
                    : null
            }
            <div className="card p-5 rounded bg-success-subtle">
                <h1 className="mb-5"><u><strong>{result.title}</strong></u></h1>
                <p>Episode ID : <strong>{result.episode_id}</strong></p>
                <p>Release Date : <strong>{result.release_date}</strong></p>
            </div>
            <div>
                <button className="btn bg-black text-white mt-5"
                    onClick={goBack}>Go Back</button>
            </div>
        </>
    )
}

export default Films;