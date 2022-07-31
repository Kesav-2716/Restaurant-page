export function contact(){

    const contentDiv=document.querySelector("#container")

    //If Presnt,Removing Exisiting Dom Elements
    
    contentDiv.replaceChildren();
    
  //Address Heading Element Create

   const add=document.createElement("h2");
   add.textContent="Adddress";
   add.classList.add("con");
   contentDiv.appendChild(add);


   //Address Element

   const address=document.createElement("p");
   address.textContent="No-8,Subburaj Nagar,";
   address.classList.add("address");
   contentDiv.appendChild(address);

   const address1=document.createElement("p");
   address1.textContent="New Colony,8Th Street,";
   address1.classList.add("address");
   contentDiv.appendChild(address1);


   const address2=document.createElement("p");
   address2.textContent="Theni-625513.";
   address2.classList.add("address");
   contentDiv.appendChild(address2);

   const address3=document.createElement("p");
   address3.textContent="Ph-no:9787135525,6553635358";
   address3.classList.add("address");
   contentDiv.appendChild(address3);

}