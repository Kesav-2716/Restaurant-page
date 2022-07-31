export function intialPage(){
    //Get Html Div

    const contentDiv=document.querySelector("#container")

    //If Presnt,Removing Exisiting Dom Elements
    
    contentDiv.replaceChildren();

    //Welcome Heading

    const head=document.createElement("h2");
    head.textContent="Welcome To All";
    head.classList.add("welcome");
    contentDiv.appendChild(head);

    //Welcome Quotes Paragraph

    const paragraph=document.createElement("p");
    paragraph.textContent="“Food is for eating, and good food is to be enjoyed… I think food is, actually, very beautiful in itself.”"
    paragraph.classList.add("par1");
    contentDiv.appendChild(paragraph);

    //Last Heading Element

    const last=document.createElement("h3");
    last.textContent="Let's Eat And Enjoy It...🤤🤪";
    last.classList.add("last");
    contentDiv.appendChild(last);

    //Open Timing Element

    const time=document.createElement("h4");
    time.classList.add("time");
    time.textContent="Shop Open-Time:10.00AM To 10.00PM"
    contentDiv.appendChild(time);

   
}