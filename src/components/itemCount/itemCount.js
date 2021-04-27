import React, { useState } from 'react';

function ItemCount() {

  const [count, setCount] = useState(0);

  return (
    <div>
        <button onClick={()=> setCount(count - 1)}> - </button>
      <p> AGREGAR {count} PRODUCTOS</p>
      <button onClick={() => setCount(count + 1)}> + </button>
  

    </div>
  );
}

export default ItemCount;
