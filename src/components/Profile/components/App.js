import React, { useState } from 'react';
import FormikForm from './FormikForm';
import './App.css';

function App() {
  const [fields, updateFields] = useState(
    {
      /* section1*/
      name: 'Clementine Bauch',
      city: 'New York',
      job: 'Partner',
      email: 'humbertaswift@gmail.com',
      mobile_no: '+33 (0)6 12 34 56 78',
      /* section2*/
      expertise: 'mergers and acquisition',
      specialist: 'Cross border operation',
      admission: 'Paris bar association',
      counties: 'Tunisia',
      /* section3*/
      hourly: '610$/hour (Negociated)',
      terms: 'Monthly 10k$ retainer - see with Jeanny Smith',
      services: 'Corporate M&A and international acquisitions',
      internal: 'Clementine Bauch',
      /* section4*/
      name1: 'Operation Ti...',
      name2: 'Op. Prometh..',
      name3: 'Op. Latandre',
      entity1: 'Renault Co...',
      entity2: 'Renault HQ.',
      entity3: 'Renault Br...',
      location1: 'France',
      location2: 'USA',
      location3: 'Italia',
      expertise1: '#Tax',
      expertise2: '#M&A',
      expertise3: '#Social',
      date1: '20/01/2018',
      date2: '18/02/2019',
      date3: '18/02/2019',
      firm1: 'Racine',
      firm2: 'Clifford',
      firm3: 'SVZ',
    }
  );

  return (
    <div className="container">
      <FormikForm fields={fields} updateFields={updateFields} />
    </div>
  );
}

export default App;
