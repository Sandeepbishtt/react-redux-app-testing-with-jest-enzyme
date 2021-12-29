import React from "react";
import ContactCard from "./ContactCard";
import Form from "./Form.js/Form";

const Contact = () => {
  return (
    <main className="mdl-layout__content">
      <div className="mdl-grid portfolio-max-width portfolio-contact">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <ContactCard />
          <Form />
        </div>
      </div>
    </main>
  );
};

export default Contact;
