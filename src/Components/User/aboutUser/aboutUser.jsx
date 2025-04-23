import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import AuthService from "../../../service/auth";
import {LoadingSpinner} from "../../index";
import {Button} from "react-bootstrap";

function AboutUser(props) {
    const {id} = useParams();
    const [user , setUser] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();



    useEffect(() => {
        const getIDUser =async ()=>{
            try {
                const {data} = await AuthService.getAllUsers()
                const userId = data.find((u) => u._id === id);
                setUser(userId)
                setLoading(true)
                console.log(userId)
            }catch (error) {
                console.log(error);
            }
        }
        getIDUser();
        // setLoading(false);
    } , [])



    return (

        <>
            {loading ? <div className="wrapper-right">
                <div style={{background:"white" , borderRadius:'10px'}} className="d-flex align-items-center justify-content-between  p-3">
                    <div  className={'d-flex align-items-center justify-content-start gap-3'}>
                        <img
                            src={user.image}
                            alt={user.username}
                            className="w-32 h-32 rounded-full object-cover  "
                            style={{width: '150px', height: '150px', borderRadius: '15px'}}
                        />
                        <div>
                            <h2 className="text-2xl font-bold">{user.first_name} {user.last_name}</h2>
                            <p className="text-gray-500">{user.title} • {user.specialization}</p>
                            <p className="text-sm text-gray-400">{user.role}</p>
                        </div>
                    </div>
                    <div>
                        <Button onClick={()=> navigate('/my-courses')} variant={'outline-primary'} className={'btn-color'}>orqaga</Button>
                    </div>
                </div>
                <div style={{background:"white" , borderRadius:'10px'}} className=" mt-3 p-3">
                    <table className="table table-striped    table-bordered">
                        <tbody>
                        <tr>
                            <td className={'w-25'}>User name</td>
                            <td>{user.username}</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}>Full name</td>
                            <td>{user.first_name} {user.last_name} {user.middle_name}</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}>Address</td>
                            <td>{user.address}</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}>Birth date  </td>
                            <td>{new Date(user.birth_date).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}>Degree  </td>
                            <td>{user.degree}</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}>Email </td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}>Gender </td>
                            <td>{user.gender}</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}>Rating book</td>
                            <td>{user.rating_book}</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}>Role</td>
                            <td>{user.role}</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}>Specialization</td>
                            <td>{user.specialization}</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}>Title</td>
                            <td>{user.title}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div> : <LoadingSpinner/>}

        </>
    );
}

export default AboutUser;