import React from 'react'

const LoaderElement = () => {
    const arr = [1, 2, 3, 4]
    return (
        <div className='container-fluid'>
            <div className="card">
                <div className='contaner'>
                    <div className="card-loading">
                        {arr.map((elem, i) => <div key={i} className="card__image loading mt-4"></div>)}
                    </div>
                </div>
                <div className='contaner' style={{ marginTop: '40px' }}>
                    <div className="card-loading">
                        {arr.map((elem, i) => <div key={i} className="card__image loading mt-4"></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoaderElement;