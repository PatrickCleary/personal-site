import React, { useCallback, useEffect, useState } from 'react';
export type WindowContextProps = {
  clientHeight: number;
  clientWidth: number;
  mobile: boolean;
};
interface Props {
    children: React.ReactNode;
  }

export const WindowContext = React.createContext<WindowContextProps>({ clientHeight: 0, clientWidth: 0, mobile: false, });
export const WindowContextProvider: React.FC<Props> = ({ children }) => {
const getVh = useCallback(() => {
   return Math.max(
     document.documentElement.clientHeight || 0,
     window.innerHeight || 0
   );
}, []);
const getVw = useCallback(() => {
   return Math.max(
     document.documentElement.clientWidth || 0,
     window.innerWidth || 0
   );
}, []);
const [clientHeight, setVh] = useState<number>(getVh());
const [clientWidth, setVw] = useState<number>(getVw());
const [mobile, setMobile] = useState<boolean>(getVw() <= 768);
useEffect(() => {
   const handleResize = () => {
     setVh(getVh());
     setVw(getVw());
     setMobile(getVw() <= 768);
   }
   window.addEventListener('resize', handleResize);
   return () => {
     window.removeEventListener('resize', handleResize);
   };
}, [getVh, getVw]);
return (
<WindowContext.Provider value={{ clientHeight, clientWidth, mobile }} >
{children}
</WindowContext.Provider>
);
};