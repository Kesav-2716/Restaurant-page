export function about(){

    const contentDiv=document.querySelector("#container");
     
    //If Presnt,Removing Exisiting Dom Elements

    contentDiv.replaceChildren();

    //About Us  Head Element

    const head=document.createElement("h2");
    head.textContent="About Us";
    head.classList.add("ah1")
    contentDiv.appendChild(head);

   //About us Para

   const about=document.createElement("p");
   about.textContent="For example, with an easy online ordering system featured prominently on your site, a guest decides to order right from you, instead of using a third party site. During this process, they sign up for your newsletter, and create an account to become a part of your loyalty program. Now you can use that email data to re-target that guest with an email marketing campaign encouraging them to purchase a gift card, or a small welcome gift with your loyalty program. The guest can then use that gift card or coupon code to come back and order delivery for date night at home, being rewarded as a regular by accruing loyalty points. Then, theyll tell their friends, or bring them along to the restaurant, and the guest experience flow begins again."
   about.classList.add("ab");
   contentDiv.appendChild(about)

   //Thank You Element

   const thank=document.createElement("h2");
    thank.textContent="Thank You!!!😍";
    thank.classList.add("ah2")
    contentDiv.appendChild(thank);
}