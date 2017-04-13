var Client = function(jogo){
    this.socket = io.connect();
    
    this.socket.on(EventosHelper.eventosServer.novoJogadorCriado, function (idJogador) {
        console.log("client: Id jogador recebido do server e encaminhado para o game. Id ".concat(idJogador));
        jogo.AoCriarNovoJogador(idJogador);
    });
};

Client.prototype.PedirRegistroNovoJogador = function() {
    console.log("client: Pedindo novo jogador para o server.");
    this.socket.emit(EventosHelper.eventosClient.novoJogadorEntrou);
};