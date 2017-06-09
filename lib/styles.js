'use strict';

import React from 'react';
import { StyleSheet } from 'react-native';

const hairlineWidth = StyleSheet.hairlineWidth;

export const BG_COLOR = '#d2d5dc';


export default StyleSheet.create({
    wrapper: {
		flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f4f4f4'
    },
    main: {
        flex: 1,
        alignSelf: 'flex-end',
    },
    row: {
		flex: 1,
        flexDirection: 'row',
    }
});


export const keyStyle = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bd: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: hairlineWidth,
        borderTopWidth: hairlineWidth,
        borderColor: '#a5a5a5'
    },
    border: {
      borderColor: '#FFF'
    },
    mainText: {
        fontSize: 25,
        color: '#000'
    },
    otherText: {
        fontSize: 10,
        color: '#333',
    },
    bg_d2d5dc: {
        backgroundColor: BG_COLOR
    },
    bgLessL: {
      backgroundColor: '#fff'
    },
    dot: {
        height: 30,
        fontSize: 30,
        lineHeight: 25
    }
});
