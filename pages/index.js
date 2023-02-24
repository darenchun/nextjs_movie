import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import videoCrawl from "./api/playground";
import { NextRequest } from 'next/server';

export default function FirstPost() {
  /* play ground */
  const [videoSource, setVideoSource] = useState('');

  useEffect(() => {
    async function fetchVideoSource() {
      const response = videoCrawl();

      console.log("response: ", response);
      // const html = await response.text();
      // const parser = new DOMParser();
      // const doc = parser.parseFromString(html, 'text/html');
      // const videoElement = doc.querySelector('video');
      // if (videoElement) {
      //   const videoSource = videoElement.getAttribute('src');
      //   setVideoSource(videoSource);
      // }
    }
    fetchVideoSource();
  }, []);

  /* play ground */
  /* etc functions for use */
  // additional function to open a new tab in browser with new url : basically just making a new tab click of 'a' tag.
  function openInNewTab(newStr) {
    const a = document.createElement('a');
    a.href = newStr;
    a.target = "_blank"; // new tab.
    a.rel = "noopener noreferrer"; //security reasons
    a.click();
  }
  // http/http format decider
  const isValidUrl = (input) => {
    const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return urlRegex.test(input);
  };

  /* states */
  const [bool_, setBool_] = React.useState(false);
  const [bool_2, setBool_2] = React.useState(false);
  const [vidUrl, setUrl] = React.useState("");
  const [input_second, setInput_second] = React.useState("");
  const [vidDownSite, setDownSite] = React.useState([]);
  const [videoList, setVideoList] = useState([]);

  /* state handlers with javascript */
  // inputbox text saving
  const handleURLInput = (event) => { setUrl(event.target.value); }
  const handleSetInput_second = (event) => { setInput_second(event.target.value); }
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

  const handleClick_videoList_gen = async () => {
    if (isValidUrl(input_second)) {
      console.log("its valid!!");
      console.log(input_second);
      const url = "/api/endpoint_api"; // replace with your URL
      const result = await axios.post(url, { test: input_second });
      console.log(JSON.parse(JSON.stringify(result.data)));
      const $ = cheerio.load(result.data);
      // const urls = $('video').map(function () {
      //   return $(this).attr('src');
      // }).get();
      const urls = $('video');
      console.log(urls);
      setVideoList(urls);
    } else {
      console.log("its not valid!!");
      setBool_2(true);
    }
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
        <input type="text" value={input_second} onChange={handleSetInput_second} />
        <button onClick={() => { handleClick_videoList_gen(); }}>secondPart</button>
        <p>{input_second}</p>
        <p>{bool_2 ? "not a valid url input!" : ""}</p>
      </div>
      <div>
        <p>Video list and thumbnails</p>
        <div id="video_list">
          {videoList.length !== 0 ? () => {
            videoList.map((url, index) => (
              <div key={index}>
                <video src={url} width="320" height="240" controls />
                <p>Size: {url.size}</p> {/* replace with the actual size */}
              </div>
            ))
          } : ""}
        </div>
      </div>
      <br />
      <div>
        {videoSource && (
          <video controls>
            <source src={videoSource} type="video/mp4" />
          </video>
        )}
      </div>

    </>
  );
}