// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) return [];
    let sortedArr = [];

    matrix.map((elem, index) => {
        if (index % 2 === 0) {
            sortedArr = sortedArr.concat(elem);
        } else {
            sortedArr = sortedArr.concat(elem.reverse());
        }
    });

    return sortedArr;
};
