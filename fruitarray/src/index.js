import React from 'react';
import ReactDOM from 'react-dom';
import fruits from './foods';
import {Choice, Remove } from './helpers';

const randomFruit = Choice(fruits);
const otherFood = Remove(randomFruit, fruits);

const app = <div>
                <p>I'd like one {randomFruit}</p>
                <p>Here you go: {randomFruit}</p>
                <p>Delicious! may I have another?</p>
                <p>I am sorry, we're all out. We have {otherFood.length} left</p>
            </div>;

ReactDOM.render(app, document.getElementById('root'));
