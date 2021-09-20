import React from 'react'

import './page.css'

const Page = ({ className, children }) => (
    <div className='page'>
        <div className={`inner-content ${className}` }>
            {children}
        </div>
    </div>
)

export default Page 
