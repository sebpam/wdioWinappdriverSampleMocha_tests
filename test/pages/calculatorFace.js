class CalculatorFace {
    
    numberKey ( number ) {
        return $(`//*[@AutomationId=\"num${number}Button\"]`)
    }

    get plusSignKey () {
        return $("//*[@AutomationId='plusButton']");
    }

    get equalSignKey () {
        return $(`//*[@AutomationId=\"equalButton\"]`);
    }

    get calculationResult (){
        return $("//*[@AutomationId='CalculatorResults']");
    }

    get clearKey (){
        return $("//*[@AutomationId='clearButton']");
    }

    get clearMemomery(){
        return $("//*[@AutomationId='MemPlus']");
    }
    
}

export default CalculatorFace