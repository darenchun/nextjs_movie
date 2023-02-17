import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function FirstPost() {
    /* etc functions for use */
    // additional function to open a new tab in browser with new url : basically just making a new tab click of 'a' tag.
    function openInNewTab(newStr) {
        const a = document.createElement('a');
        a.href = newStr;
        a.target = "_blank"; // new tab.
        a.rel = "noopener noreferrer"; //security reasons
        a.click();
    }


    /* states */
    const [vidUrl, setUrl] = React.useState("");
    const [vidDownSite, setDownSite] = React.useState([]);
    const [bool_, setBool_] = React.useState(false);

    /* state handlers with javascript */
    // inputbox text saving
    const handleURLInput = (event) => { setUrl(event.target.value) }

    // makes, sends, redirects according to input.
    const handleClick = () => {
        setDownSite(() => {
            const str = vidUrl; // get what user wrote in input box.
            const target = "youtube"; // finds 1st appearance of youtube.
            const replacement = "youtubepp"; // replace that word.
            const index = str.indexOf(target);
            if (index !== -1) { // only when it exits
                const firstPart = str.substring(0, index);
                const secondPart = str.substring(index + target.length);
                const newStr = firstPart + replacement + secondPart;
                setDownSite(newStr); // set download site url.
                openInNewTab(newStr);
                setBool_(false);
            } else {
                setBool_(true);
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
            <p>{bool_ ? "not a valid url input!" : ""}</p>
        </>
    );
}