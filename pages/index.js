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
  const [bool_, setBool_] = React.useState(false);
  const [vidUrl, setUrl] = React.useState("");
  const [input_second, setInput_second] = React.useState("");
  const [vidDownSite, setDownSite] = React.useState([]);

  /* state handlers with javascript */
  // inputbox text saving
  const handleURLInput = (event) => { setUrl(event.target.value) }
  const handleSetInput_second = (event) =>{setInput_second(event.target.value)}
  // makes, sends, redirects according to input.
  const handleClick_URL_combinator = () => {
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
      <div id="first_division">
        <p>URL combinator</p>
        <input type="text" value={vidUrl} onChange={handleURLInput} />
        <button onClick={() => { handleClick_URL_combinator(); }}>get vids!!</button>
        <p>{vidDownSite}</p>
        <p>{bool_ ? "not a valid url input!" : ""}</p>
      </div>
      <br />
      <div id="second_division">
        <p></p>
        <input type="text"  value={input_second} onChange={handleSetInput_second} />
        <button onClick={() => { handleClick_URL_combinator(); }}></button>
        <p>{input_second}</p>
      </div>






    </>
  );
}