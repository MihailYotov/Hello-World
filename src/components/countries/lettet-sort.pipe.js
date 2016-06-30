import {Pipe} from 'angular2/core';

@Pipe({
    name: 'letter'
})
export class LetterPipe {
    transform(input, letter) {
        debugger;
        if (letter != '') {
            var result = [];

            for (var i = 0; i < Object.keys(input).length; i++) {
                let firstLetter = input[i].name.charAt(0);
                if (firstLetter == letter) {
                    result.push(input[i])
                }
            }
            return result

        } else {
            return input
        }
    }
}