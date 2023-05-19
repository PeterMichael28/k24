import React, { useRef, useState } from "react";
import Title from "../title";
import PriorityContent from "./PriorityContent";

const Priorities = () => {
 const prior = [
  "Honest Government",
  "Reconciliation",
  "Environment",
  "Revitalization",
  "Peace",
  "Civil Liberties",
 ];

 const smPrior = [
  "FOR THE PEOPLE",
  "HEAL THE DIVIDE",
  "CLEAN IT UP",
  "TURN IT AROUND",
  "BRING IT HOME",
  "RESTORE OUR RIGHTS",
 ];

 const [selected, setSelected] = useState(
  "Honest Government"
 );
 const [mobileSelected, setMobileSelected] = useState("");
 const [alreadySelected, setAlreadySelected] = useState("");

 let bodyContent;

 if (selected === prior[1]) {
  bodyContent = (
   <PriorityContent
    smallTitle="Reconciliation"
    bigTitle="Heal the divide"
    text="Robert F. Kennedy, Jr. will focus his campaign on the values Americans hold in common, and lead the country toward an ethos of respectful dialog and reconciliation across races, parties, and divisions. Learn more about our plan to Heal the Divide."
   />
  );
 }

 if (selected === prior[0]) {
  bodyContent = (
   <PriorityContent
    smallTitle="HONEST GOVERNMENT"
    bigTitle="FOR THE PEOPLE"
    text="We are going to remake public institutions to serve the public. We will roll back the secrecy, end the surveillance, stop the censorship, and make government transparent. Learn more about our plan to restore integrity to government For the People."
   />
  );
 }

 if (selected === prior[2]) {
  bodyContent = (
   <PriorityContent
    smallTitle="ENVIRONMENT"
    bigTitle="CLEAN IT UP"
    text="We’re going to unite Americans around safe and healthy food, pure water, clean air, and living rivers, forests, grasslands, and wetlands. We will accelerate the transition to a regenerative agricultural system and incentivize the transition to zero-waste cycles and clean energy sources. Learn more about our plan to Clean it Up."
   />
  );
 }

 if (selected === prior[3]) {
  bodyContent = (
   <PriorityContent
    smallTitle="REVITALIZATION"
    bigTitle="TURN IT AROUND"
    text="The time has come to reverse America’s economic decline. Government assistance to the nation’s most vulnerable is a high priority, but even more important is to reverse the policies that have led to such poverty in the first place. Learn more about our plan to Turn it Around."
   />
  );
 }

 if (selected === prior[4]) {
  bodyContent = (
   <PriorityContent
    smallTitle="PEACE"
    bigTitle="BRING IT HOME"
    text="Robert F. Kennedy, Jr. will end the foreign wars, bring home the troops, and devote the freed-up resources to revitalize America. That means repairing our infrastructure, cities, industries, and public services. Learn more about our plan to Bring it Home."
   />
  );
 }

 if (selected === prior[5]) {
  bodyContent = (
   <PriorityContent
    smallTitle="CIVIL LIBERTIES"
    bigTitle="RESTORE OUR RIGHTS"
    text="Civil liberties, especially freedom of speech, is a high priority for Robert F. Kennedy. He will end the censorship and surveillance, reduce incarceration, and respect the rights and dignity of all citizens. Learn more about the plan to Restore Our Rights."
   />
  );
 }

 const contentEl = useRef();

 console.log(contentEl.current);

 return (
  <section id="priorities">
   <div className="container">
    <Title text="OUR PRIORITIES" />

    {/* desktop priority */}
    <div className="hidden md:flex w-full gap-10">
     <ul className="priority-ul">
      {prior.map((list) => (
       <li
        key={list}
        onMouseEnter={() => setSelected(list)}
        onMouseLeave={() =>
         setSelected(alreadySelected || "Honest Government")
        }
        onClick={() => {
         setSelected(list);
         setAlreadySelected(list);
        }}
        className={`${
         selected === list ? "bg-[#E83B48]" : "bg-[#2b4d85]"
        } p-4`}
       >
        {list}
       </li>
      ))}
     </ul>

     <div className="content hidden md:block">
      <div className="con">{bodyContent}</div>
     </div>
    </div>

    {/* mobile priority */}
    <div className="flex md:hidden">
     <ul className="priority-ul">
      {smPrior.map((list) => (
       <li
        key={list}
        onClick={() => {
            if ( mobileSelected === list ) {
               return setMobileSelected('');
            }
         setMobileSelected(list);
        }}
        className={`bg-[#2b4d85] relative z-[40] pt-3 cursor-pointer ${
         mobileSelected !== list && "pb-2  "
        } `}
       >
        {list}

        {/* content */}

       <div className={`${
            mobileSelected === list
             ? "h-[400px]"
             : 'h-0 overflow-hidden '
           } relative`}>
        
         <div className="mt-3 w-full border border-gray-300">
          <div
           className={`mobile-con bg-white border transition-all duration-500 px-[2rem] py-[3.5rem] h-full`}
          >
           {bodyContent}
          </div>
         </div>
       </div>
       
       </li>
      ))}
     </ul>
    </div>
   </div>
  </section>
 );
};

export default Priorities;
