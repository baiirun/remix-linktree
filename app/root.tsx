import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';
import tailwind from './stlyes/tailwind.css';

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'New Remix App',
    viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: tailwind }];

export default function App() {
    return (
        <html lang='en'>
            <head>
                <Meta />
                <Links />
            </head>
            <body
                style={{
                    margin: 'auto',
                    maxWidth: '70ch',
                    padding: '2ch',
                }}
            >
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
