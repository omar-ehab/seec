'use client';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import { cn, convertToHumanReadableSize } from '@/lib/utils';
import CallIcon from '@/components/icons/UploadIcon';
import PdfIcon from '@/components/icons/colored/PdfIcon';
import { Button } from '@/components/ui/button';
import { Trash2Icon } from 'lucide-react';

interface ImageUploadProps {
  changeFormItem: (image: File | null) => void;
}
const validator = (file: File) => {
  if (file.type === 'application/pdf') {
    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      return {
        code: 'size-too-large',
        message: 'حجم الملف اكبر من 5 ميجا',
      };
    }
  } else {
    return {
      code: 'invalid-file-type',
      message: 'لايتم قبول ملفات بصيغ اخرى غير PDF',
    };
  }
  return null;
};
export default function FileUpload({ changeFormItem }: ImageUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      const error = rejectedFiles[0]?.errors[0];
      setError(error?.message);
    }
    if (acceptedFiles.length > 0) {
      setError(null);
      setSelectedFile(acceptedFiles[0]);
      changeFormItem(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, inputRef, isDragActive } = useDropzone({
    onDrop,
    validator,
  });

  const clearInput = useCallback(() => {
    setSelectedFile(null);
    changeFormItem(null);
  }, []);

  if (selectedFile) {
    return (
      <div
        className={
          'flex items-center justify-between rounded-md border px-6 py-4'
        }
      >
        <div className={'flex items-center gap-2'}>
          <PdfIcon />
          <div className={'flex flex-col gap-1'}>
            <p>{selectedFile.name}</p>
            <p className={'text-sm text-sub_p'}>
              {convertToHumanReadableSize(selectedFile.size)}
            </p>
          </div>
        </div>
        <Button variant={'ghost'} size={'icon'} onClick={clearInput}>
          <Trash2Icon className={'size-5 text-red-700'} />
        </Button>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={cn(
        'flex items-center justify-center overflow-hidden rounded-md border border-[#D7DAD7] bg-white py-5',
        {
          'border-primary': isDragActive,
          'border-red-700': error,
        }
      )}
    >
      <input {...getInputProps()} />
      <div className={'flex flex-col items-center justify-center'}>
        <CallIcon
          className={cn('mb-4 text-sub_p', {
            'text-primary': isDragActive,
            'text-red-700': error,
          })}
        />
        <p
          className={cn('text-sm text-sub_p', {
            'text-primary': isDragActive,
            'text-red-700': error,
          })}
        >
          {error ? error : 'رفع ملف من نوع PDF بحجم اقصاه 5 ميجا'}
        </p>
      </div>
    </div>
  );
}
