# Dynamic Pix QR Code

#### QR Code Generator

Run the code below to install the QR code dependency

```bash
npm install qrcode.react
```

On the page you need the QR code, use the import and the component like the example below:

```javascript
import { QRCodeSVG } from 'qrcode.react';

function PageWithQrcode() {
	return <QRCodeSVG value='http://hello.world/' />;
}

export default PageWithQrcode;
```

#### PIX Code Generator

Install the package in your project

```bash
npm install node-pix
```

Create Static Pix

```javascript
import { Payload } from 'node-pix';

function PageWithQrcode() {
  const codigoPix = Payload.generate({
    pixKey: '123e4567-e12b-12d1-a456-426655440000',
    merchant: {
      name: 'Fulano de Tal',
      city: 'BRASILIA',
    },
  });

	return (
    <p>{codigoPix.toString()}</p>;
    // 00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-4266554400005204000053039865802BR5913Fulano de Tal6008BRASILIA62070503***63041D3D
  )
}

export default PageWithQrcode;
```
