import { Collections } from "../_utils"

export interface IMessage {

}

let messages: Collections.HashMap<ISubscribeFunction> = new Collections.HashMap<ISubscribeFunction>()

export interface ISubscribeFunction {
    (msg: string, data: any): any|void
}

export function subscribe(msg: string, callBack: ISubscribeFunction){
    messages.add(msg, callBack);
}

export function unSubscribe(msg: string){
    messages.remove(msg);
}

export function publish(msg: string, data: any){
    messages.get(msg)(msg, data);
}