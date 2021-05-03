import React, {useState, useEffect } from 'react';
import './itemCount.css'

function ItemCount() {

    const [count, setCount] = useState(1);

useEffect(() => { if(count<1) {setCount(1)} else {if(count>5){setCount(5)}
}});

  return (
    <div>
        <button onClick={()=> setCount(count - 1)}> - </button>
      <p> AGREGAR {count} PRODUCTOS</p>
      <button onClick={() => setCount(count + 1)}> + </button>
  

    </div>
  );
}

export default ItemCount;
