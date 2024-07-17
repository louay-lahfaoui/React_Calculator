import './App.css';
import { useState, useEffect } from 'react';
import { Button } from './Button';
import { Display } from './Display';

function App() {
  const [input, setInput]=useState('');
  const [result,setResult]=useState('');
  const handleClick =(value) => {
    setInput(input+value);
  }
  const handleClear =() => {
    setInput ('');
    setResult('');
  }
  const handleEqual= ()=>{
    try{
      setResult(eval(input));
    }
    catch (error){
      setResult('error')
    }
  }
  const handleKeyDown= (event)=>{
    const {key} =event;
    if ((key >= '0' && key <= '9') || key === '.' || (key=== '+') || key==='-' || key==='/' || key ==='*' ) {
      handleClick(key);
    } else if (key === 'Enter' || key === '=') {
      handleEqual();
    } else if (key === 'Escape' || key==='c') {
      handleClear();
    }
  }
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  return (
    <div className="App">
      <Display input={input} result={result} />
      <div>
      <Button value="1"  handleClick={handleClick}/>
      <Button value="2" handleClick={handleClick}/>
      <Button value="3" handleClick={handleClick}/>
      <Button value="+" handleClick={handleClick}/>
      
      </div>
      <div>
      <Button value="4" handleClick={handleClick}/>
      <Button value="5" handleClick={handleClick}/>
      <Button value="6" handleClick={handleClick}/>
      <Button value="-" handleClick={handleClick}/>
      </div>
      <div>
      <Button value="7" handleClick={handleClick}/>
      <Button value="8" handleClick={handleClick}/>
      <Button value="9" handleClick={handleClick}/>
      <Button value="*" handleClick={handleClick}/>
      </div>
      <div>
      <Button value="C" handleClick={handleClear}/>
      <Button value="0" handleClick={handleClick}/>
      <Button value="/" handleClick={handleClick}/>
      <Button value="=" handleClick={handleEqual}/>
      </div>
      
    </div>
  );
}

export default App;
