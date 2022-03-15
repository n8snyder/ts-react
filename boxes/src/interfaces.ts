export interface IBox {
  id: string;
  width: number;
  height: number;
  backgroundColor: string;
  remove: Function;
}

export interface IFormData {
  height: string,
  width: string;
  backgroundColor: string;
}

export interface ICreateBox {
  createBox: Function
}