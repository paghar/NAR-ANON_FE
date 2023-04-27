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
    locale: "de" | "fa";
  };
}

export interface IGallery{
  id:number;
  attributes:{
    image:string;
    banner:boolean;
    createdAt: string;
    updatedAt: string;
    width:number;
    height:number;
  }

}
export interface IProjectItem {
  name: string;
  details: string;
}

export interface IMember {
  id: number;
  name: string;
  postion: string;
  description: string;
  imageURL: string;
}

export interface ITab {
  title?: string;
  context?: string;
}

export interface IMenuItem {
  text:string,
  hrefText:string,
}
