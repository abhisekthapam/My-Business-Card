import React from "react"
import './App.css';
import Emailc from "./Emailc";
import Linkedinc from "./Linkedinc"

export default function Buttons(){
    return(<div className="elln">
        <button className="Email">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNstnlbjBQcSZbDcTNcNrChRbxFCqsznKnkVZDcLqmShPDGlsKqXFXkbsvrFmHGHWbTkmg" target="_blank" rel="noreferrer"  className="email"><Emailc />Email</a></button>
        <button className="Linkedin"><a href="https://www.linkedin.com/in/abhisek-thapa-823711252/"  target="_blank" rel="noreferrer" className="linkedin"><Linkedinc />Linkedin</a></button>
        </div>

  )
}