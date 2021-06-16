import React, {useState} from 'react';
import { Document, Page  } from 'react-pdf';
import resume from '../resources/RyanTavcarResume.pdf';

function Resume() {

    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess() {
        setNumPages(1);
    }

    return (
        <div>
            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={numPages} />
            </Document>

        </div>
    )
}

export default Resume
