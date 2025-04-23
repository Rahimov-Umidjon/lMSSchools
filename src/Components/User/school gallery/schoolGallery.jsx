import React, {useEffect, useState} from 'react';
import AuthService from "../../../service/auth";
import {LoadingSpinner} from "../../index";

function SchoolGallery(props) {

    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState();

    useEffect(() => {
        const getSchoolGallery = async () => {

            try {
                const response = await AuthService.getSchoolGallery();
                console.log(response);
                setImages(response.data);
                setLoading(true);
            } catch (error) {
                console.error(error);
            }
        }
        getSchoolGallery();
    }, [])

    return (
        <div>
            {loading ? <div>{
                images.map((image, i) => (
                    <div key={i}><img src={image.image} alt="qwer"/></div>
                ))
            } </div> : <LoadingSpinner/>}
        </div>
    );
}

export default SchoolGallery;