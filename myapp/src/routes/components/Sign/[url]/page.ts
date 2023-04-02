export function AllNames(): string[] {
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

export function RandomID(length: number) : any{
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.trunc(Math.random() * 10);
    }
    return result;
  }

