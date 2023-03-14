export interface IEventItem{
  title:string,
  image:string,
  description:string,
}

export interface IProjectItem{
  name:string,
  details:string,
}

export interface IMember{
  id:number,
  name:string,
  postion:string,
  description:string,
  imageURL:string,
}

export interface ITab{
  title?:string,
  context?:string,
}
