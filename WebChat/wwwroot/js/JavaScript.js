$(function () {

    $("#Enviar").click(
        function () {

            var mensagem = $("#mensagem").val();

            var stringUrl = "api/Chat";

            $.ajax({
                type: "POST",
                url: stringUrl,
                async: false,
                data: { mensagem : mensagem },

                success: function (data) {

                    let now = new Date();
                    let formattedDate = now.toLocaleString();

                    $("#displaymensagem").append("\nEduardo Rodolfo de Simas:\n " + mensagem + "\n" + formattedDate + "\n");
    
                    $("#displaymensagem").append("\nGrazi: \n" + data.resposta + "\n" + formattedDate + "\n");

                    $("#mensagem").val("");
                }
            });
        }
    );
});