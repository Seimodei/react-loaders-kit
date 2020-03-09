# React Loaders Kit

[![npm version](https://badge.fury.io/js/react-loaders-kit.svg)](https://www.npmjs.com/package/react-loaders-kit)
[![license](https://img.shields.io/npm/l/react-spinners.svg)]()

A simple yet robust and comprehensive collection of loading animations made with React.js based on inspiration from designers and developers on codepen.

This package was made using the [Emotion](https://emotion.sh/docs/introduction) css library.

## Demo Page

All loaders can be found on the demo page 

- [Demo Page](https://seimodei.github.io/react-loaders-kit-examples/)

## Installation

With npm:

```bash
npm install --save react-loaders-kit
```

With Yarn:

```bash
yarn add react-loaders-kit
```

## Usage

All loaders come with their own default properties. You have the option to overwrite these properties by passing in your own props into the loaders.

**IMPORTANT**: All loaders accept a `loading` prop as a boolean that is `required`. Without passing the loading prop, an `error` is thrown. The loader will render `none` if `loading` is `false`.

### Example

```js
import React, {useState} from "react";
import { BarsLoader } from 'react-loaders-kit';

//or

import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'; // Recommended to reduce bundle size

const MyWonderfulComponent = () => {
    const [loading, setLoading] = useState(true);

    const loaderProps = {
        loading,
        size: 35,
        duration: 1,
        colors: ['#5e22f0', '#f6b93b']
    }

    return (
        <BarsLoader {...loaderProps} />
    )
}

```

## Available Loaders, PropTypes, and Default Values

Common default props for all loaders:

```js
loading: true;
pause: false;
```

**IMPORTANT**: The `loading` prop is `REQUIRED` and needs to be passed for the loader to display.

### `pause` props

All loaders accept a `pause` prop which is a boolean. If `pause` is `true`, the animation is paused else it deafults to `playing`.

### `color` & `colors` props

Some loaders accept a `color` prop which is a color hash string in the format of `#XXXXXX` or `#XXX`.

Other loaders which have more customization accept a `colors` prop which is a string array of colors in the format of `['#XXXXXX', '#XXXXXX', ...]` or `['#XXX', '#XXX', ...]`.

### All loaders

The tables below contain the default values of each prop on all loaders.

#### `<AlternatingOrbitsLoader />`

| size: number | colors: string[]     |
| -------------|----------------------|
| 50           |['#5e22f0', '#f6b93b']|


#### `<AtomLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 50           |['#5e22f0', '#5e22f0']| 1                    |


#### `<BarsLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 35           |['#5e22f0', '#f6b93b']| 1                    |


#### `<BarsLoader2 />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 40           |'#5e22f0'             | 1.5                  |


#### `<BatteryLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 50           |'#5e22f0'             | 0.7                  |


#### `<BlobLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 40           |'#5e22f0'             | 1.3                  |


#### `<BlurrySquareLoader />`

| boxNumber: number | colors: string[]                | duration: number     |
| ------------------|---------------------------------|----------------------|
| 3                 |['#5e22f0', '#5e22f0', '#5e22f0']| 0.7                  |

##### NOTE: The number of boxes must correspond to the number of colors in the array


#### `<BouncyBallsLoader />`

| size: number      | colors: string[]                | duration: number     |
| ------------------|---------------------------------|----------------------|
| 40                |['#5e22f0', '#5e22f0', '#5e22f0']| 0.4                  |


#### `<BrokenCirclesLoader />`

| size: number      | colors: string[]                           |
| ------------------|--------------------------------------------|
| 40                |['#5e22f0', '#5e22f0', '#5e22f0', '#5e22f0']|


#### `<CircleFadeLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 40           |'#5e22f0'             | 0.5                  |


#### `<CirclePopLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 120          |'#5e22f0'             | 1                    |


#### `<ClockLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 40           |['#5e22f0', '#5e22f0']| 1                    |


#### `<DotsLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 45           |'#5e22f0'             | 2                    |


#### `<DoubleSquareLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 30           |['#5e22f0', '#5e22f0']| 2.5                  |


#### `<DrawWaveLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 50           |'#5e22f0'             | 0.8                  |


#### `<DyingLightLoader />`

| size: number      | colors: string[]                |
| ------------------|---------------------------------|
| 35                |['#5e22f0', '#5e22f0', '#5e22f0']|


#### `<EightBitLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 60           |'#5e22f0'             | 1                    |


#### `<ElasticCircleLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 40           |'#5e22f0'             | 1                    |


#### `<FillCircleLoader />`

| size: number      | colors: string[]     |
| ------------------|----------------------|
| 60                |['#5e22f0', '#5e22f0']|


#### `<FillSquareLoader />`

| size: number      | colors: string[]                           | duration: number     |
| ------------------|--------------------------------------------|----------------------|
| 40                |['#5e22f0', '#5e22f0', '#5e22f0', '#5e22f0']| 1                    |


#### `<FlipLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 45           |'#5e22f0'             | 1                    |


#### `<FlippingCubeLoader />`

| size: number      | colors: string[]                           |
| ------------------|--------------------------------------------|
| 35                |['#5e22f0', '#5e22f0', '#5e22f0', '#5e22f0']|


#### `<GooeyLoader1 />`

| size: number      | color: string        |
| ------------------|----------------------|
| 60                |'#5e22f0'             |


#### `<GooeyLoader2 />`

| size: number      | color: string        |
| ------------------|----------------------|
| 60                |'#5e22f0'             |


#### `<GooeyCircleLoader />`

| size: number      | colors: string[]                |
| ------------------|---------------------------------|
| 80                |['#f6b93b', '#5e22f0', '#ef5777']|


#### `<HelixLoader />`

| numberOfDots: number | numberOfDots: number | colors: string[]                | duration: number     |
| ---------------------| ---------------------|---------------------------------|----------------------|
| 90                   | 10                   |['#5e22f0', '#f6b93b']           | 1.5                  |


#### `<HydrogenLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 45           |['#5e22f0', '#5e22f0']| 0.6                  |


#### `<HypnosisLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 50           |['#ffffff', '#5e22f0']| 2                    |


#### `<BlurrySquareLoader />`

| size: number | jellyNumber: number | colors: string[]                                      | duration: number     |
| -------------| --------------------|-------------------------------------------------------|----------------------|
| 150          | 5                   |['#5e22f0', '#5e22f0', '#5e22f0', '#5e22f0', '#5e22f0']| 0.6                  |

#### NOTE: The number of jellies must correspond to the number of colors in the array


#### `<KissyBallsLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 60           |['#5e22f0', '#5e22f0']| 0.5                  |


#### `<LineLoader />`

| lineWidth: number | color: string        | duration: number     |
| ------------------|----------------------|----------------------|
| 25                |'#5e22f0'             | 2                    |


#### `<LinneardLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 130          |['#5e22f0', '#ef5777']| 0.8                  |


#### `<LiquidLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 40           |'#5e22f0'             | 2                    |


#### `<MovingSquareLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 60           |['#5e22f0', '#5e22f0']| 1                    |


#### `<NotepadLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 40           |['#5e22f0', '#5e22f0']| 2                    |


#### `<PingPongLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 90           |['#5e22f0', '#5e22f0']| 0.8                  |


#### `<PipLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 15           |'#5e22f0'             | 0.8                  |


#### `<PulseBubbleLoader />`

| size: number      | colors: string[]                |
| ------------------|---------------------------------|
| 55                |['#5e22f0', '#5e22f0', '#5e22f0']|


#### `<RotatingBoxesLoader />`

| size: number | boxBorderWidth: number | colors: string[]                           | duration: number     |
| -------------| -----------------------|--------------------------------------------|----------------------|
| 10           | 2                      |['#ffffff', '#ffffff', '#5e22f0', '#5e22f0']| 3                    |


#### `<RotatingCircleLoader />`

| size: number      | colors: string[]                           | duration: number     |
| ------------------|--------------------------------------------|----------------------|
| 20                |['#5e22f0', '#5e22f0', '#f6b93b', '#ef5777']| 1.2                  |


#### `<SlicesLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 80           |'#5e22f0'             | 1                    |


#### `<SlidingCubeLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 10           |['#5e22f0', '#5e22f0']| 1                    |


#### `<SphereLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 40           |'#5e22f0'             | 1                    |


#### `<SpinningCircleLoader />`

| size: number      | colors: string[]     |
| ------------------|----------------------|
| 50                |['#5e22f0', '#ffffff']|


#### `<SpinningOrbitLoader />`

| size: number      | colors: string[]                           |
| ------------------|--------------------------------------------|
| 50                |['#5e22f0', '#5e22f0', '#5e22f0', '#5e22f0']|


#### `<SwingingCubeLoader />`

| size: number | colors: string[]                | duration: number     |
| -------------|---------------------------------|----------------------|
| 18           |['#5e22f0', '#5e22f0', '#5e22f0']| 1                    |


#### `<SwitchingCubeLoader />`

| size: number | colors: string[]                | duration: number     |
| -------------|---------------------------------|----------------------|
| 20           |['#5e22f0', '#5e22f0', '#5e22f0']| 1                    |


#### `<TextureLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 40           |'#5e22f0'             | 0.7                  |


#### `<VolumeLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 35           |['#5e22f0', '#ffffff']| 0.6                  |


#### `<VortexLoader />`

| size: number | colors: string[]     | duration: number     |
| -------------|----------------------|----------------------|
| 40           |['#5e22f0', '#5e22f0']| 2                    |


#### `<WaveLoader />`

| size: number | color: string        | duration: number     |
| -------------|----------------------|----------------------|
| 40           |'#5e22f0'             | 0.6                  |



## Contributing

- Pull requests and ⭐ stars are always welcome
- For bugs and feature requests, please create an issue

## License

MIT