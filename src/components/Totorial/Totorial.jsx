import React from "react";
import "../../Style/Totorial.css";

import { GrOverview } from "react-icons/gr";

 function Totorail(){
    return(
        <div className="doc-page">
            <aside className="sidebar">
                <h3 className="sidebar-title">tutorial</h3>
                <ul className="sidebar-menu">
                    <li className="active">overview</li>
                    <li>Third-party Integration APIS</li>
                </ul>
            </aside>
            <main className="content">
                <nav className="breadcrumb">
                    <span>🏠</span> <span>overview</span>
                </nav>
                <h1 className="page-title">Blsmy System</h1>
                <p className="page-subtitle">
                  Blsmy is an integrated platform designed to simplify healthcare
          management through:  
                </p>
                <ul>
                    <li>
                        <b>Mobile app and website</b>for medical appointments bookin
                    </li>
                    <li>
                                    Smart communication between patients and healthcare providers

                    </li>
                    <li>
                          Tools for managing appointments, notifications, and medical
            follow-ups
                    </li>
                </ul>
          <div className="info-box">
            <strong>🌐 OFFICIAL WEBSITE</strong>
             <br/>
                <a href="https://blsmy.com" target="_blank" rel="noreferrer">
            blsmy.com
          </a>
          </div>
          <h2> How to Integrate</h2>
          <p>Our APIs enable you to:</p>
          <ol>
         <li>
        <b>Send notifications</b> to patients via WhatsApp (text, templates,
            files)
           </li>
            <li>
            <b>Manage appointments</b> (book/modify/cancel)
          </li>
           </ol>
            </main>
            <aside className="rightbar">
                <ul>
                    <li> How to Integrate</li>
                    <li>Target Users</li>
                    <li>Key Features</li>
                </ul>
            </aside>
        </div>
    );
 }
 export default Totorail;