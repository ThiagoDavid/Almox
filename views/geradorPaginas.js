export const gerarPaginaRequisicoes = () => {
  return `<div class="container">
  <div class="row row-cols-5">
    <div class="col">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" aria-label="Search">
            
          </form>
        </div>
      </nav>
    </div>
    <div class="col"><a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button"
        aria-pressed="true"><span class="material-symbols-outlined">
          format_list_numbered
        </span>Nº Requisição</a></div>
    <div class="col"><a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button"
        aria-pressed="true"><span class="material-symbols-outlined">
          receipt_long
        </span> Criar Requisição</a></div>
    <div class="col"><a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button"
        aria-pressed="true"><span class="material-symbols-outlined">
          sim_card_download
        </span> Baixar Requisição</a></div>
    <div class="col"><a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button"
        aria-pressed="true"><span class="material-symbols-outlined">
          close
        </span> Excluir Requisição</a></div>


    <table class="table">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nº 00001</th>
            <th scope="col">________________________________________________Requisição de Materiais______________________________________________</th>
           
            <th scope="col">Setor Requisitante: </th>
            
          </tr>
        </thead>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Nome Do Produto</th>
            <th scope="col">qnt</th>
            <th scope="col">Tipo</th>
            <th scope="col">Medida</th>
            <th scope="col">cod</th>
            <th scope="col">Fornecedor</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
          </tr>

        </tbody>
      </table>
  </div>
</div>
<div class="botao">
  <a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button" aria-pressed="true"><span
      class="material-symbols-outlined">
      visibility
    </span> Visualizar
    Requisição</a>
</div>
<div class="botao2">
  <a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button" aria-pressed="true"><span
      class="material-symbols-outlined">
      close
    </span> Fechar</a>
  <a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button" aria-pressed="true"><span
      class="material-symbols-outlined">
      save
    </span> Salvar</a>
</div>`
}
export const gerarPaginaPedidos = () => {
  return ` <div class="container">
  <div class="row row-cols-5">
    <div class="col">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" aria-label="Search">
            <button class="btn  btn-secondary navegacao" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
    <div class="col"><a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button"
        aria-pressed="true"><span class="material-symbols-outlined">
          format_list_numbered
        </span>Nº Pedido</a></div>
    <div class="col"><a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button"
        aria-pressed="true"><span class="material-symbols-outlined">
          receipt_long
        </span> Novo Pedido</a></div>
    <div class="col"><a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button"
        aria-pressed="true"><span class="material-symbols-outlined">
          sim_card_download
        </span> Baixar Pedido</a></div>
    <div class="col"><a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button"
        aria-pressed="true"><span class="material-symbols-outlined">
          print
        </span> Imprimir</a></div>


    <table class="table">

      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Nome Do Produto</th>
            <th scope="col">qnt</th>
            <th scope="col">Tipo</th>
            <th scope="col">Medida</th>
            <th scope="col">cod</th>
            <th scope="col">Fornecedor</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
          </tr>

        </tbody>
      </table>
  </div>
</div>
<div class="botao">
  <a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button" aria-pressed="true"><span
      class="material-symbols-outlined">
      visibility
    </span> Visualizar
    Pedido</a>
</div>
<div class="botao2">
  <a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button" aria-pressed="true"><span
      class="material-symbols-outlined">
      close
    </span> Fechar</a>
  <a href="#" class="btn btn-secondary active" role="button" data-bs-toggle="button" aria-pressed="true"><span
      class="material-symbols-outlined">
      save
    </span> Salvar</a>
</div>

`
}
export const gerarPaginaProduto = () => { 
  return `
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
}