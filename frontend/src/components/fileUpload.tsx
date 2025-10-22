import { useState } from 'react'
import type { ChangeEvent } from 'react'
import axios from 'axios'

type UploadStatus = "idle" | "uploading" | "success" | "error";

export default function fileUpload() {
    const [file,setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<UploadStatus>("idle");

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    async function handleFileUpload() {
        if (!file) return;
        setStatus("uploading");

        const formData = new FormData();
        formData.append('file',file);

        try {
            await axios.post("https://httpbin.org/post", formData, { headers:{
                'Content-Type':'multipart/form-data',
            },
        });
        setStatus("success");
        } catch {
            setStatus('error');
        };
    }

    return (
        <div className="space-y-2">
            <input type="file" onChange={handleFileChange} />
            {file && (
                <div className="mb-4 text-sm">
                    <p>File name: {file.name}</p>
                    <p>Size: {(file.size/1024).toFixed(2)} KB</p>
                    <p>Type: {file.type}</p>
                </div>
            )}
            {file && status !== "uploading" && <button onClick={handleFileUpload}>Upload</button>}
            {status === 'success' && (
                <p>File Uploaded Successfully!</p>
            )}
            {status === 'error' && (
                <p>Upload Fails. ERROR!</p>
            )}
        </div>
    )
}