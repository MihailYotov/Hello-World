import {Pipe} from 'angular2/core';

@Pipe({
    name: 'transformkeys'
})
export class TransformKeysPipe {
    transform(inputObj) {
        //return JSON.stringify(inputObj);
        if (inputObj) {
            let result = [];
            for (var i = 0; i < Object.keys(inputObj).length; i++) {
                let tempObj = {};
                tempObj.key = Object.keys(inputObj)[i];
                tempObj.val = inputObj[Object.keys(inputObj)[i]] ? inputObj[Object.keys(inputObj)[i]] : 'N/A';
                result.push(tempObj);
            }
            return result;
        }
    }
}