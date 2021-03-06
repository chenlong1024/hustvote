$(document).ready(function () {
    var vid = $('#vote-id').html();
    $('.get-qrcode').on('click', function () {
        var code = $(this).parent().parent().find('.code').html();
        var vote_url = $('#vote-url').html();
        var qrcode_url = $('#qrcode-url').html();
        var to_url = vote_url + '?code=' + code;
        
        var img_url = qrcode_url + '?data=' + to_url;
        $('#qrcode-img').attr('src', img_url);
        $('#qrcode-content').html(to_url);
        $('#modal-qrcode').modal();
    });

    $('.get-log').on('click', function () {
        var code = $(this).parent().parent().find('.code').html();
        $.ajax(
                {
                    url: "../getCodeLog/"+vid+'/'+code,
                    async: false,
                    method: "get",
                    dataType: "json",
                    success: function (data) {
                        if (data.status === true) {
                            $('#code-log').html(data.log);
                            $('#code-select').html(data.select);
                        } else {
                            $('#code-log').html("该邀请码还未被使用");
                            $('#code-select').html("");
                        }
                    }

                });
        $('#modal-log').modal();        
    });
});
