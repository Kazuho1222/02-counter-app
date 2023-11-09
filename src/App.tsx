/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  //カウンターの状態を宣言
  const [count, setCount] = useState(0);

  const counterStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  background-color: #282c34;
  color: white;
  font-size: 2rem;
  `;

  const buttonStyle = css`
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
  cursor: pointer;
  `;

  return (
    <div css={counterStyle}>
      <p>{count}</p>
      <button css={buttonStyle} onClick={() => setCount(count + 1)}>
        インクリメント
      </button>
      <button css={buttonStyle} onClick={() => setCount(count - 1)}>
        デクリメント
      </button>
    </div>
  );
};

export default App;
