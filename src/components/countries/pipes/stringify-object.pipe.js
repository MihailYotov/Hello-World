import {Pipe} from 'angular2/core';

@Pipe({
    name: 'stringifyObject'
})
export class StringifyObject {
    transform(input) {
        if (input) {
            var result = '',
                type = Object.prototype.toString.call(input);

            switch (type) {
                case '[object String]':
                    return input;
                    break;
                case '[object Number]':
                    return input.toString();
                    break;
                case '[object Object]':
                    for (let i = 0; i < Object.keys(input).length; i++) {

                        result += Object.keys(input)[i] + ': ';
                        if (input[Object.keys(input)[i + 1]]) {
                            result += input[Object.keys(input)[i]] ? input[Object.keys(input)[i]] + ', ' : 'N/A';
                        } else {
                            result += input[Object.keys(input)[i]] ? input[Object.keys(input)[i]] : 'N/A';
                        }
                    }
                    return result;
                    break;
                case '[object Array]':
                    if (input.length) {
                        for (let i = 0; i < input.length; i++) {
                            if (input[i + 1]) {
                                result += input[i] + ', '
                            } else {
                                result += input[i]
                            }
                        }
                    } else {
                        result = 'N/A'
                    }
                    return result;
                    break;
                default:
                    return input
            }
        }
    }
}