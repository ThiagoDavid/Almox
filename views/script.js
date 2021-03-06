import {gerarPaginaProduto, gerarPaginaPedidos, gerarPaginaRequisicoes} from "./geradorPaginas.js";
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
	
	$("#iconInfo").on("click", function(e) {
		alert("Exibir ajuda");
	});


}
function mudarTela(option) {

	switch (option) {
		case "Produtos":
			exibirTelaProdutos();
			break;
		case "Requisições":
			exibirTelaRequisicoes();
			break;
		case "Pedidos":			
			exibirTelaPedidos();
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
			$('#main').text(" Deu ruim (" + option + ")");
			break;
	}

}
//Telas
function exibirTelaRequisicoes() {
	let paginaRequisicoes = gerarPaginaRequisicoes();
	$('#form-body').html(paginaRequisicoes);
}
function exibirTelaPedidos() {
	let paginaPedidos = gerarPaginaPedidos();
	$('#form-body').html(paginaPedidos);
}
function exibirTelaProdutos() {
	let paginaProduto = gerarPaginaProduto();
	$('#form-body').html(paginaProduto);
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
	exibirTelaProdutos();
});