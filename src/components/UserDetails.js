import { useForm } from "react-cool-form";
import { Button, message } from 'antd';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import "./styles.scss";

const Field = ({ label, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} readOnly disabled/>
  </div>
);

function UserDetails() {
  const { form } = useForm({
    defaultValues: {
      firstName: "Omar",
      lastName: "Orensa",
      email: "omar.orensa@gmail.com",
      gender: "Male",
      contactNumber: "+201234567890",
      address: "1234 Elm St",
      area: "Springfield",
      governorate: "IL",
      role: "Teacher",
    },
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
  });

  const [pdfUrl, setPdfUrl] = useState(process.env.PUBLIC_URL + '/dummy.pdf'); // Example PDF URL

  const handleAccept = () => {
    // Confirm accept action
    message.success('User accepted');
  };

  const handleReject = () => {
    // Confirm reject action
    message.error('User rejected');
  };

  const handleDownload = () => {
    // Trigger file download when the button is clicked
    saveAs(pdfUrl, 'user_details.pdf');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Donor Details</h1>
      <form ref={form}>
        <Field label="First Name" id="first-name" name="firstName" />
        <Field label="Last Name" id="last-name" name="lastName" />
        <Field label="Email" id="email" name="email" />
        <Field label="Gender" id="gender" name="gender" />
        <Field label="Contact Number" id="contact-number" name="contactNumber" />
        <Field label="Address" id="address" name="address" />
        <Field label="Area" id="area" name="area" />
        <Field label="Governorate" id="governorate" name="governorate" />
        <Field label="Role" id="role" name="role" />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' , marginTop: '20px'}}>
          <Button type="primary" onClick={handleAccept}>Accept</Button>
          <Button type="primary" onClick={handleReject}>Reject</Button>
          <Button type="primary" onClick={handleDownload}>Download</Button>
        </div>
      </form>
    </div>
  );
}
export default UserDetails;