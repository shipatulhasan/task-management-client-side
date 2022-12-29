import { useState } from 'react';

export const usePreview = () => {
    const [preview,setPreview] = useState('')
    const handleChange = (image)=>{
        setPreview(window.URL.createObjectURL(image))
    }   
      return [preview,handleChange]
};

