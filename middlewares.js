import colors from 'colors';

export function requestTime(req, res, next) {
    const date = new Date();
    req.requestTime = date;

    next();
}

export function logger(req, res, next) {
    console.log(colors.bgCyan.black(`request time: ${req.requestTime}`));

    next();
}