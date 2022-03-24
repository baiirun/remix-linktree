import { json, LoaderFunction, useLoaderData } from 'remix';

type Service = 'Facebook' | 'Twitter' | 'Instagram' | 'Youtube';

type Link = {
    service: Service;
    url: string;
};

export const loader: LoaderFunction = async ({ params }) => {
    const id = params.id;

    if (!id)
        throw new Response('No id in $id loader', {
            status: 404,
        });

    // TODO: fetch social links from DB based on the id

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
