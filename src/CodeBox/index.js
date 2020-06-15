import React from 'react';
import BaseTyper from '../Typewriter/index';
import { makeText } from './utils';

// TODO: refactor and make neat
const CodeBox = ({ text }) => {
  return (
    <BaseTyper
      onInit={(typewriter) => {
        typewriter
          .typeString(text.map((cur) => makeText(cur)))
          .typeString('<br>')
          .pasteString(
            makeText(`{
            &nbsp;&nbsp"name": chin, <br>
            &nbsp;&nbsp;&nbsp;&nbsp"hobbies": programming, windsurfing<br>
            &nbsp;&nbsp;&nbsp;&nbsp"university": nanyang technological university,<br>
            &nbsp;&nbsp;&nbsp;&nbsp"handle": @seaerchin<br>
            }<br>`),
          )
          .typeString(makeText('$'))
          .start();
      }}
    />
  );
};

export default CodeBox;
