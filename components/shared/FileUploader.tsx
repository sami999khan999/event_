import { Dispatch, SetStateAction } from "react";

type FileUploadProps = {
  imageUrl: string;
  onFileChange: (value: string) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

const FileUploader = ({
  imageUrl,
  onFileChange,
  setFiles,
}: FileUploadProps) => {
  return (
    <div>
      FileUploader
      <div></div>
    </div>
  );
};

export default FileUploader;
