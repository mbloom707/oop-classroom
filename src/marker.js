class Marker {
  constructor(size, color, remainingInk) {
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }

  write(string) {
    let strLength = string.split(' ');

    if(this.remainingInk >= strLength) {
      this.remainingInk -= strLength;
      return string;
    } else {
      // Add check to see how much is remaining
      // let remainingStr -= strLength // Would this work?
      this.remainingInk = 0;
      // Find method to find to write out what can still be wrote
      // Add ability to still write spaces
    }
  }
}

module.exports = Marker
