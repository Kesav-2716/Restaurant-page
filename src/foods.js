import footImage from './assets/item1.jpg';

export function food(){

    //Get Html Div
    
     const contentDiv=document.querySelector("#container");
     
     //If Presnt,Removing Exisiting Dom Elements

     contentDiv.replaceChildren();

    
      //Food Items Img

      const itemImg=document.createElement("img");
      itemImg.src="footImage"
      itemImg.alt="Food-Item-image";
      contentDiv.appendChild(itemImg);
 
}