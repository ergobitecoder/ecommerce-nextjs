import React from 'react'

const Loader = () => {
    const arr = [1, 2, 3, 4]
    return (
        <div className='container-fluid'>
            <div className="card">
                { // <div className="card__title loading"></div>
                }
                <div className="card__description loading" style={{ height: "100px" }}></div>
                <div className="card__description loading" style={{ height: "250px", background: "rgba(0,0,0, .2)" }}></div>
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
                <div className="card__description loading" style={{ height: "100px" }}></div>
            </div>
        </div>
    )
}

export default Loader;