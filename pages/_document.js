import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {

        let GA_TRACKING_ID = `G-6ZHRNJMSDB`
        return (
            <Html lang="zxx">
                <Head>
                    <link rel="icon" type="image/png" href="/img/banner/moglogo.png"></link>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;