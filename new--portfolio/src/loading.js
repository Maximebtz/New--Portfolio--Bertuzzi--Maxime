import React from 'react';
import ReactLoading  from 'react-loading';
import './index.css';


const Loading = () => (
    <div className='loading'> 
        <ReactLoading
            type='spin'
            color='#EF76FF'
        />
    </div>
)

export default Loading