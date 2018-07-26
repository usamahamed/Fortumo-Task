

 var initialServiceUrl = 'https://res.cloudinary.com/itgov/raw/upload/v1532636985/first-service.json';

            function callServiceProvider(url) {
              $('.percent').show();
                //timeout for a while to show services
                var timerId = 0,
                timerId = setTimeout(function(){
                    $.ajax({
                    url: url,
                    dataType: 'json',
                    success: function(data) {


        /****** do progress bar stuff ******/
        $('.img-responsive').show();

        if (data.id=="1"){
        $('#progress-bar').val('0');
        $(this).nextAll().removeClass('border-change');  
        $('.percent').html(`Begin loading Second services <img src='https://i.pinimg.com/originals/59/87/d6/5987d63718f1a0bb8d2d53a26c601ff6.gif' width="50px" height="50px" alt=""/> `);
       }else if (data.id=="2"){
        $(this).nextAll().removeClass('border-change');  
        $('#progress-bar').val('34');
        $(this).prevAll().addClass('border-change');  
        $(this).addClass('border-change');
         $('.percent').html(`Begin loading third service <img src='https://i.pinimg.com/originals/59/87/d6/5987d63718f1a0bb8d2d53a26c601ff6.gif' width="50px" height="50px" alt=""/>`);
       }else if (data.id=="3"){
        $(this).nextAll().removeClass('border-change');  
        $('#progress-bar').val('67');
        $(this).prevAll().addClass('border-change'); 
        $(this).addClass('border-change');
        $('.percent').html(`Begin loading last service <img src='https://i.pinimg.com/originals/59/87/d6/5987d63718f1a0bb8d2d53a26c601ff6.gif' width="50px" height="50px" alt=""/>`);
       } else if(data.id=="4"){
        $('#progress-bar').val('100');
         $(this).addClass('border-change');
        $(this).prevAll().addClass('border-change');
         $('.percent').html(`Redirect After 5s <img src='https://i.pinimg.com/originals/59/87/d6/5987d63718f1a0bb8d2d53a26c601ff6.gif' width="50px" height="50px" alt=""/>`);
       }
        /****** End progress bar ******/
        //Visualize API response 
         $('.name').html(data.name);
         $('.dis').html(data.description); 
         $('.img-responsive').attr("src",data.img)

                       //check activity itrativly until redirect
                        if (data.activity === 'xhr') {
                            callServiceProvider(data.activity_url);
                            return;
                        }
                        if (data.activity === 'redirect') {
                            var timerId = 0,
                            //timeout for some time before redirect
                          timerId = setTimeout(function(){
                          window.location = data.activity_url;
                            return;
                            }, 6000)
                        }

                    }

                });
                }, 6000)
            }

            //initial call
            $(document).ready(function() {
                $('#start').on('click', function() {
                    $('#start').off();
                    callServiceProvider(initialServiceUrl);
                });
            });
