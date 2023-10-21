export interface IInfoItem {
  title?: string;
  context?: string;
  image?:string;
}

interface ISocial {
  id: number;
  attributes: {
    name: string;
    link: string;
    icon: string;
  };
}

export interface IMember {
  id: number;
  attributes: {
    name: string;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    role: string;
    socials: {
      data: ISocial[];
    };
  };
}

export interface InitialStateProps {
  aboutTitle: IInfoItem,
  aboutTab: IInfoItem[], 
  contact:IInfoItem,
  banner:IInfoItem,
  logo:IInfoItem,
  member:IMember[],
}

export interface IPlan {
  id: number;
  attributes: {
    title: string;
    image: string;
    description: string;
    content: string;
    thumbnail: string;
    type: "event" | "project";
    slug: string;
    createdAt: string;
    updatedAt: string;
    locale: "en" | "fa";
  };
}

export interface IGallery {
  id: number;
  attributes: {
    image: string;
    banner: boolean;
    createdAt: string;
    updatedAt: string;
    width: number;
    height: number;
  };
}
export interface IProjectItem {
  name: string;
  details: string;
}

export interface IMenuItem {
  text: string;
  hrefText: string;
}
