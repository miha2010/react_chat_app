import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css'

const App = () => {
  return ( 
    <ChatEngine 
      height="100vh"
      projectID="2c190b35-9a90-46f6-a03a-46a78dc42758"
      userName="msantek@icloud.com"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
   );
}
 
export default App;