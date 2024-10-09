$(function () {

    $("#Enviar").click(
        function () {

            // Traz a variável mensagem do index
            var mensagem = $("#mensagem").val();

            // Traz o método HttpPost do controller
            var stringUrl = "api/Chat";

            $.ajax({
                type: "POST",
                url: stringUrl,
                async: false,
                data: { mensagem : mensagem },

                success: function (data) {

                    let date = new Date();
                    let formattedDate = date.toLocaleString();

                    $("#displaymensagem").append("\nEduardo Rodolfo de Simas:\n " + mensagem + "\n" + formattedDate + "\n");
    
                    $("#displaymensagem").append("\nBot: \n" + data.resposta + "\n" + formattedDate + "\n");

                    $("#mensagem").val("");
                }
            });
        }
    );
});