export interface IArr_obj {
  hwo: string;
  message: string;
}

export interface IArr {
  [index: number]: IArr_obj;
}
export interface IMessageUser {
  id: number;
  img: string;
  name: string;
  status: string;
  online: boolean;
  messages: IArr;
}

export interface C_MsUsers {
  user: IMessageUser;
  setIdx: number;
}