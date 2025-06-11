import fetch from 'node-fetch';

fetch('https://apply-to-avantos.dev-sandbox.workload.avantos-ai.net', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 
     'Access-Control-Allow-Origin':'*',
     'User-Agent': 'Mozilla/5.0'
   },
  body: JSON.stringify({ email: 'sajna_rajesh@yahoo.com' })
})
  .then(async (res) => {
    const text = await res.text(); // Get raw response
    console.log('Status:', res.status);
    console.log('Response:', text);

    // Try parsing only if it's JSON
    try {
      const json = JSON.parse(text);
      console.log('Parsed JSON:', json);
    } catch (err) {
      console.error('Response is not JSON.');
    }
  })
  .catch(err => console.error('Fetch error:', err));
