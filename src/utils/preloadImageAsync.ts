export default function preloadImageAsync(imageUrl: string): Promise<string> {
  return new Promise((resolve) => {
    const newImage = new Image();
    newImage.src = imageUrl;
    newImage.onload = () => {
      resolve(imageUrl);
    };
  });
}
