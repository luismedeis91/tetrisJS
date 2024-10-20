Mudaças feitas tecla Z e Espaço




function rodarPecaEsquerda() {
		var proximoPadrao = peca.tetramino[(peca.tetraminoN - 1 + peca.tetramino.length) % peca.tetramino.length];
		var recuo = 0; 

		if (colisao(0, 0, proximoPadrao)) { // verificar se tem colisão
			if (peca.x > COLUNA / 2) {
				recuo = -1;
			} else {
				recuo = 1;
			}
		}

		if (!colisao(recuo, 0, proximoPadrao)) { // verificar colisão com recuo
			apagarPeca();
			peca.tetraminoN = (peca.tetraminoN - 1 + peca.tetramino.length) % peca.tetramino.length; // (-1) faz com que a rotação aconteça para a esquerda
			peca.tetraminoAtivo = peca.tetramino[peca.tetraminoN];
			peca.x += recuo;
			desenharPeca();
		}
	}




function controlarPeca(evento) {
		var tecla = evento.keyCode;

		if (tecla == 37) {
			moverEsquerda(); // seta esquerda
			inicioDescida = Date.now();
		} else if (tecla == 90) {
			rodarPecaEsquerda(); // tecla Z
			inicioDescida = Date.now();
		} else if (tecla == 39) {
			moverDireita(); // seta direita
			inicioDescida = Date.now();
		} else if (tecla == 40) {
			moverAbaixo(); // seta baixo
		} else if (tecla == 32) {
			moverAbaixo() // barra de espaço
		} else if (tecla == 38) {
			rodarPeca() // seta cima (rodar para a direita)

		}
	}
