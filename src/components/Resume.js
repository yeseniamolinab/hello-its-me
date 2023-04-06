import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from "@/styles/Resume.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pdfLoaded, setPdfLoaded] = useState(false);
    const [downloadFailed, setDownloadFailed] = useState(false);
    const url = "https://yesimolinadev.s3.amazonaws.com/yesenia-molina-resume.pdf";

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPdfLoaded(true);
    }

    const onDocumentLoadError = () => {
        setPdfLoaded(true);
    }

    const ErrorMessage = () => {
        return (
            <span className={styles.error}>Download failed. Please try again later.</span>
        );
    }

    const handleDownload = async () => {
        try {
            const s3Object = await fetch('/api/s3/yesenia-molina-resume.pdf');
            const reader = s3Object.body.getReader();
            let chunks = [];
            let totalBytes = 0;
            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    break;
                }
                chunks.push(value);
                totalBytes += value.length;
            }
            const blob = new Blob(chunks, { type: 'application/pdf' });
            const objectUrl = URL.createObjectURL(blob);
            window.open(objectUrl, '_blank');
            URL.revokeObjectURL(objectUrl);
        } catch (e) {
            console.error(e);
            setDownloadFailed(true);
        }
    }


    return (
        <section className={styles.resume}>
            <div className={styles.download}>
                {!downloadFailed ? (
                    <a href="#" onClick={handleDownload} className={styles.a} aria-label='Download my resume'>
                        <FontAwesomeIcon icon={faDownload} fixedWidth className={styles.icon} />
                        Download
                    </a>
                ) : (
                    <ErrorMessage />
                )}
            </div>
            <Document file={url} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError} error={ErrorMessage} className={styles.document}>
                {Array.from({ length: numPages }, (_, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        width={900}
                        className={styles.documentPage}
                    />
                ))}
            </Document>
            {!pdfLoaded && (
                <div className={styles.loadingWrapper}>
                    <span className={styles.loading} aria-hidden={true}></span>
                </div>)}

        </section>
    );
}

export default Resume;
