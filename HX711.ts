

/**
 * Events and data from sensors
 */
//% color=#D400D4 weight=111 icon="\uf192"
namespace hx711{

    let _DOUT_PIN: DigitalPin;
    let _CLK_Pin: DigitalPin;

    /**
     * Init pin for HX711
     * @param body TODO
     */
    //% block="Cài đặt HX711 với chân DOUT $pinDOUT và SCK $pinSCK"
    //% group=HX711
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    //% weight=50
    //% parts = ChipiIRReceiver trackArgs= 0
    export function HX711Begin(DOUTPin: DigitalPin, CLKPin: DigitalPin, gain = 128): void {
        _DOUT_PIN = DOUTPin;
        _CLK_Pin = CLKPin;
    }



}
