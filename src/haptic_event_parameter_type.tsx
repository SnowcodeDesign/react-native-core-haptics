import { NativeModules } from 'react-native';

import type HapticEventParameterID from './haptic_event_parameter_id_type';

type HapticEventParameterType = {
    parameterID: typeof HapticEventParameterID;
    value: number;
};

const { 
    HapticEventParameter,
} = NativeModules;

export default HapticEventParameter as HapticEventParameterType;