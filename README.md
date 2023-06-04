# qr-batch-generator
 Generate a batch of qr codes for given text

## How to
Run the index.js in a node environment

Change the following code(Ln 25, 7) to select the output text file name and path

- ```let filename = i.toString();```
- ```./special-qr-codes/F${filename}.png`,```

Change the following code(Ln 26) to select what needed to be in the qr.

- ```let text = `textNeeded/${i}.png`;```

Change the the code explained in comments as needed to change the configuration

## Dependancies

- qrcode
- fs