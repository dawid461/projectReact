import React, { useState } from 'react';
import FormikForm from './FormikForm';
import './App.css';

function App() {
  const [fields, updateFields] = useState(
    {
      name: 'Admin',
      city: 'New York',
      job: 'Partner',
      email: 'humbertaswift@gmail.com',
      mobile_no: '+33 (0)6 12 34 56 78',
      /* section2*/
      expertise: 'mergers and acquisition',
      specialist: 'Cross border operation',
      admission: 'Paris bar association',
      counties: 'Tunisia'
    }
  );

  return (
    <div className="container">
      <FormikForm fields={fields} updateFields={updateFields} />
    </div>
  );
}

export default App;
