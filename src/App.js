import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [display, setDisplay] = useState('');
  const [operator, setOperator] = useState('');
  const [prevNum, setPrevNum] = useState('');
  const displayedString = display.length > 0 ? parseInt(display).toLocaleString('en-US') : '0';

  const handleNum = (str) => {
    setDisplay(p => p + str);
  };
  const evaluate = () => {
    const result = eval(prevNum + operator + display);
    setOperator(p => '');
    setPrevNum(p => '');
    setDisplay(p => result.toString());
  };
  const del = () => {
    if(display.length > 0) {
      setDisplay(p => p.slice(0, -1));
    }
  };
  const reset = () => {
    setDisplay(p => '');
    setOperator(p => '');
    setPrevNum(p => '');
  };
  const handleSpecial = (str) => {
    switch(str) {
      case "DEL":
        del();
        break;
      case "RESET":
        reset();
        break;
      case "=":
        evaluate();
        break;
      default:
        setOperator(p => str);
        setPrevNum(p => display);
        setDisplay(p => '');
    }
  }
  return (
    <div className= " bg-bg-main h-screen p-6 pt-10">
        <div className=" max-w-md m-auto space-y-6">
          <div className="flex text-neutral-white items-center">
            <p className=' text-2xl text font-bold'>calc</p>
            <div className="grow"></div>
            <p className='text-xs mx-5'>THEME</p>
            <div className="grid grid-cols-3 text-center text-[9px]">
              <p className='mx-1.5'>1</p>
              <p className='mx-1.5'>2</p>
              <p className='mx-1.5'>3</p>
              <div className='col-span-3 bg-bg-toggle rounded-full p-1'>
                <div className="bg-bg-key-red h-2.5 w-2.5 rounded-full mr-auto"></div>
              </div>
            </div>
          </div>
          <p className='text-neutral-white bg-bg-screen p-6 text-right rounded-md text-4xl font-bold'>{displayedString}</p>
          <div className="grid grid-cols-4 grid-rows-5 gap-6 p-6 bg-bg-screen rounded-md text-3xl font-bold">
            <Button clickHandler={handleNum} type='normal'>7</Button>
            <Button clickHandler={handleNum} type='normal'>8</Button>
            <Button clickHandler={handleNum} type='normal'>9</Button>
            <Button clickHandler={handleSpecial} type='blue'>DEL</Button>
            <Button clickHandler={handleNum} type='normal' >4</Button>
            <Button clickHandler={handleNum} type='normal' >5</Button>
            <Button clickHandler={handleNum} type='normal' >6</Button>
            <Button clickHandler={handleSpecial} type='normal' >+</Button>
            <Button clickHandler={handleNum} type='normal' >1</Button>
            <Button clickHandler={handleNum} type='normal' >2</Button>
            <Button clickHandler={handleNum} type='normal' >3</Button>
            <Button clickHandler={handleSpecial} type='normal' >-</Button>
            <Button clickHandler={handleSpecial} type='normal' >.</Button>
            <Button clickHandler={handleNum} type='normal' >0</Button>
            <Button clickHandler={handleSpecial} type='normal' >/</Button>
            <Button clickHandler={() => handleSpecial('*')} type='normal' >x</Button>
            <Button clickHandler={handleSpecial} type='blue' classes='col-span-2'>RESET</Button>
            <Button clickHandler={handleSpecial} type='red' classes='col-span-2'>=</Button>
          </div>
        </div>
    </div>
  );
}

export default App;
