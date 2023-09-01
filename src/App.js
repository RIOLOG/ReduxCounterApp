import React from 'react';
import './App.css';
import { UseSelector  ,useDispatch, useSelector } from 'react-redux';
import {incNumber , decNumber}  from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispath = useDispatch();

  return (
    <>
    <h1 className='head'>Count MeIn REDUX</h1>
    <div className='container'>
      
      <h1 className='title'>Increment / Decrement Counter</h1>
      <h4 className='subtitle'>using React and Redux</h4>

      <div className='counter-container'>
        <button className='btn-decrement' title='Decrement'
        onClick={ () => dispath(decNumber()) }>-</button>
        <input name='quantity' type='text' className='quantity-input' value={myState}/>
        <button className='btn-increment' title='Increment'
        onClick={ () => dispath(incNumber()) }>+</button>
      </div>
      
    </div>

    <footer class="footer">
        <div class="copyright">
            <span class="copyright-symbol"></span> 2023 Created by Ankit Singh
        </div>
        <a href="https://github.com/RIOLOG" target="_blank" class="github-link">
            GitHub Repository
        </a>
    </footer>


    </>
  );
}

export default App;
