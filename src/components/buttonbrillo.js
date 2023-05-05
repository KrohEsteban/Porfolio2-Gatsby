import React from 'react'
import {sinbrillo, brillo} from '../styles/index.module.css'
import { Button } from 'react-bootstrap'



export default function Butonbrillo(props) {



    return (
        <>
        {props.inView ? (
            <Button className={brillo}><div dangerouslySetInnerHTML={{ __html: props.texto }}/></Button>
          ) : (
            <Button className={sinbrillo}><div dangerouslySetInnerHTML={{ __html: props.texto }}/></Button>
          )}
        </>
    )
}