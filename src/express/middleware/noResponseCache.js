module.exports = (req, res, next) => {
    res.set({
        'Expires': 'Mon, 20 Jul 1970 11:12:01 GMT',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache, must-revalidate'
    });

    next();
}