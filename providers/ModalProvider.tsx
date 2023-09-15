"use client";

import Modal from "@/Components/Modal";
import {useEffect, useState} from "react";

const ModalProvider = () => {
    const [isMounted,setIsMounted] = useState(false);

    useEffect(() =>{
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null; //prevents the modal to be rendered before it is mounted.
    }

    return ( 
        <>
        <Modal title ="Test Modal" description = "Test Description" isOpen onChange ={()=>{}}>
            Test Children
        </Modal>

        </>
     );
}
 
export default ModalProvider;