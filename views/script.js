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
			$('#main').text(" Deu ruim (" + option + ")");
			break;
	}

}
//Telas
function exibirTelaProdutos() {
	let paginaProduto = `
	<div class="btn-group" role="group" aria-label="Basic example">
		<button type="button" class="btn btn-secondary mb-3 mr-3 p-1" id="btnPesquisar"><i class="fa-solid fa-magnifying-glass"></i>Pesquisa</button>
		<button type="button" class="btn btn-secondary mb-3 mr-3 p-1" id="btnIncluir"><i class="fa-solid fa-file-import"></i></i>Incluir</button>
		<button type="button" class="btn btn-secondary mb-3 mr-3 p-1" id="btnEditar"><i class="fa-solid fa-file-signature"></i></i>Editar</button>
		<button type="button" class="btn btn-secondary mb-3 mr-3 p-1" id="btnExluir"><i class="fa-solid fa-trash-can"></i></i>Excluir</button>
	</div>
	<a class="float-right badge-sucess" href="javascript:void(0);" id="iconInfo"><i class="fa-solid fa-circle-question"></i></a>

		<form class="form-inline">
			<div class="form-group mb-2">        
				<select class="form-control" id="codigoProdutoSelect">
					<option>Código</option>
					<option>001</option>
					<option>002</option>
					<option>003</option>
					<option>004</option>
				</select>
			</div>
			<div class="form-group mx-sm-3 mb-2">
				<select class="form-control" id="tipoProdutoSelec">
					<option >Tipo</option>
					<option value="1">Parafuso</option>
					<option value="2">Ferramental</option>
					<option value="3">Produtos Químicos</option>
				</select>
			</div>
			<div class="btn-group" role="group" aria-label="Basic example">
				<div class="form-group mx-sm-3 mb-2">
					<button type="submit" class="btn btn-secondary "><i class="fa-solid fa-filter"></i>Filtrar</button>
				</div>
				<div class="form-group mx-sm-3 mb-2">
					<button type="submit" class="btn btn-secondary"><i class="fa-solid fa-delete-left"></i>Limpar</button>
				</div>
			</div>
		</form>

		<table class="table table-bordered">
			<thead class="thead-light">
				<tr>
					<th scope="col">Código</th>
					<th scope="col">Nome do protudo</th>
					<th scope="col">Quantidade</th>
					<th scope="col">Tipo</th>
					<th scope="col">Medida</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">001</th>
					<td>Parafuso sextavado 3/16</td>
					<td>24</td>
					<td>Parafuso</td>
					<td>Unidade</td>					
				</tr>
				<tr>
					<th scope="row">026</th>
					<td>Chave de fenda grande</td>
					<td>10</td>
					<td>Ferramental</td>
					<td>Unidade</td>
				</tr>
				<tr>
					<th scope="row">120</th>
					<td>Óleo sintético Wd 47</td>
					<td>5</td>
					<td>Produto Químico</td>
					<td>Unidade</td>
				</tr>
			</tbody>
		</table>
		<div class="btn-group" role="group" aria-label="Basic example">
			<button type="button" class="btn btn-secondary mb-3 mr-3 p-1" id="btnPesquisar"><i class="fa-solid fa-floppy-disk"></i>Salvar</button>
			<button type="button" class="btn btn-secondary mb-3 mr-3 p-1" id="btnIncluir"><i class="fa-solid fa-xmark"></i>Fechar</button>
		</div>
		
		`;
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