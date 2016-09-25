export interface IMessage {

}

export class MessageArray {
    [index: string]: ISubscribeFunction
}

let messages: MessageArray = new MessageArray()

export interface ISubscribeFunction {
    (msg: string, data: any): any|void
}

export function subscribe(msg: string, callBack: ISubscribeFunction){
    messages[msg] = callBack;
}

export function unSubscribe(callBack: ISubscribeFunction){

}

export function publish(msg: string, data: any){

}