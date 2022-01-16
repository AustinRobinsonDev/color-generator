import {useState, useEffect} from 'react'
import rgbToHex from '../hooks/utils';

const SingleColor = ({rgb, weight, index}) => {
    const [alert, setAlert] = useState(false)
    const background = rgb.join(',')
    const hex = rgbToHex(...rgb)
    const copyToClip = () => {
        setAlert(true)
        navigator.clipboard.writeText(hex)
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 2000)
    }, [alert])

    return (
        <article onClick={copyToClip} className={`single-color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${background})`}}>
            <h2>{weight}%</h2>
            <h4>{hex}</h4>
            {alert && <p className='alert'>Copied to clipboard!</p>}
        </article>
    )
}

export default SingleColor
