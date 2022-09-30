import React from 'react'
import { ProgressBar } from 'react-bootstrap'
                                                                                                                                                                                                                                        


export default function Progresbar(props) {

    


    return (
        <>
        {props.inView ? (
            <div >
                <h4>{props.stack}</h4>
                <ProgressBar>
                   <ProgressBar now={props.progress} style={{width:props.progress + "%", transition: "width 2s"}} label={props.progress + "%"} visuallyHidden/> 
                </ProgressBar>
                
            </div>
          ) : (
            <div >
                <h4>{props.stack}</h4>
                <ProgressBar>
                    <ProgressBar now={props.progress} style={{width: "0%"}} label={props.progress + "%"} visuallyHidden/>
                </ProgressBar>
               
            </div>
          )}
        </>
    )
}

