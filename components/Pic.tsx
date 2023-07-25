import React, { FC } from 'react';
import {
    Image as ReactImage, ImageStyle,
} from 'react-native';

const Pic: FC<{image: string, size: number, r?: number, style?: ImageStyle}> = ({image, size, r = 10, style = {}}) => {
    return (
        <ReactImage
            style={{ width: size, height: size, borderRadius: r, ...style }}
            source={{ uri: image }}
        />
    );
}

export default Pic;
