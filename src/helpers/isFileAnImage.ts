const isFileAnImage = (file: File): boolean => {
    return /(png|jpeg|jpg|webp)$/i.test(file.type);
};

export default isFileAnImage;
