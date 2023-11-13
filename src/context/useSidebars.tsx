import { createContext, useContext, useState } from "react";

type SidebarProviderProps = {
  children: React.ReactNode;
};
type SidebarValues = {
  isInfoBarOpen: boolean;
  isSideBarOpen: boolean;
  toggleSidebar: () => void;
  toggleInfobar: () => void;
};
const SidebarProviderContext = createContext({} as SidebarValues);

export function SidebarProvider({ children, ...props }: SidebarProviderProps) {
  const [isInfoBarOpen, setInfoBarIsOpen] = useState(false);
  const [isSideBarOpen, setSideBarIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarIsOpen((o) => !o);
    setInfoBarIsOpen(false);
  };

  const toggleInfobar = () => {
    setInfoBarIsOpen((o) => !o);
    setSideBarIsOpen(false);
  };

  const value = { isInfoBarOpen, isSideBarOpen, toggleSidebar, toggleInfobar };

  return (
    <SidebarProviderContext.Provider {...props} value={value}>
      {children}
    </SidebarProviderContext.Provider>
  );
}
// eslint-disable-next-line
export const useSidebars = () => {
  const context = useContext(SidebarProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a SidebarProvider");

  return context;
};
