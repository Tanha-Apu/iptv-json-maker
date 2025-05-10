import React, { useState } from 'react';

function CopyPreText({preRef}) {
  
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (preRef.current) {
      try {
        const text = preRef.current.innerText;
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  return (
    <div>
      
      <button onClick={handleCopy} className='rounded'>
        {copied ? "Copied!" : "Copy Code"}
      </button>
    </div>
  );
}

export default CopyPreText;
