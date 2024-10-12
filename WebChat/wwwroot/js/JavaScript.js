$(function () {
    $("#Enviar").click(function () {
        // Traz a variável mensagem do input
        var mensagem = $("#mensagem").val();
        // Traz o método HttpPost do controller
        var stringUrl = "api/Chat";

        $.ajax({
            type: "POST",
            url: stringUrl,
            async: false,
            data: { mensagem: mensagem },

            success: function (data) {
                // Cria uma data para ser colocada junto à mensagem
                let date = new Date();
                let formattedDate = date.toLocaleString();

                // Mensagem do usuário
                var mensagemUsuario = `<div class="mensagem-usuario"><strong>Eduardo Rodolfo de Simas:</strong><br>${mensagem.replace(/\n/g, "<br>")}<small>${formattedDate}</small></div>`;
                // Mensagem do bot
                var mensagemBot = `<div class="mensagem-bot"><strong>Bot:</strong><br>${data.resposta.replace(/\n/g, "<br>")}<small>${formattedDate}</small></div>`;

                // Atualiza a div com as novas mensagens
                $("#displaymensagem").append(mensagemUsuario + "<br>" + mensagemBot + "<br>"); // Adiciona as novas mensagens

                $("#mensagem").val(""); // Limpa o campo de mensagem
                // Rola para o final do container
                $("#displaymensagem").scrollTop($("#displaymensagem")[0].scrollHeight);
            }
        });
    });
});
