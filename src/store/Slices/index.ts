import output from './output';
import imageFilters from './image-filters';
import cameraSettings from './camera-settings';
import contourFilters from './contour-filters';
import morphologicalFunctions from './morphological-functions';

import { combineReducers } from 'redux';


export default combineReducers({
    output: output.reducer,
    imageFilters: imageFilters.reducer,
    cameraSettings: cameraSettings.reducer,
    contourFilters: contourFilters.reducer,
    morphologicalFunctions: morphologicalFunctions.reducer
});

