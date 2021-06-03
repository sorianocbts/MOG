import React from 'react'
import Head from "next/head"
import { ToastContainer, Slide } from 'react-toastify'
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Head>
                <title>Man of God Network</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Man of God Network" />
                <meta name="og:title" property="og:title" content="Man of God Network"></meta>
                <meta name="twitter:card" content="Man of God Network"></meta>
                <link rel="canonical" href="https://manofgodnetwork.com"></link>
                <meta property="og:image" content="https://manofgodnetwork.com" />
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
            <ToastContainer transition={Slide} />
        </React.Fragment>
    );
}

export default Layout;