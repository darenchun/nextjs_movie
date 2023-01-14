import Link from 'next/link';
import Image from 'next/image';

const MyImage = () => (
    <Image
        src="/images/screenshot_01.png"
        height={144}
        width={144}
        alt="Your name" />
);



export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <img src="/images/screenshot_01.png" alt="your name" />
            <MyImage/>
        </>
    );

}