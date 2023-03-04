import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProviderWrapper } from './contexts/auth.context';
// import { AiProviderWrapper } from './contexts/ai.context'
// import { MessageProviderWrapper } from './contexts/userMessage.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProviderWrapper>
      {/* <MessageProviderWrapper>
        <AiProviderWrapper> */}
      <Router>
        <App />
      </Router>
      {/* </AiProviderWrapper>
  </MessageProviderWrapper> */}
    </AuthProviderWrapper >
  </React.StrictMode >
)

export default App