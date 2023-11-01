import React from "react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ThemeProvider } from "next-themes";

export const NavigationContext = React.createContext({
  isOpen: false,
  currentRoute: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsOpen: (_: boolean) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentRoute: (_: string) => {},
});

type ComponentType = {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
} & React.ComponentType;

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentRoute, setCurrentRoute] = React.useState("");
  const getLayout = (Component as ComponentType).getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <NavigationContext.Provider value={{ isOpen, setIsOpen, currentRoute, setCurrentRoute }}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </NavigationContext.Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
