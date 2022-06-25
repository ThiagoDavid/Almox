// ---------Responsive-navbar-active-animation-----------
function test() {
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top": itemPosNewAnimTop.top + "px",
		"left": itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click", "li", function (e) {
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top": itemPosNewAnimTop.top + "px",
			"left": itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});

		mudarTela($(this).text().trim());
	});
}
function mudarTela(option) {
	
	switch (option) {
		case "Produtos":
			exibirTelaProdutos();
			break;
		case "Requisições":
			$('#main').text("Página de requisições")
			break;
		case "Peiddos":
			$('#main').text("Página de pedidos")
			break;
		case "Fornecedor":
			$('#main').text("Página de Fornecedor")
			break;
		case "Calendário":
			$('#main').text("Página de calendário")
			break;
			case "Documents":
				$('#main').text("Página de Documents")
				break;
			default:
				$('#main').text(" Deu ruim (" +option+")");
				break;	
	}

}
//Telas
function exibirTelaProdutos() {
	$('#main').html(`	
	<form class="form-inline">
	<div class="form-group mb-2">
	  <label for="staticEmail2" class="sr-only">Email</label>
	  <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
	</div>
	<div class="form-group mx-sm-3 mb-2">
	  <label for="inputPassword2" class="sr-only">Password</label>
	  <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
	</div>
	<button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
  </form>
`);
}
$(document).ready(function () {
	setTimeout(function () { test(); });
});
$(window).on('resize', function () {
	setTimeout(function () { test(); }, 500);
});
$(".navbar-toggler").click(function () {
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function () { test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if (path == '') {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
	// Add active class to target link
	target.parent().addClass('active');
});

// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });