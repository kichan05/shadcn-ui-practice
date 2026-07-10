import {useEffect, useRef, useState} from "react";

export const useElementSize = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if(!ref.current) return

        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setWidth(entry.contentRect.width)
                setHeight(entry.contentRect.height)
            }
        })

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return [ref, width, height]
}