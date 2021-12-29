import React from "react";

const Form = () => {
  return (
    <form action="#" className="">
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input"
          pattern="[A-Z,a-z, ]*"
          type="text"
          id="Name"
        />
        <label className="mdl-textfield__label" for="Name">
          Name...
        </label>
        <span className="mdl-textfield__error">Letters and spaces only</span>
      </div>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text" id="Email" />
        <label className="mdl-textfield__label" for="Email">
          Email...
        </label>
      </div>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <textarea
          className="mdl-textfield__input"
          type="text"
          rows="5"
          id="note"
        ></textarea>
        <label className="mdl-textfield__label" for="note">
          Enter note
        </label>
      </div>
      <p>
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          type="submit"
        >
          Submit
        </button>
      </p>
    </form>
  );
};

export default Form;
