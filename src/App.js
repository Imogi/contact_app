import { useState } from 'react';

import Header from './components/Header'
import ContactList from './components/ContactList'
import ContactInformation from './components/ContactInformation'

function App() {

  const [contacts, setContacts] = useState([
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": '7675345213'
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": '55636341'
    },
    {
      "id": 3,
      "name": "Aloe Vera",
      "username": "Renyi",
      "email": "Aloevera@jiji.com",
      "phone": '412414214523'
    },
    {
      "id": 4,
      "name": "Jiji gg",
      "username": "Jiji",
      "email": "jiji@aloe.com",
      "phone": '42141412414124'
    },
    {
      "id": 5,
      "name": "Nobd",
      "username": "JN",
      "email": "der.com",
      "phone": '234121414141'
    },
    {
      "id": 6,
      "name": "vain",
      "username": "glory",
      "email": "vg.com",
      "phone": '0404040440'
    }
  ])

  return (
    <div className="entire__container">
      <Header />
      <div className="innerbox">
        <ContactList contacts={contacts} />
        <ContactInformation />
      </div>
    </div>
  );
}

export default App;
