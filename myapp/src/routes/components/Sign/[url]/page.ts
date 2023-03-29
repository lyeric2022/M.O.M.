function AllNames(): string[] {
	return [
		'SquishyPickle42',
		'FunkyMonkey69',
		'ZestyPenguin23',
		'GigglyGorilla88',
		'SpicyLlama11',
		'FluffyNinja99',
		'WackyWalrus47',
		'SillySausage27',
		'CheesyChimp21',
		'JollyJellyfish77',
		'KookyKangaroo55',
		'CrazyCrab13',
		'SneakySloth22',
		'BouncyBear44',
		'ZippyZebra66',
		'SnappySnail31',
		'PunkyPanda18',
		'FizzyFrog62',
		'ChattyChicken49',
		'GrouchyGiraffe72'
	];
}

export function RandomName(): string {
	let names: string[] = AllNames();
	let foundName = names[Math.floor(Math.random() * names.length)];
	console.log(foundName);
	return foundName;
}
