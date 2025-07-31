const isFileAnImage = (file: File): boolean => {
    return /(png|jpeg|jpg|webp)$/i.test(file.type);
};

const isFileAnVideo = (file: File): boolean => {
    return /(mp4|avi|webm|mov|mkv)$/i.test(file.type);
};

export {
    isFileAnImage,
    isFileAnVideo
};
