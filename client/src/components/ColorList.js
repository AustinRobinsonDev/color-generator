import React from 'react'
import SingleColor from './SingleColor';

const ColorList = ({list}) => {
    return (
        <div className='color-list'>
            {list.map((item, index) => (
                <SingleColor key={index} index={index} {...item}/>
            ))}
        </div>
    )
}

export default ColorList;
