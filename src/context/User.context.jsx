import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext(null);
console.log(UserContext);

export default function UserProvider({ children }) {
  const [token, setToken] = useState(false);
  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}
