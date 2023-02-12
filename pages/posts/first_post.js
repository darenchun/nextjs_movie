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
    /* states */
    const [vidUrl, setUrl] = React.useState("");
    const [vidDownSite, setDownSite] = React.useState([]);
    
    /* state handlers with javascript */
    // inputbox text saving
    const handleURLInput = (event) => { setUrl(event.target.value) }

    // makes, sends, redirects according to input
    const handleClick = () => {
        setDownSite(() => {
            const str = vidUrl; // get what user wrote in input box
            const target = "youtube"; // finds 1st appearance of youtube
            const replacement = "youtubepp"; // replace that word
            const index = str.indexOf(target);
            if (index !== -1) {
                const firstPart = str.substring(0, index);
                const secondPart = str.substring(index + target.length);
                const newStr = firstPart + replacement + secondPart;
                setDownSite(newStr); // set download site url
                function openInNewTab(newStr) { 
                    const a = document.createElement('a'); 
                    a.href = newStr; 
                    a.target = "_blank"; 
                    a.rel = "noopener noreferrer"; 
                    a.click(); 
                }
                openInNewTab();
            } else {
            }

        })
    };
   
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            <input type="text" value={vidUrl} onChange={handleURLInput} />
            <button onClick={() => {
                handleClick();
            }}>get vids!!</button>
            <p>{vidDownSite}</p>

        </>
    );
}