import React from 'react'
import Head from "next/head"
import { ToastContainer, Slide } from 'react-toastify'
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Head>
                <title>Confessing the Faith</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Confessing the Faith" />
                <meta name="og:title" property="og:title" content="Confessing the Faith"></meta>
                <meta name="twitter:card" content="Confessing the Faith"></meta>
                <link rel="canonical" href="https://confessingthefaith.com"></link>
                <meta property="og:image" content="https://confessingthefaith.com" />
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
            <ToastContainer transition={Slide} />
        </React.Fragment>
    );
}

export default Layout;