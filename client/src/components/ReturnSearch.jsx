import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import People from "./People";
import Planets from "./Planets";
import Starships from "./StarShips";
import Films from "./Films";

const ReturnSearch = (props) => {
    const { search, id } = useParams();
    const { result, setResult, userSelect } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${search}/${id}`)
            .then(response => { setResult(response.data) })
    }, [])

    const goBack = (e) => {
        setResult([]);
        navigate('/');
    }

    const DetermineRender = () => {
        if(userSelect === 'people'){
            return (
                <People search={search} id={id} result={result} setResult={setResult}/>
            )
        }
        else if(userSelect === 'planets'){
            return (
                <Planets search={search} id={id} result={result} setResult={setResult}/>
            )
        }
        else if(userSelect === 'starships'){
            return (
                <Starships search={search} id={id} result={result} setResult={setResult}/>
            )
        }
        else if(userSelect === 'films'){
            return (
                <Films search={search} id={id} result={result} setResult={setResult}/>
            )
        }
    }

    return (
        <>
            {DetermineRender()}
        </>
    )
}

export default ReturnSearch;