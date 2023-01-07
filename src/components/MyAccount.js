import React from 'react';

const MyAccount = () => {
    let formData = localStorage.getItem(('formData'))
    console.log(formData)
    return (
        <div> 
           {
            formData
           }   
        </div> 
    );
}

export default MyAccount;
