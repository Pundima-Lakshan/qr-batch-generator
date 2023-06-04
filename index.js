const QRCode = require("qrcode");
const fs = require("fs");

const generateQrCode = async (text, filename) => {
  try {
    const response = await QRCode.toFile(
      `./special-qr-codes/F${filename}.png`,
      text,
      {
        errorCorrectionLevel: "Q", // Set error correction level to 'H' for high accuracy
        width: 800, // Set width to 400 pixels
        height: 800, // Set height to 400 pixels
      }
    );
    console.log(text);
    console.log(`${filename}`);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  // Generate 250 QR codes with filenames "001.png" to "250.png"
  for (let i = 1; i <= 100; i++) {
    let filename = i.toString();
    let text = `textNeeded/${i}.png`;
    await generateQrCode(text, filename);
  }
})();
