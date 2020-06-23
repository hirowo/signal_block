//% weight=70 icon="\uf075" color=#0000FF block="信号機"
namespace comment {
    let p1 = DigitalPin.P0;
    let p2 = DigitalPin.P16;
    export class SIGNAL_LIHGHT {
        pin1: DigitalPin;
        pin2: DigitalPin;        
    }
    
    //% blockId=INIT block="ピン指定 %PIN1 %PIN2 %v"
    export function init(PIN1: DigitalPin, PIN2: DigitalPin) :SIGNAL_LIHGHT{
        let block = new SIGNAL_LIHGHT();
        block.pin1 = PIN1;
        block.pin2 = PIN2;
        return block
    }
  
    //% blockId=show_strings block="赤を点灯 %v"
    export function aka(ASAIN: SIGNAL_LIHGHT): void {
        pins.digitalWritePin(ASAIN.pin1, 0)
        pins.digitalWritePin(ASAIN.pin2, 1)
    }
    //% blockId=sono2 block="黄色を点灯 %v"
    export function kiiro(ASAIN: SIGNAL_LIHGHT): void {
        pins.digitalWritePin(ASAIN.pin1, 1)
        pins.digitalWritePin(ASAIN.pin2, 0)
    }
    //% blockId=sono3 block="緑を点灯 %v"
    export function midori(ASAIN: SIGNAL_LIHGHT): void {
        pins.digitalWritePin(ASAIN.pin1, 0)
        pins.digitalWritePin(ASAIN.pin2, 0)
    }
    //% blockId=sono4 block="全部消す %v"
    export function kesu(ASAIN: SIGNAL_LIHGHT): void {
        pins.digitalWritePin(ASAIN.pin1, 1)
        pins.digitalWritePin(ASAIN.pin2, 1)
    }

}

