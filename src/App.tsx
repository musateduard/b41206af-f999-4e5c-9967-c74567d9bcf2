import './App.css';
import React, { Fragment, ReactElement } from 'react';
import Sample from './components/Sample';


export default function App(): ReactElement {

    let html: ReactElement =
        <Fragment>
            <h1>test header</h1>
            <h1>test header</h1>
            <Sample />
        </Fragment>

    return html;}
