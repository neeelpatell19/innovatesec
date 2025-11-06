import React from "react";
import { TbDownload } from "react-icons/tb";
import "./ClientRegDoc.css";

const languages = [
  { name: "Assamese", file: "Assamese.zip" },
  { name: "Bengali", file: "Bengali.zip" },
  { name: "Gujrati", file: "Gujrati.zip" },
  { name: "Hindi", file: "Hindi.zip" },
  { name: "Kanada", file: "Kanada.zip" },
  { name: "Kashmiri", file: "Kashmiri.zip" },
  { name: "Konkani", file: "Konkani.zip" },
  { name: "Malayalam", file: "Malayalam.zip" },
  { name: "Marathi", file: "Marathi.zip" },
  { name: "Oriya", file: "Oriya.zip" },
  { name: "Punjabi", file: "Punjabi.zip" },
  { name: "Sindhi", file: "Sindhi.zip" },
  { name: "Tamil", file: "Tamil.zip" },
  { name: "Telegu", file: "Telegu.zip" },
  { name: "Urdu", file: "Urdu.zip" }
];

const ClientRegDocs = () => {
  return (
    <div className="MainContainer" >
      <div className="Container">
        <div className="paddingSide">
          <div className="client-docs-wrapper">

  
      <h2 className="client-docs-title text-center">Client Registration Documents</h2>

      <p className="client-docs-para">
        Download Client Registration Documents (Rights &amp; Obligations,
        Risk Disclosure Document, Do's &amp; Don'ts) in Vernacular Language :
      </p>

      <div className="download-grid">
        {languages.map((lang) => (
          <a
            key={lang.name}
            href={`/images/ClientRegDocs/${lang.file}`}
            download
            className="download-item"
          >
            <TbDownload className="icon" />
            <span>{lang.name}</span>
          </a>
        ))}
      </div>

    </div>
        </div>
      </div>
    </div>
  );
};

export default ClientRegDocs;
