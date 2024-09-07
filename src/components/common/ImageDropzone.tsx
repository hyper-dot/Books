import { Camera, Trash2, Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

interface ImageDropzoneProps {
  children: React.ReactNode;
  onImageUpload: (url: string | null) => void;
}

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  children,
  onImageUpload,
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      // Simulating cloud upload
      const uploadedUrl = await simulateCloudUpload(file);
      setPreviewImage(URL.createObjectURL(file));
      onImageUpload(uploadedUrl);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
  });

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewImage(null);
    onImageUpload(null);
  };

  // Simulated cloud upload function
  const simulateCloudUpload = async (file: File): Promise<string> => {
    // In a real scenario, this would be an API call to upload the file
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`https://fake-cloud-storage.com/${file.name}`);
      }, 1000);
    });
  };

  return (
    <div
      {...getRootProps()}
      className="h-full w-full flex flex-col items-center justify-center relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <input {...getInputProps()} />
      {previewImage ? (
        <>
          <Image
            src={previewImage}
            alt="Preview"
            width={400}
            height={400}
            objectFit="cover"
            className="w-full h-full object-cover"
          />
          {isHovering && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white/20 p-2 rounded-full">
                <Camera className="text-white h-5 w-5" />
              </div>
            </div>
          )}
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemoveImage}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </>
      ) : isDragActive ? (
        <div className="flex flex-col items-center">
          <Upload className="mb-2" />
          <p>Drop the image here</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
};
