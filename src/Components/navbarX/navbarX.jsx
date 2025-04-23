import React, {useEffect, useState} from 'react';
import {Nav} from "react-bootstrap";
import {DeleteItem, GetItem, SetItem} from "../../helpers/persistance-storage";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../slice/auth";

function NavbarX(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [navbarArry, setNavbarArry] = useState([
        "Dashboard", "Mening maktabim", " Mening sinfim", "Kundalik", "Uy vazifasi", "Chatlar"
    ]);
    const removeUser = () => {
        dispatch(logoutUser());
        DeleteItem('token')
        navigate('/login')
    }
    const indexnavbar = (e) => {
        const activeIndex = document.querySelectorAll('.active-navbar')
        for (let i = 0; i < activeIndex.length; i++) {
            activeIndex[i].classList.remove('active-navbar')
        }
        const items = e.target
        items.classList.add('active-navbar');
    }

    const navigatePage = (e) => {
        switch (e.currentTarget.getAttribute('data-key')) {
            case navbarArry[0].replace(/ /g , '') :
                navigate('/dashboard')
                break;
            case navbarArry[1].replace(/ /g , '') :
                navigate('/my-courses')
                break;
            case navbarArry[2].replace(/ /g , '') :
                navigate('/my-class')
                break;
            case navbarArry[3].replace(/ /g , '') :
                navigate('/my-daily')
                break;
            case navbarArry[4].replace(/ /g , '') :
                navigate('/my-home-work')
                break;
            case navbarArry[5].replace(/ /g , '') :
                navigate('/my-chat')
                break;

        }

        console.log(e.currentTarget.getAttribute('data-key'));
    }


    useEffect(() => {
        const index = document.querySelectorAll('.navbar-link')
        index[GetItem('navbarIndex')].classList.add('active-navbar')
    }, [])


    return (
        <div className={'navbar-x'}>
            <div className={'navbar-header'}>
                <h5 className="mb-4">BoundaryAi 🚀</h5>
                {
                    navbarArry.map((item, index) => {
                        return (
                            <div className={'navbar-item'} key={index}>
                                <div key={item.replace(/ /g, '')} data-key={item.replace(/ /g, '')} onClick={(e) => {
                                    indexnavbar(e)
                                    SetItem('navbarIndex', index)
                                    navigatePage(e)
                                }}
                                     className={'navbar-link'}>{item}</div>
                            </div>

                        )
                    })
                }
            </div>
            <div onClick={removeUser} className={'navbar-close'}>Chiqish</div>
        </div>
    );
}

export default NavbarX;