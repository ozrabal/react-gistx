/**
 * Calculate column width
 * @param {Number} col number of columns in 12 columns layout
 * @returns {string} css width param
 */
export const width = (col) => {
    if (!col) return
    let width = col / 12 * 100
    return `width: ${width}%;`
}
