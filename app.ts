const select:Function = (el:string, all:boolean = false) => {
    el = el.trim();
    let element;
    if (all) {
        element =  Array.from (document.querySelectorAll(el)) 
    } else {
        element =  document.querySelector(el)
    }

    if(element === null){
    console.log('element not available or element returns null')
    }else{
        return element;
    }
}
 

let inputText:HTMLTextAreaElement = select('#inputText');
let repeatedText : HTMLTextAreaElement = select('#repeatedText') as HTMLTextAreaElement;
let clipboardBtn: NodeListOf<HTMLButtonElement> = select('.btn', true);
let repeatTimes : HTMLInputElement = select('#repeatTimes');
let delimiter : HTMLInputElement = select('#delimiter');

let inputTextFunction = () => {
    let delimiterVal = delimiter.value;
    let values: string = inputText.value+delimiterVal;
    let count:number = Math.floor(Number.parseInt(repeatTimes.value));
 
    let repeatedValue = values.repeat(count);
    repeatedText.value  = repeatedValue; 
}

inputText.addEventListener('input', () => {
    inputTextFunction()
})

repeatTimes.addEventListener('input', () => {
    inputTextFunction()
})

delimiter.addEventListener('input', () => {
    inputTextFunction()
})
