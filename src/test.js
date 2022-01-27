import { useRef } from 'react';
const Test = () => {
  const abc = useRef(0);

  const plusRef = () => {
    abc.current += 1;
    console.log(abc.current);
  };

  return (
    <>
      <div>test page</div>
      <div>{abc.current}</div>
      <button onClick={plusRef}>plus Ref</button>
    </>
  );
};

export default Test;
