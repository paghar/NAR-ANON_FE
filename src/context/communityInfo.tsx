import {createContext, useContext, useReducer} from "react";
import {InfoAction} from "@/data/enum";
import {InitialStateProps} from "@/data/interface";

const InfosContext = createContext<InitialStateProps>({
  aboutTitle:{title:"",context:""},
  aboutTab: [{title:"",context:""}],    
  contact: {title:"",context:""}, 
  banner:{title:"",context:""},
  logo: {title:"",context:""}, 
  member:[],
});

const InfosDispatchContext = createContext(undefined as any);

export function useInfos() {
  return useContext(InfosContext);
}

export function useInfosDispatch() {
  return useContext(InfosDispatchContext);
}

export const initialInfos:InitialStateProps = {
  aboutTitle:{title:"",context:""},
  aboutTab: [{title:"",context:""}],    
  contact: {title:"",context:""}, 
  banner:{title:"",context:""},
  logo: {title:"",context:""}, 
  member:[],
};

export const infoReducer = (infos = initialInfos, action:any) => {

  switch (action.type) { 

    case InfoAction.SetAboutTitle: 
      return {
        ...infos,
        aboutTitle: action.payload
      }; 

    case InfoAction.SetAboutTab: 
      return {
        ...infos,
        aboutTab: action.payload
      }; 

    case InfoAction.SetContact: 
      return {
        ...infos,
        contact: action.payload
      }; 

    case InfoAction.SetBanner: 
      return {
        ...infos,
        banner: action.payload
      }; 

    case InfoAction.SetLogo: 
      return {
        ...infos,
        logo: action.payload
      }; 

    case InfoAction.SetMember: 
      return {
        ...infos,
        member: action.payload
      }; 

    default: return infos;
  }
};

type Props = {
  children: string | JSX.Element | JSX.Element[],
}

export function InfoProvider({children}:Props) {
  const [infos, dispatch] = useReducer(
    infoReducer,
    initialInfos
  );
  
  return (
    <InfosContext.Provider value={infos}>
      <InfosDispatchContext.Provider value={dispatch}>
        {children}
      </InfosDispatchContext.Provider>
    </InfosContext.Provider>
  );
}