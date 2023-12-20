import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='請輸入姓名' />
      <p>歡迎，{name}</p>
    </>
  );
}

export default App;
