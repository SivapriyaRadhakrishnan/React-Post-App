import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
    const[data,setData]=useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])


    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value,index)=>{
                                        return <tr>
                                        <th scope="row">{value.userId}</th>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                        <td>{value.body}</td>
                                    </tr>
                                    }
                                )}
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View