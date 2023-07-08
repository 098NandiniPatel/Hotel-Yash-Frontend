import React from 'react'

const TopSection = ({ name, price }) => {
    return (
        <section className='bg2 first-section' style={{ color: '#606060',display:'flex',justifyContent:'space-between' }}>
            <div><h2>{name}</h2></div>
            <div>
                <h2>₹{price}</h2>
                <p>per night</p>
            </div>

        </section>
    )
}

export default TopSection