//Create a JS Module
export default class Data{
    constructor(){
    }
}
export function resistors(){
    return {
        "resitor":[
        {"value":'10', "colors": ['brown', 'black', 'black']},
        {"value":'15', "colors": ['brown', 'green', 'black']},
        {"value":'22', "colors": ['red', 'red', 'black']},
        {"value":'33', "colors": ['orange', 'orange', 'black']},
        {"value":'47', "colors": ['yellow', 'violet', 'black']},
        {"value":'68', "colors": ['blue', 'gray', 'black']},
        {"value":'100', "colors": ['brown', 'black', 'brown']},
        {"value":'120', "colors": ['brown', 'red', 'brown']},
        {"value":'150', "colors": ['brown', 'green', 'brown']},
        {"value":'180', "colors": ['brown', 'grey', 'brown']},
        {"value":'220', "colors": ['red', 'red', 'brown']},
        {"value":'270', "colors": ['red', 'violet', 'brown']},
        {"value":'330', "colors": ['orange', 'orange', 'brown']},
        {"value":'390', "colors": ['orange', 'white', 'brown']},
        {"value":'470', "colors": ['yellow', 'violet', 'brown']},
        {"value":'560', "colors": ['green', 'blue', 'brown']},
        {"value":'680', "colors": ['blue', 'grey', 'brown']},
        {"value":'1.0k', "colors": ['brown', 'black', 'red']},
        {"value":'1.2k', "colors": ['brown', 'red', 'red']},
        {"value":'1.5k', "colors": ['brown', 'green', 'red']},
        {"value":'1.8k', "colors": ['brown', 'grey', 'red']},
        {"value":'2.2k', "colors": ['red', 'red', 'red']},
        {"value":'2.7k', "colors": ['red', 'violet', 'red']},
        {"value":'3.3k', "colors": ['orange', 'orange', 'red']},
        {"value":'3.9k', "colors": ['orange', 'white', 'red']},
        {"value":'4.7k', "colors": ['yellow', 'violet', 'red']},
        {"value":'5.6k', "colors": ['green', 'blue', 'red']},
        {"value":'6.8k', "colors": ['blue', 'grey', 'red']},
        {"value":'10k', "colors": ['brown', 'black', 'orange']},
        {"value":'12k', "colors": ['brown', 'red', 'orange']},
        {"value":'15k', "colors": ['brown', 'green', 'orange']},
        {"value":'18k', "colors": ['brown', 'grey', 'orange']},
        {"value":'22k', "colors": ['red', 'red', 'orange']},
        {"value":'27k', "colors": ['red', 'violet', 'orange']},
        {"value":'33k', "colors": ['orange', 'orange', 'orange']},
        {"value":'39k', "colors": ['orange', 'white', 'orange']},
        {"value":'47k', "colors": ['yellow', 'violet', 'orange']},
        {"value":'56k', "colors": ['green', 'blue', 'orange']},
        {"value":'68k', "colors": ['blue', 'grey', 'orange']},
        {"value":'100k', "colors": ['brown', 'black', 'yellow']},
        {"value":'120k', "colors": ['brown', 'red', 'yellow']},
        {"value":'150k', "colors": ['brown', 'grey', 'yellow']},
        {"value":'180k', "colors": ['brown', 'grey', 'yellow']},
        {"value":'220k', "colors": ['red', 'red', 'yellow']},
        {"value":'270k', "colors": ['red', 'violet', 'yellow']},
        {"value":'330k', "colors": ['orange', 'orange', 'yellow']},
        {"value":'390k', "colors": ['orange', 'white', 'yellow']},
        {"value":'470k', "colors": ['yellow', 'violet', 'yellow']},
        {"value":'560k', "colors": ['green', 'blue', 'yellow']},
        {"value":'680k', "colors": ['blue', 'grey', 'yellow']},
        {"value":'1.0M', "colors": ['brown', 'black', 'green']},
        {"value":'1.5M', "colors": ['brown', 'green', 'green']},
        {"value":'2.2M', "colors": ['red', 'red', 'green']},
        {"value":'3.3M', "colors": ['orange', 'orange', 'green']},
        {"value":'4.7M', "colors": ['yellow', 'violet', 'green']},
        {"value":'6.8M', "colors": ['blue', 'grey', 'green']}
    ]
};
}

export function capacitors(){
    return  {
        "capacitor":[
            {"value":'10 pF'},
            {"value":'22 pF'},
            {"value":'47 pF'},
            {"value":'100 pF'},
            {"value":'220 pF'},
            {"value":'470 pF'},
            {"value":'0.001 uF'},
            {"value":'0.0022 uF'},
            {"value":'0.0047 uF'},
            {"value":'0.01 uF'},
            {"value":'0.022 uF'},
            {"value":'0.047 uF'},
            {"value":'0.1 uF'},
            {"value":'0.22 uF'},
            {"value":'0.47 uF'},
            {"value":'1 uF'},
            {"value":'2.2 uF'},
            {"value":'4.7 uF'},
            {"value":'10 uF'},
            {"value":'22 uF'},
            {"value":'47 uF'},
            {"value":'100 uF'},
            {"value":'220 uF'},
            {"value":'470 uF'}
        ]
    };
}

export function inductors(){
    return {
        "inductor":[
            {"value":'10 uH', "Amp":"3 A"},
            {"value":'100 uH',  "Amp":"0.91 A"},
            {"value":'1 mH',  "Amp":"0.15 A"},
            {"value":'10 mH',  "Amp":"0.04 A"}
        ]
    };
}