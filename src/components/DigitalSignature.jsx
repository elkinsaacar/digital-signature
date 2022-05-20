/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import SignatureCanvas from 'react-signature-canvas';
import Pdf from "react-to-pdf";
import { getBrowserWidth, getBrowserSize } from './helpers/utils';
import siteProperties from './properties/site';

const refPDF = React.createRef();

const DigitalSignature = () => {

    const browserSize = getBrowserSize(getBrowserWidth(), siteProperties.breakpoints);

    const [trimmedDataURL, setTrimmedDataURL] = useState('');
    let signaturePad = {};
    const [generarPDF, setGenerarPDF] = useState(false);

    const trimSignature = () => {
        setTrimmedDataURL( signaturePad.getTrimmedCanvas().toDataURL('image/png') );
    }

    const resetSignature = () => {
        signaturePad.clear();
        setTrimmedDataURL('');
    }

    const stylesButtonTrim = {
        width: '50%',
        height: '30px',
    };

    const stylesButtonRestore = {
        width: '50%',
        height: '30px',
    };

    const stylesImageTrim = {
        backgroundSize: '200px 50px',
        width: '200px',
        height: '50px',
        backgroundColor: 'white',
        border: '1px solid #000000',
    };

    const createPDF = () => { setGenerarPDF(true); }
    const restoreForm = () => { setGenerarPDF(false); }

    const stylesDivPDF = {
        maxWidth: '800px', 
        width: '100%',
        display: 'table',
        margin: '0 auto',
        padding: '20px 50px'
    };

    return(
        <>
            {/* --browserSize--{browserSize}-- */}
            { !generarPDF ?
                    (
                        <>
                            <br/><div>Acá registre su firma</div><br/>
                            <SignatureCanvas penColor='red'  
                                canvasProps={{width: 500, height: 200, style:{ border: '1px solid #000000'} }} 
                                ref={(ref) => { signaturePad = ref }} />
                            <br/><br/>
                            <button style={stylesButtonTrim} onClick={trimSignature}> Obtener Firma </button>
                            <br/><br/>
                            <button style={stylesButtonRestore} onClick={resetSignature}> Restaurar Firma </button>
                            <br/><br/>
                            {trimmedDataURL ? <>
                                                <img style={stylesImageTrim} src={trimmedDataURL} />
                                                <br/><br/>
                                                <button style={stylesButtonRestore} onClick={createPDF}> Vista previa PDF </button>
                                            </> : null}

                            
                            <br/><br/>
                        </>
                    )
                :
                <>
                    <div ref={refPDF} style={stylesDivPDF} >
                        ACA VA LO QUE SEA DEL PDF
                        <br/><br/>
                        {trimmedDataURL ? <img style={stylesImageTrim} src={trimmedDataURL} /> : null}
                        <br/><br/>
                    </div>
                    <br/><br/>
                    <button style={stylesButtonRestore} onClick={restoreForm}> Regresar </button>
                    <br/><br/>
                    <Pdf targetRef={refPDF} filename="post.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>Generar PDF</button>}
                    </Pdf>
                </>
            }
        </>
    )
};

export default DigitalSignature;