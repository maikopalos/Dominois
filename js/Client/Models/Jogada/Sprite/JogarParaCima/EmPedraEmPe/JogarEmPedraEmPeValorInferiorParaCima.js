var JogarEmPedraEmPeValorInferiorParaCima = function() {}

JogarEmPedraEmPeValorInferiorParaCima.prototype.Jogar = function(pedra) {
	return new JogadaSprite
	(
		pedra.sprite.spritePhaser.position.y - (pedra.sprite.altura),
		Rotacao.NaoRotacionar
	);
}
