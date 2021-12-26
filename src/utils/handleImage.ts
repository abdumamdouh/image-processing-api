import sharp from 'sharp';

const resizeImg = async (
    fP: string,
    outPath: string,
    w: number,
    h: number
): Promise<void> => {
    await sharp(fP).resize(w, h).toFile(outPath);
};

export default resizeImg;
