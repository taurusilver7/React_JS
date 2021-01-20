import React from 'react';
import rgb2Hex from "./utilty";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hex = `#${hexColor}`;
    useEffect(() => {
        const timeot = setTimeout(() => {
            setAlert(false);
        }, 3000)
        return () => {
            clearTimeout(timeot);
        }
    }, [alert])
    return (
        <article  
        className={`color ${index>10 && 'color-light'}`} 
        style={{ backgroundColor= `rgb(${bcg})` }}
        onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hex)
            }}>
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>#{hex}</p>
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    )
};

export default SingleColor;