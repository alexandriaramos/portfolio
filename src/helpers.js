export function getImageSource(filename = '') {
    if (filename === '' || filename.startsWith('http')) {
        return filename;
    }
    return `static/img/${filename}`;
}
