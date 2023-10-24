import {InfoAction} from "./enum";
import {InitialStateProps} from "./interface";

export const initialState:InitialStateProps = {
  aboutTitle:{},
  aboutTab: [],    
  contact: {}, 
  banner:{},
  logo: {}, 
  member:[],
};

export const reducer = (state = initialState, action:any) => {

  switch (action.type) { 

    case InfoAction.SetAboutTitle: 
      return {
        ...state,
        aboutTitle: action.payload
      }; 

    case InfoAction.SetAboutTab: 
      return {
        ...state,
        aboutTab: action.payload
      }; 

    case InfoAction.SetContact: 
      return {
        ...state,
        contact: action.payload
      }; 

    case InfoAction.SetBanner: 
      return {
        ...state,
        banner: action.payload
      }; 

    case InfoAction.SetLogo: 
      return {
        ...state,
        logo: action.payload
      }; 

    default: return state;
  }
};
