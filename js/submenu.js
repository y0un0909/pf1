$(document).ready(function () {
    $(".rs").hide();
    $(".ham").click(function(){
        // $(".rs").slideToggle(100);
        $(".rs").animate({width:"toggle"},210);
    });
    $(".rs .sb .rsb").hide();
    $(".rs .sb li h2").click(function(){
        $(this).parent().children(".rsb").slideToggle(500);
    });
    $(".h5").click(function(){
        $(this).parent().children(".rrr1").slideToggle(300);
        $(this).parent().children(".side").slideToggle(300);
    });

    
    //li에 마우스를 올리면 실행하시오 $("li").hover();
    $("ul.gnb > li").hover( //hover 사용자행위(이벤트)
        function () { //마우스엔터 mouseenter이벤트
            $(this).parent("ul.submenu").removeClass("submenuup");
            // this는 hover한 li,addClass()는 클래스를 붙여라
            // $(this).find("ul.submenu").addClass("submenushow");
            // $(this).siblings().find("ul.submenu").removeClass("submenushow");
            //서브메뉴가 submenuani가 없는 상태일때 실행문
            //(처음오버시에만 작동시킬것) 서브메뉴 애니실행
            if ($("ul.submenu").hasClass("submenuani") == 0) {
                $("ul.submenu").addClass("submenuani");//서브메뉴 애니메이션되게 submenuani클래스붙임
                // $(this).siblings().find("ul.submenu").removeClass("submenuani");
                $(this).find("ul.submenu").addClass("submenushow"); // 서브메뉴가 보이게 submenushow클래스 붙임
                $(this).siblings().find("ul.submenu").removeClass("submenushow");
                console.log("1-if");
            }
            // 다른 서브메뉴에 오버시 서브메뉴 보임(애니는 안되게)
            else {
                //(처음 올린) 서브메뉴에 다시 마우스올린 경우
                if ($(this).find("ul.submenu").hasClass("submenuani") == 1) {//submenuani클래스를 가진 메뉴에 마우스올린경우
                    $(this).find("ul.submenu").removeClass("submenuani");//애니메이션안되게 submenuani제거
                    $(this).find("ul.submenu").addClass("submenushow"); // 서브메뉴가 보이게
                    $(this).siblings().find("ul.submenu").removeClass("submenushow"); // 다른 서브메뉴 안보이게
                    $(this).siblings().find("ul.submenu").addClass("submenuani"); // 다른 서브메뉴에 submenuani클래스붙여서 처음if문으로 가지 않게.가면 다시 애니시작되기에,이미 서브메뉴가 보인상태에서는 클래스가 붙어도 애니가 되지 안ㄶ는다.  
                    console.log("2-else>if");
                } else {
                    // $(this).find("ul.submenu").addClass("submenushow");
                    // $(this).siblings().find("ul.submenu").removeClass("submenushow");
                    console.log("3-else>else");
                }
            }
            $("button.close").remove();
            $("ul.submenu").append("<button class='close'>닫기</button>");

            $("button.close").click(
                function () {
                    //submenu를 안보이게..
                    $(".submenu").removeClass("submenuani submenushow");
                    $(this).parent("ul.submenu").addClass("submenuup");
                    //먼들어보는중    
                    if ($("button.close").parent("ul.submenu").hasClass("submenuup") == 1) {
                        $(".submenu").removeClass("submenuani submenushow submenuup");
                    }
                }
            );
        },
        // function(){ //마우스나갔을때 mouseleave이벤트
        //     $("ul.submenu").find(".close").remove();
        //     $(this).find(".submenu").removeClass("submenuani submenushow");
        // }
    );
    // 서브메뉴를 div로 둘러싸고 닫기버튼 배치하기
    // $("ul.submenu").wrap("<div class='wsubmenu'></div>");
    // $("div.wsubmenu").append("<button class='close'>닫기</button>");
    //메인내용중 전문만 남기고 나머지 감추기
    // $("#governance section article:not(:first-of-type)").hide();
    $("#governance section article").not(":first-of-type").hide();
    // 목록 클릭시 해당 메인이 보이게 하기

    $(".navtab li a").click(
        function () {
            // $("article").show(); $("article").fadeIn(); $("article").slideUp();
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            $(this).parent().siblings().children("a").removeClass("blue");
            $(".navlist:nth-of-type(" + ($(this).parent().index() + 1) + ")").show(500);
            $(".navlist").not(".navlist:nth-of-type(" + ($(this).parent().index() + 1) + ")").hide(200);

            console.log($(this).parent().index());
            return false;
        }
    );

    $('.box').click(function () {
        $().remove('.show');
        $('.box1').show();
    });

    /*$("#governance section div ul li:nth-child(1) a").click(
        function(){
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            $("article:nth-of-type(1)").show();
            $("article").not("article:nth-of-type(1)").hide();
            return false;
        }
    );
    $("#governance section div ul li:nth-child(2) a").click(
        function(){
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            $("article:nth-of-type(2)").show();
            $("article").not("article:nth-of-type(2)").hide();
            return false;
        }
    );
    */
    // 영역에서 마우스가 벗어나면 서브메뉴 닫힘
    // $("ul.gnb").mouseleave(function(){
    //     $(this).find("ul.submenu").removeClass("submenushow submenuani");
    //     $("ul.gnb > li").children("ul.submenu").addClass("submenuup");
    //     $("ul.gnb > li").siblings().children("ul.submenu").removeClass("submenuup");
    // });
    $("ul.gnb > li").mouseleave(function () {
        $(this).find("ul.submenu").removeClass("submenushow submenuani");
        $(this).find(".submenu").addClass("submenuup")
        $(this).siblings().children(".submenu").removeClass("submenuup")
        // $(this).children("ul.submenu").detach("submenuup");
    });
    // governance 기업지배구조현장
    // let show = false;
    $("ol li").click(function () {//!().명령어() 앞에 !붙이면 not으로 사용가능
        $(this).children(".box1").slideToggle();
        $(this).children("ol li h3").toggleClass("back2");
        if ($(this).children('h3').hasClass("back2") == 1) {
            $(".allcheck").text("전체접기").addClass('back');
        }
        else {
            $(".allcheck").text("전체보기").removeClass('back');
        }
    let hideMenus = true;
    $(".navlist .check .allcheck").click(function(){
        if(hideMenus){
            // 메뉴가 숨겨져있는 상태일 때 전체보기 버튼을 누른 경우

            // 전체보기 버튼을 전체 감추기 버튼으로 변경
            $(this).addClass("back");
            $(this).text("전체접기");
            
            // 모든 메뉴들 보여주기
            $("#governance section .navlist ol li").find("h3").addClass("back2");
            $("#governance section .navlist ol li").find(".box1").slideDown();
            
            // 전체 메뉴를 보여줬으니 다음에 전체 감추기 버튼 클릭시 아래 else명령을 실행하기 위해 
            // hideMenus 변수를 false(거짓)으로 바꿔준다.
            hideMenus = false;

        }else{
            // 메뉴가 전부 보여져 있는 상태에서 전체 감추기 버튼을 누른 경우

            // 전체 감추기 버튼을 전체보기 버튼으로 변경
            $(this).removeClass("back");
            $(this).text("전체보기");
            

            // 펼쳐져 있던 메뉴들을 전부 안보이도록 가려준다.
            $("#governance section .navlist ol li").find("h3").removeClass("back2");
            $("#governance section .navlist ol li").find(".box1").slideUp();


            // 전체 메뉴들을 감췄으니 다음에 이 버튼을 누를 경우 if()명령을 실행하기 위해 
            // 아래 변수에 true(참)를 입력해준다.
            hideMenus = true;
        }
    });
        // if (show == true) {
        //     $(this).find(".box1").slideUp(500);
        //     $(this).find("h3").removeClass("back");
        //     show = false;
        //     $(this).find(".box1").addClass("hide");
        //     $(this).find("h3").removeClass("back");
        // } else {
        //     $(this).find(".box1").removeClass("hide").slideDown(500);
        //     $(this).find("h3").addClass("back");
        //     show = true;
        // }
    });
    var sw = 0;
    $(".allcheck").click(function () {
        // $('ol li h3').removeClass("back2");
        $(".box1").slideToggle();
        $(this).toggleClass("back");
        if ($(this).hasClass("back") == 1) {

        }
        else {
            $(this).text("전체보기");

        };

        //     if (sw == 0) {
        //         $(this).removeClass('on');
        //         $(this).text('전체보기');
        //         $("ol li h3").removeClass("back");
        //         $("ol li").find(".box1").slideUp(500);
        //         sw = 1;
        //     } else {
        //         $(this).addClass('on');
        //         $(this).text('전체접기');
        //         $("ol li").find(".box1").addClass("show");
        //         $("ol li h3").addClass("back");
        //         $("ol li").find(".box1").removeClass("hide").slideDown(500);
        //         sw = 0;
        //     }
    });

});