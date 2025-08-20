import fz from '../converters/fromZigbee';
import tz from '../converters/toZigbee';
import * as exposes from '../lib/exposes';
import * as reporting from '../lib/reporting';
import {Definition} from '../lib/types';
const e = exposes.presets;

const definitions: Definition[] = [
   
        zigbeeModel: ['SMCWA10-Z'],
        model: 'SMCWA10-Z',
        vendor: 'SNC Networks',
        description: 'Water leak detector',
        fromZigbee: [fz.ias_water_leak_alarm_1, fz.battery],
        toZigbee: [],
        exposes: [e.water_leak(), e.battery_low(), e.tamper()],
    },
];

export default definitions;
module.exports = definitions;
