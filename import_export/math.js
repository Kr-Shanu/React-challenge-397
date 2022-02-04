const pi = 3.1415962;

function doublePi() {
    return pi * 2;
}

function triplePi() {
    return pi * 3;
}

// exporting  pi
export default pi;

// Exporting other things, which wont come under pi as non default option
export { doublePi, triplePi };