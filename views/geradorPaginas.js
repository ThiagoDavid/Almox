export const paginaProduto = () => { 
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