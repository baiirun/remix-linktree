import { Link } from 'remix';

export default function Index() {
    return (
        <div>
            Go to a url to load a LinkTree. Try it out! <Link to='/byronguina'>byronguina</Link>
        </div>
    );
}
