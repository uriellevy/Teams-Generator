import React, { useRef, useEffect } from 'react';

const UseOutsideClick = (callback: any) => {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClick = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
                // callback = setIsSettingsWindowOpen((prevState) => prevState = false)
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])
    return ref;


};

export default UseOutsideClick