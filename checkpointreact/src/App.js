import React from 'react';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';
 const firstName = "";
 const App = () => {
  return(
    <div>
     <div>
      <Image/>
      <Name/>
      <Price/>
      <Description/>
     </div>
     <div>
      <h3>Hello, {firstName ? firstName : "theree"}!</h3>
      {firstName  &&( 
        < img src="https://via.placeholder.com /150" alt="Greeting"/>
        )}
        </div>
      </div>
        
        );
        
        };
        
        export default App; 
        
        

       
      
      
      
      
      