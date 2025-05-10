import React, { useState } from 'react';
import CopyPreText from './CopyPreText';
import { useRef } from 'react';

export default function Form() {
  const preRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    logo: '',
    origin: '',
    referrer: '',
    userAgent: '',
    cookie: '',
    drmScheme: '',
    drmLicense: ''
  });

  const [channels, setChannels] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChannels([...channels, formData]);
    setFormData({
      name: '',
      link: '',
      logo: '',
      origin: '',
      referrer: '',
      userAgent: '',
      cookie: '',
      drmScheme: '',
      drmLicense: ''
    });
  };

  return (
    <>
      <header>
        {'\u00A0'}{'\u00A0'}
         <h1>IPTV JSON MAKER</h1>
      </header>
    <div className="p-4 container max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="grid gap-3" >
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium mb-1 capitalize">{key}:{'\u00A0'}{'\u00A0'}</label>
            <br></br>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="w-full border hehe border-gray-300 rounded p-2"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Channel
        </button>
        </form>
        
      <div className='container-json'>
          <h2 className="mt-8 text-xl font-bold">Current JSON:</h2>
          <CopyPreText preRef={preRef} />
      <pre ref={preRef} className="bg-container-json p-4 rounded overflow-x-auto text-sm">
        {JSON.stringify(channels, null, 2)}
        </pre>
        </div>
      </div>
      </>
  );
};

