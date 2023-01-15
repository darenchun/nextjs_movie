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

const numbering_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



export default function FirstPost() {
    const [likes, setLikes] = React.useState(0);
    const handleClick = () =>{setLikes(likes+1)};

    
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            <button onClick={handleClick}>Likes : ({likes})</button>
        </>
    );

}