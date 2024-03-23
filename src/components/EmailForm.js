import React, { useState } from 'react';

const EmailForm= () => {
  const [email, setEmail] = useState('');
  // Assuming the hidden fields are anti-spam measures and don't need to be changed
  // Otherwise, you would manage their state here as well

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the form data
    const formData = new FormData();
    formData.append('email_1', email);
    // Append the hidden fields as they are static
    formData.append('a912724c', '');
    formData.append('b912724c', '');
    formData.append('c912724c', '');

    // Post the data to the external service
    fetch('https://acumbamail.com/newform/subscribe/3uNkFOdeOMLJStFZaFA0pKgR4JWi4R6cI9wbzS3hkEpX/46043/', {
      method: 'POST',
      body: formData,
      mode: 'no-cors', // Important: This mode is used here for demonstration purposes
    }).then(() => {
      console.log('Form submitted');
      // Here you can handle redirection or display a success message
      // For example, you could set state to show a "thank you" message
    }).catch((error) => {
      console.error('Error submitting form:', error);
      // Handle any errors here, such as displaying an error message
    });
  };

  return (
    <form onSubmit={handleSubmit} className="yourFormCustomContainer">
      <div className="yourFormCustomStyle">
        <div style={{width: '100%', position: 'relative'}}>
          <label htmlFor="r0c0m1i1">Email</label>
          <input
            id="r0c0m1i1"
            name="email_1"
            type="email"
            placeholder=""
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          {/* Hidden fields for anti-spam */}
          <input type="text" name="a912724c" tabIndex="-1" value="" style={{position: 'absolute', left: '-4900px'}} aria-hidden="true" autoComplete="off" />
          <input type="email" name="b912724c" tabIndex="-1" value="" style={{position: 'absolute', left: '-5000px'}} aria-hidden="true" autoComplete="off" />
          <input type="checkbox" name="c912724c" tabIndex="-1" style={{position: 'absolute', left: '-5100px'}} aria-hidden="true" autoComplete="off" />
        </div>
      </div>
      <input type="hidden" name="ok_redirect" id="id_redirect" value="/*URL to redirect to*/" />
      <input type="submit" value="Subscribe to the list" className="yourButtonCustomStyle" />
    </form>
  );
};

export default EmailForm;
