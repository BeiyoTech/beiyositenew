import React from 'react'
import './Homestyles/Faq.css'
const Faq = () => {
    const click1 = () => {
        document.querySelector(".answerdivs p").innerHTML="BEIYO stands as the ultimate answer to all your accommodation needs during your journey, offering an unparalleled co-living experience at the most budget-friendly prices."
        document.querySelector("#one").setAttribute(  "style", "color:white; background-color:black")
        document.querySelector("#two").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#three").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#four").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#five").setAttribute(  "style", "color:black; background-color:transparent")
    }
    const click2 = () => {
        document.querySelector(".answerdivs p").innerHTML="Beiyo promotes inclusivity, diversity, and collaboration, creating a safe and supportive space for individuals to connect and engage positively with one another, fostering a sense of community and unity."
        document.querySelector("#one").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#two").setAttribute(  "style", "color:white; background-color:black") 
        document.querySelector("#three").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#four").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#five").setAttribute(  "style", "color:black; background-color:transparent")
    }
    const click3 = () =>{
        document.querySelector(".answerdivs p").innerHTML="To avail Beiyo's services for your hostel or PG, you have multiple convenient options. You can easily reach out to us via phone call or email. Additionally, you can explore the 'List Your Property' option provided in the navigation bar of our website. "
        document.querySelector("#three").setAttribute(  "style", "color:white; background-color:black")
        document.querySelector("#two").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#one").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#four").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#five").setAttribute(  "style", "color:black; background-color:transparent")
    }
    const click4 = () =>{
        document.querySelector(".answerdivs p").innerHTML="We partner with PG and hostel owners to renovate rooms and enhance facilities, offering a modern and comfortable living experience."
        document.querySelector("#four").setAttribute(  "style", "color:white; background-color:black")
        document.querySelector("#two").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#three").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#one").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#five").setAttribute(  "style", "color:black; background-color:transparent")
    }
    const click5 = () =>{
        document.querySelector(".answerdivs p").innerHTML="Recommend BEIYO to your friends and receive a 10% commission on the first month's rental cost for each successful referral."
        document.querySelector("#five").setAttribute(  "style", "color:white; background-color:black")
        document.querySelector("#two").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#three").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#four").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#one").setAttribute(  "style", "color:black; background-color:transparent")
    }
    
  return (
  <div className="faqmain">
     <div className="faq">
    <div className="questions">
        <h1>FAQ</h1>
        <div className="questionsdiv">
        <button className="questionpara" id='one' onClick={click1}>What is Beiyo and why it's different
from others?</button>
            <button className="questionpara" id='two' onClick={click2}>How does Beiyo contribute to a
positive community environment?</button>
            <button className="questionpara" id='three' onClick={click3}>How can I get Beiyo's services for my
hostel or PG?</button>
            <button className="questionpara" id='four' onClick={click4}>How does Beiyo work with PG and
hostel owners?</button>
            <button className="questionpara" id='five' onClick={click5}>Refer and Earn</button>       
        </div>
    </div>
    <div className="answers">
        <h1>Answers</h1>
        <div className="answerdivs">
         <p>
         Beiyo promotes inclusivity, diversity, and collaboration, creating a safe and supportive space for individuals to connect and engage positively with one another, fostering a sense of community and unity.
         </p>
        </div>
    </div>
   </div>
  {/* <img src="images\Ellipse 6.png" alt="" className="randomfooterelem" /> */}
  </div>
  )
}

export default Faq



