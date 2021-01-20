import React from 'react'
import Header from '../component/shared/Header'
import Footer from '../component/shared/Footer'

const PageLayout = (props) => {
    const { children } = props

    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}

export default PageLayout;