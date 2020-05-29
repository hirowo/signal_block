//% weight=70 icon="\uf075" color=#0000FF block="信号機"
namespace comment {
    let p1 = DigitalPin.P0;
    let p2 = DigitalPin.P16;

    //% blockId=INIT block="ピン指定 %PIN1 %PIN2 %v"
    export function init(PIN1: DigitalPin, PIN2: DigitalPin){
        p1 = PIN1;
        p2 = PIN2;
        return p1
    }
    //% block="前%v"
    
    export function Forward() {

        return 1
    }


    //% blockId=show_strings block="赤を点灯 %v"
    export function aka(): void {
        pins.digitalWritePin(p1, 0)
        pins.digitalWritePin(p2, 1)
    }
    //% blockId=sono2 block="黄色を点灯 %v"
    export function kiiro(): void {
        pins.digitalWritePin(p1, 1)
        pins.digitalWritePin(p2, 0)
    }
    //% blockId=sono3 block="緑を点灯 %v"
    export function midori(): void {
        pins.digitalWritePin(p1, 0)
        pins.digitalWritePin(p2, 0)
    }
    //% blockId=sono4 block="全部消す %v"
    export function kesu(): void {
        pins.digitalWritePin(p1, 1)
        pins.digitalWritePin(p2, 1)
    }

}

