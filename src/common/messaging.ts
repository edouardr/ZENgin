export interface IMessage {

}

export class MessageArray {
    [index: string]: ISubscribeFunction[]
}

let messages: MessageArray = new MessageArray()

export interface ISubscribeFunction {
    (msg: string, data: IMessage): IMessage|void
}

export function subscribe(msg: string, callBack: ISubscribeFunction){
    if (messages[msg] === undefined){
        messages[msg] = new Array<ISubscribeFunction>();
    }

    messages[msg].push(callBack);
}

export function unSubscribe(callBack: ISubscribeFunction){

}

export function publish(msg: string, data: IMessage){
    messages[msg].forEach(c =>{
        c(msg, data);
    })
}