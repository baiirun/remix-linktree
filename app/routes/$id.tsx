import { json, LoaderFunction, useLoaderData } from 'remix';

type Service = 'Facebook' | 'Twitter' | 'Instagram' | 'Youtube';

type Link = {
    service: Service;
    url: string;
};

export const loader: LoaderFunction = async ({ params }) => {
    // TS can't be sure that this id actually exists in the URL since params
    // are a dynamic value that contain arbitrary data.
    const id = params.id;

    if (!id)
        // If you throw a reponse with a 404 Remix's CatchBoundary will catch it
        // and render whatever you have in the CatchBoundary.
        // https://remix.run/docs/en/v1/guides/not-found#root-catch-boundary
        // https://remix.run/docs/en/v1/api/conventions#catchboundary
        // If you throw an error, Remix's ErrorBoundary will catch it and render
        //  whatever you have in the ErrorBoundary.
        // https://remix.run/docs/en/v1/guides/errors
        throw new Response('No id in $id loader', {
            status: 404,
        });

    // TODO: fetch social links from DB based on the id
    // TODO: add analytics to click-throughs
    // TODO: some sort of user tracking? How evil do we want to be?

    return json(
        [
            {
                service: 'Github',
                url: 'https://github.com/byronguina',
            },
        ],
        {
            headers: {
                'Cache-Control': 'max-age=60, stale-while-revalidate=86400',
            },
        },
    );
};

export default function LinkTree() {
    const links = useLoaderData<Link[]>();

    return (
        <div>
            {links.map((link) => (
                <a key={link.url} target='_blank' rel='noreferrer' href={link.url}>
                    {link.service}
                </a>
            ))}
        </div>
    );
}
