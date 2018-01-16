
class ColorUtil{

  componentToHex(c){
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  // generate random pastel from string (first two letters)
  pastelHex(string) {
    //TODO: adjust base colour values below based on theme
    var baseRed = 128;
    var baseGreen = 128;
    var baseBlue = 128;
    //lazy seeded random hack to get values from 0 - 256
    //for seed just take bitwise XOR of first two chars
    var seed = string.charCodeAt(0) ^ string.charCodeAt(1);
    var rand_1 = Math.abs((Math.sin(seed++) * 10000)) % 256;
    var rand_2 = Math.abs((Math.sin(seed++) * 10000)) % 256;
    var rand_3 = Math.abs((Math.sin(seed++) * 10000)) % 256;
    //build colour
    var red = Math.round((rand_1 + baseRed) / 2);
    var green = Math.round((rand_2 + baseGreen) / 2);
    var blue = Math.round((rand_3 + baseBlue) / 2);
    return "#" + this.componentToHex(red) + this.componentToHex(green) + this.componentToHex(blue);
  }


  shadeHex(color, percent) {   
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
  }

}

module.exports = ColorUtil;