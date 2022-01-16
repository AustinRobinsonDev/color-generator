import {useState} from 'react'
import rgbToHex from '../hooks/utils';

const SingleColor = ({rgb, weight, index}) => {
    const [alert, setAlert] = useState(false)
    const background = rgb.join(',')
    const hex = rgbToHex(...rgb)
    return (
        <article className={`single-color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${background})`}}>
            <h2>{weight}%</h2>
            <h4>{hex}</h4>
        </article>
    )
}

export default SingleColor
