import React, {FC, useRef, useState} from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null)
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {};
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} value={value} placeholder='Управляемый'/>
      <input type="text"  placeholder='Неуправляемый' ref={inputRef}/>
      <button onClick={clickHandler}>click</button>
      <div
        draggable
        onDrag={dragHandler}
        style={{ width: 200, height: 200, background: "red" }}
      > </div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15 }}
      > </div>
    </div>
  );
};

export default EventsExample;
