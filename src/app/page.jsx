import { Button } from 'antd';
import React from 'react';

function Page() {
  return (
    <div>
      <div className="App">
        <Button 
          type="primary" 
          style={{
            margin: '20px 30px', 
            padding: '10px 20px 15px 20px'
          }}
        >
          This is home page Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor autem facilis cupiditate architecto sequi voluptatem fugiat, rerum laborum! Ullam quos amet ipsa temporibus iusto nisi beatae dolores itaque eligendi nemo.
        </Button>
      </div>
    </div>
  );
}

export default Page;
