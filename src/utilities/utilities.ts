export enum Colors {
    Purple = '#5e22f0',
    Yellow = '#f6b93b',
    Pink = '#ef5777'
}

export const convertToRgba = (colorString: string, colorOpacity: number) => {
    colorString = colorString.replace('#','');
    const r = parseInt(colorString.substring(0,2), 16);
    const g = parseInt(colorString.substring(2,4), 16);
    const b = parseInt(colorString.substring(4,6), 16);

    const result = 'rgba('+r+','+g+','+b+','+colorOpacity/100+')';

    return result;
}

export const loaderDuration = (customDuration: number | undefined, defaultDuration: number) => {
    return `${customDuration ? customDuration : defaultDuration}s`;
}

export const loaderColor = (customColor: string | undefined, defaultColor: string) => {
    return `${customColor ? customColor : defaultColor}`;
}

export const pauseAnim = (pauseState: boolean | undefined) => {
    return `${pauseState ? 'paused' : 'running'}`;
}

export const lightenDarkenColor = (col: string, amt: number) => {
  
    var usePound = false;
  
    if (col[0] === "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}