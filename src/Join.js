import React, { useEffect } from 'react';
import './App.css';

const Join = () => {
  useEffect(() => {
    const PLACE_ID = '18306442585';
    const params = new URLSearchParams(window.location.search);
    let redirectUrl = `roblox://experiences/start?placeId=${PLACE_ID}`;

    const isValidUUID = (uuid) => {
      const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return uuidPattern.test(uuid);
    };

    const isValidServerCode = (code) => {
      const serverCodePattern = /^[a-z]+ [a-z]+ [a-z]+$/;
      return serverCodePattern.test(code);
    };

    if (params.has('jobId')) {
      const jobId = params.get('jobId');
      if (isValidUUID(jobId)) {
        redirectUrl += `&gameInstanceId=${encodeURIComponent(jobId)}`;
      } else {
        console.error('Invalid jobId format');
        document.body.innerHTML = '<div class="container"><p>Error: Invalid jobId format. Please use a valid UUID.</p></div>';
        return;
      }
    } else if (params.has('server')) {
      const serverCode = params.get('server');
      if (isValidServerCode(serverCode)) {
        const launchData = JSON.stringify({ server: serverCode });
        redirectUrl += `&launchData=${encodeURIComponent(launchData)}`;
      } else {
        console.error('Invalid server code format');
        document.body.innerHTML = '<div class="container"><p>Error: Invalid server code format. Please use the format: word word word.</p></div>';
        return;
      }
    }

    console.log('Redirect URL:', redirectUrl);
    window.location.replace(redirectUrl);
  }, []);

  return (
    <div className="container">
      <p>Joining Roblox game...</p>
    </div>
  );
};

export default Join;
