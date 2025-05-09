import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotification} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiFade, TuiNotification],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
