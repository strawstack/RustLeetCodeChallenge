import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import styles from './styles/style.module.css';
import './style.css';
import { leetCodeList } from './leetCodeList.js';

function Main() {
  // currentFloat is floating point representing number of weeks since epoch
  const currentFloat = new Date().getTime() / 1000 / (60 * 60 * 24) / 7;

  // Next release is the next integer number of weeks
  // Expressed as a human readible date
  const nextRelease = new Date(
    Math.ceil(currentFloat) * 1000 * (60 * 60 * 24) * 7
  );

  // The current number of full weeks that have passed since epoch
  const currentWeeks = Math.floor(currentFloat);

  // Offset to help index into the problem list based on creation of this app
  const offset = 2731;
  const index = currentWeeks - offset;
  const url = 'https://leetcode.com/problems/';

  return (
    <div className={styles.Main}>
      <h1>About</h1>
      <div>A new problem is shown every week.</div>
      <h1>Next Release</h1>
      <div>{nextRelease.toString()}</div>
      <h1>Previous</h1>
      <Link url={url} slug={leetCodeList[index % leetCodeList.length]}></Link>
      <h1>Current</h1>
      <Link
        url={url}
        slug={leetCodeList[(index + 1) % leetCodeList.length]}
        className={styles.Highlight}
      ></Link>
      <h1>Next</h1>
      <Link
        url={url}
        slug={leetCodeList[(index + 2) % leetCodeList.length]}
      ></Link>
    </div>
  );
}

function Link({ className, url, slug }) {
  return (
    <a className={className} href={`${url}${slug}`}>
      {slug}
    </a>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
