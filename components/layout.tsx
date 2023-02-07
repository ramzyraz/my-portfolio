import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return ( 
        <div>
            <Head>
                <title>Ramez Salman</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Ramez's homepage" />
                <meta name="author" content="Ramez Salman" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            {children}
        </div>
     );
}
 
export default Layout;