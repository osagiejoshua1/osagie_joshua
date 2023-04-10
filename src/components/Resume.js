
import React, {useState} from "react"
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import CV1 from './CV1.pdf';

const Resume = () => {
    const [numPages, setNumPages] = useState(null)
    const [numSecond, setNumSecond] = useState(null)
    function onDocumentSuccess ({numPages}) {
       setNumPages(numPages)
    }

    function onDocumentSuccess ({numPages}) {
        setNumSecond(numPages)
     }
    return (
        <div style={{display: "", justifyContent: ""}} className="max-w-md mx-auto   md:max-w-4xl">
            <div style={{width:"700px",  border: "3px solid gray", height:"170vh"}}>
                <Document file={CV1} onLoadSuccess ={onDocumentSuccess} A4>
                    {
                        Array(numPages).fill().map(( i)=> (
                            <Page pageNumber={+1}></Page>
                        ))
                    }
                    {
                        <div className="bg-[#fefefe] position relative bottom-[150rem]">
                        
                                <Page pageNumber={+2}></Page>
                         
                        </div>
                        
                    }
                    
                </Document>

            </div>

        </div>
    )

  
    
}

export default Resume;