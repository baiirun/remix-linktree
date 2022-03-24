import { ActionFunction, Form, redirect } from 'remix';

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();

    // Trick of the trade to turn a formData object into a JS object
    const formDataEntries = Object.fromEntries(formData);

    // Look in your terminal output and not the browser console since
    // `action` is running on the server
    console.log(formDataEntries);

    // TODO: Do validation. You can also do it on the client.
    // TODO: save mapping from link-url to the service-url(s)

    return redirect(`/${formDataEntries['link-url']}`);
};

export default function NewLink() {
    // There's lots of fun stuff you can do with Remix's Form like
    // optimistic UI, Form submission state, etc.
    // https://remix.run/docs/en/v1/api/remix#form
    // https://remix.run/docs/en/v1/api/remix#useformaction

    return (
        <div>
            <h1>Create a new Soniclink</h1>
            <Form method='post'>
                <div>
                    <label htmlFor='link-url'>Soniclink url</label>
                    <div>
                        soniclink.com/
                        <input name='link-url' placeholder='shroud' />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor='service-name'>Service (should probably be a dropdown)</label>
                        <input name='service-name' placeholder='Twitch' />
                    </div>
                    <div>
                        <label htmlFor='service-url'>Service url</label>
                        <input name='service-url' placeholder='twitch.tv/sonicrida' />
                    </div>
                </div>
                <button type='submit'>Create new Soniclink</button>
            </Form>
        </div>
    );
}
