import { prettyFormatTime } from './strfmt'

const chat_templ = <HTMLDivElement>document.getElementById('live-chat-item-template');
const sc_templ = <HTMLDivElement>document.getElementById('live-chat-sc-template');

type TimeClickCallback = (eventArg: PointerEvent) => void;

export class LiveChatItem {
    node: HTMLDivElement;
    c_content: HTMLSpanElement;
    c_name: HTMLSpanElement;
    c_badges: HTMLSpanElement;
    c_time: HTMLSpanElement;

    constructor(timeInMs: number, timeClickFn: TimeClickCallback) {
        this.node = <HTMLDivElement>chat_templ.cloneNode(true);
        this.node.removeAttribute('id');
        this.c_content = <HTMLSpanElement>this.node.getElementsByClassName('c_content')[0];
        this.c_name = <HTMLSpanElement>this.node.getElementsByClassName('c_name')[0];
        this.c_badges = <HTMLSpanElement>this.node.getElementsByClassName("c_badges")[0];
        this.c_time = <HTMLSpanElement>this.node.getElementsByClassName('c_time')[0];
        this.c_time.setAttribute('time_in_ms', timeInMs.toString());
        this.c_time.innerHTML = prettyFormatTime(timeInMs);
        this.c_time.onclick = timeClickFn;
    }
}

export class LiveChatSC {
    node: HTMLDivElement;
    c_header: HTMLSpanElement;
    c_name: HTMLDivElement;
    c_paid: HTMLDivElement;
    c_text: HTMLDivElement;
    c_time: HTMLSpanElement;

    constructor(timeInMs: number, timeClickFn: TimeClickCallback) {
        this.node = <HTMLDivElement>sc_templ.cloneNode(true);
        this.node.removeAttribute('id');
        this.c_header = <HTMLDivElement>this.node.getElementsByClassName('header')[0];
        this.c_text = <HTMLDivElement>this.node.getElementsByClassName('text')[0];
        this.c_name = <HTMLDivElement>this.node.getElementsByClassName('name')[0];
        this.c_paid = <HTMLDivElement>this.node.getElementsByClassName('paid')[0];
        this.c_time = <HTMLSpanElement>this.node.getElementsByClassName('c_time')[0];
        this.c_time.setAttribute('time_in_ms', timeInMs.toString());
        this.c_time.innerHTML = prettyFormatTime(timeInMs);
        this.c_time.onclick = timeClickFn;
    }

    setStickerMode() {
        this.node.setAttribute("class", "live-chat-sticker");
    }

    setGiftMode() {
        this.node.setAttribute("class", "live-chat-gift");
    }
}