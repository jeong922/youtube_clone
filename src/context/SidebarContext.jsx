import { createContext, useContext, useState } from 'react';

export const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <SidebarContext.Provider value={{ showSidebar, toggleShowSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
