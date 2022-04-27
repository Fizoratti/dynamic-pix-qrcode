import { QRCodeSVG } from 'qrcode.react';
import { Payload } from 'node-pix';

import './App.css';

function App() {
	const codigoPix = Payload.generate({
		pixKey: '123e4567-e12b-12d1-a456-426655440000',
		merchant: {
			name: 'Fulano de Tal',
			city: 'BRASILIA',
		},
	});

	return (
		<div className='App'>
			<p>{'Código PIX'}</p>
			<p>{codigoPix.toString()}</p>
			<QRCodeSVG value={codigoPix} />
		</div>
	);
}

export default App;
