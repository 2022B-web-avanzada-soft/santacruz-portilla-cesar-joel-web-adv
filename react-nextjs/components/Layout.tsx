import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                  crossOrigin="anonymous"></link>
        </Head>
        <header>
            <nav>
                <Link href="/">Homeland</Link> |
                <Link href="/about">About</Link> |{' '}
                <Link href="/a_hola_mundo">Hola mundo</Link> |{' '}
                <Link href="/c_use_state">Use state</Link> |{' '}
                <Link href="/d_hook_custom">Hook custom</Link> |{' '}
                <Link href="/e_use_context">Use context</Link> |{' '}
                <Link href="/f_ejemplo_criptomonedas">Ejemplo Criptomonedas</Link> |{' '}
                <Link href="/users">Users List</Link> |{' '}
                <a href="/api/users">Users API</a>
            </nav>
        </header>
        <div className={'container'}>
            {children}
        </div>
        <footer>
            <hr/>
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
)

export default Layout
