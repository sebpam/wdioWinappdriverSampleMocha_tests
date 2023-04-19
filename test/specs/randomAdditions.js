import cTests from '../validations/calculatorFaceTests.js'
import fs from "fs";
const x = fs.readFileSync(process.cwd() + '/test/testScenarios/additions.json');
const scenarios = Object.assign({}, JSON.parse(x.toString()));

for( let scenario in scenarios ){
    describe('Additions Tests', () => {
        cTests.validateAdditions( scenarios[ scenario ] );
    });
}