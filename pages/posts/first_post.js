import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
const MyImage = () => (
    <Image
        src="/images/screenshot_01.png"
        height={144}
        width={144}
        alt="Your name" />
);
export default function FirstPost() {
    const [likes, setLikes] = React.useState(0);
    const [bads, setBads] = React.useState(0);
    const handleLikeClick = () => { setLikes(likes + 1) };
    const handleBadClick = () => { setBads(bads + 1); };

    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br/>
            <button onClick={handleLikeClick}>Likes : ({likes})</button>
            <button onClick={handleBadClick}>bads : ({bads})</button>
        </>
    );
}