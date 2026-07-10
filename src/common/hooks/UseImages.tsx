import {ChangeEvent, useEffect, useRef, useState} from "react";

type ImageItem = { id: number, file: File, preview: string }

export function useImages() {
    const id = useRef(0)
    const [images, setImages] = useState<ImageItem[]>([])

    useEffect(() => {
        return () => {
            images.forEach((image) => {
                URL.revokeObjectURL(image.preview);
            })
        }
    }, [images])

    const addImages = (files: File[]) => {
        const newImages : ImageItem[] = files.map(file => {
            const preview = URL.createObjectURL(file);
            return {id: id.current++, file, preview};
        });
        setImages(prev => [...prev, ...newImages]);
    }

    const deleteImage = (imageId: number) => {
        setImages(prev => {
            const imageToDelete = prev.find(image => image.id === imageId);
            if (imageToDelete) {
                URL.revokeObjectURL(imageToDelete.preview);
            }

            return prev.filter(image => image.id !== imageId)
        });
    }

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target;
        addImages(Array.from(files || []));
    }

    return {images, addImages, deleteImage, handleFileSelect};
}