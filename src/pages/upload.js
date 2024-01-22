import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Upload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Drag & drop an image file here, or click to select one</p>
      </div>

      {uploadedFile && (
        <div>
          <p>Uploaded File:</p>
          <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded" style={imageStyles} />
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

const imageStyles = {
  maxWidth: '100%',
  maxHeight: '300px',
  marginTop: '20px',
};

export default Upload;
