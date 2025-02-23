import React from 'react';
import { Link } from 'react-scroll';
import Button from '../../UI/Button';
import bitcoin from './media/bitcoin.png';
import s from './index.module.css';

export default function CryptoBlock() {
	return (
		<section className={s.crypto_container}>
			<div className={['wrapper', s.crypto_block].join(' ')}>
				<div>
					<h2>Bezahlen Sie Ihre Wohnung mit Krypto </h2>
					<p>
						Bei uns haben Sie die Möglichkeit Ihre Wohnung mit Kryptowährungen
						zu kaufen! Interesse? Fragen Sie hier an!
					</p>
					<Link
						to="consultant"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
					>
						<Button> Mehr</Button>
					</Link>
				</div>

				<div>
					<img src={bitcoin} alt="bitcoin" />
				</div>
			</div>
		</section>
	);
}
