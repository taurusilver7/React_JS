function comp2Hex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

function rgb2Hex(r, g, b) {
    return '#' + comp2Hex(r) + comp2Hex(g) + comp2Hex(b);
};

export default rgb2Hex;