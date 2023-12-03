function gerarNotaFiscal() {

    var nomeCliente = document.getElementById('cliente').value;
    var nomecpf = document.getElementById('cpf').value;
    var namedataHora = document.getElementById('dataHora').value;
    var nomeemail = document.getElementById('email').value;
    var nomemunicipi = document.getElementById('municipio').value;
    var nomecep = document.getElementById('cep').value;
    var nomeuf = document.getElementById('uf').value;
    var nomediscrição = document.getElementById('discrição').value;
    var nomeendereço = document.getElementById('endereço').value;
    var nomeinscricaoMunicipal = document.getElementById('inscricaoMunicipal').value;
    var nomecodigoNota = document.getElementById('codigoNota').value;
    var nomenumeroNota = document.getElementById('numeroNota').value;
    var nomevalor = parseFloat(document.getElementById('valor').value).toFixed(2);
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));




    var impostoFederal = (nomevalor * 0.05).toFixed(2);
    var impostoEstadual = (nomevalor * 0.08).toFixed(2);
    var impostoMunicipal = (nomevalor * 0.03).toFixed(2);

    var pis = (nomevalor * 0.015).toFixed(2);


    var totalNota = (parseFloat(nomevalor) + parseFloat(impostoFederal) + parseFloat(impostoEstadual) + parseFloat(impostoMunicipal) + parseFloat(pis)).toFixed(2);


    myModal.hide();

    limparCampo();

    function limparCampo() {
        document.getElementById('cliente').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('dataHora').value = '';
        document.getElementById('email').value = '';
        document.getElementById('municipio').value = '';
        document.getElementById('cep').value = '';
        document.getElementById('uf').value = '';
        document.getElementById('discrição').value = '';
        document.getElementById('endereço').value = '';
        document.getElementById('inscricaoMunicipal').value = '';
        document.getElementById('codigoNota').value = '';
        document.getElementById('numeroNota').value = '';
        document.getElementById('valor').value = '';

    }
    // Construir a nota fiscal em HTML
    var notaFiscalHTML = `
   
        <table class="tabela" style="width: 100%;" >
            <tr>
                <td style="width: 40%; height: 100px;" rowspan="3">

                    <table style="width: 100%; height: 108px;">
                        <tr>
                            <td style="width: 33%; vertical-align: middle;">
                         
                            </td>
                            <td style="vertical-align: middle; padding: 5px;">
                             
                          
                          
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>

                </td>
                <td style="width: 80%; height: 100px; text-align: center; vertical-align: middle;" rowspan="3">
                    <span class="sub-titulo" style="font-size: large;">Chic Couture Corner</span>
                </td>
                <td>
                    <dl>
                        <dt>Número da Nota</dt>
                        <dd id="dadosnfe_nu_invoice">[${nomenumeroNota}]</dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td>
                    <dl>
                        <dt>Data e Hora de Emissão</dt>
                        <dd id="dadosnfe_dt_invoice_issue">[${namedataHora}]</dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td>
                    <dl>
                        <dt>Código de Verificão</dt>
                        <dd id="dadosnfe_ds_protocol">[${nomecodigoNota}]</dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td colspan="3" style="height: 20%">
                    <table style="width: 100%;">
                        <tr>
                            <td style="width: 50%; text-align: center;" colspan="2">
                                <span class="sub-titulo">PRESTADOR DE SERVIÇOS</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="campo_titulo" style="width: 50%; padding-left: 5px">
                                CNPJ/CPF: <span id="emit_nu_cnpj_cpf" class="campo_valor">[867.979.676-45]</span>
                                <br />
                                Nome/Razão Social: <span class="campo_valor" id="emit_corp_ds_issuer_name">[diego luiz]</span>
                                <br />
                                Endereço: <span id="emit_ds_addres" class="campo_valor">[Rua raimundo pacheco, 349]</span>
                               
                                CEP: <span id="emit_nu_cep" class="campo_valor">[61944-430]</span>
                                <br />
                                Município: <span class="campo_valor" id="emit_corp_ds_city_name">[maranguape]</span>
                            </td>
                            <td class="campo_titulo" style="width: 50%; padding-left: 5px;">
                                Inscrição Municipal: <span class="campo_valor" id="emit_nu_im">[fortaleza]</span>
                                <br />
                                <br />
                                <br />
                                UF: <span class="campo_valor" id="emit_corp_nfe_ds_uf">[CE]</span>
                            </td>
                        </tr>
                    </table>

                </td>
            </tr>
            <tr>
                <td colspan="3" style="height: 20%">
                    <table style="width: 100%;">
                        <tr>
                            <td style="width: 50%; text-align: center;" colspan="2">
                                <span class="sub-titulo">TOMADOR DE SERVIÇO</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="campo_titulo" style="width: 50%; padding-left: 5px;">
                                    Nome/Razão Social: <span class="campo_valor" id="dest_receiver_name">[${nomeCliente}]</span>
                                <br />
                                CNPJ/CPF: <span class="campo_valor" id="dest_nu_cnpj_cpf">[${nomecpf}]</span>
                                <br />
                                Endereço: <span id="dest_ds_address" class="campo_valor">[${nomeendereço}]</span>
                                CEP: <span id="dest_nu_cep" class="campo_valor">[${nomecep}]</span>
                                <br />

                                Município: <span class="campo_valor" id="dest_ds_city_name">[${nomemunicipi}]</span>&nbsp;&nbsp;&nbsp;
                                UF: <span class="campo_valor" id="dest_ds_uf">[${nomeuf}]</span>
                            </td>
                            <td class="campo_titulo" style="width: 50%; padding-left: 5px;">
                                Inscrição Municipal: <span class="campo_valor" id="dest_nu_im">[${nomeinscricaoMunicipal}]</span>
                                <br />
                                <br />
                                <br />
                                E-Mail: <span class="campo_valor" id="dest_ds_email">[${nomeemail}]</span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan="3" style="height: 190px;">
                    <table style="width: 100%; height: 100%;">
                        <tr>
                            <td style="text-align: center; width: 100%; height: 1px;" colspan="2">
                                <span class="sub-titulo">DISCRIMINAÇÃO DOS SERVIÇOS</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="campo_titulo" style="width: 50%; padding-left: 5px; vertical-align: top;">
                                [${nomediscrição}]
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align: center;">
                    <span class="sub-titulo">TOTAL DA NOTA = R$ <span id="TOTSERV">[R$ ${totalNota}]</span></span>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <table style="width: 100%; height: 100%;">
                        <tr>
                            <td style="border-right: 1px solid #000;">
                                <dl>
                                    <dt>Valor do Serviço</dt>
                                    <dd style="text-align: right;">R$ <span id="COFINS">${nomevalor}</span></dd>
                                </dl>
                            </td>
                            <td style="border-right: 1px solid #000;">
                                <dl>
                                    <dt>Imposto Federal</dt>
                                    <dd style="text-align: right;">R$ <span id="CSLL"> R$ ${impostoFederal}</span></dd>
                                </dl>
                            </td>
                            <td style="border-right: 1px solid #000;">
                                <dl>
                                    <dt>Imposto Estadual:</dt>
                                    <dd style="text-align: right;">R$ <span id="INSS">R$ ${impostoEstadual}</span></dd>
                                </dl>
                            </td>
                            <td style="border-right: 1px solid #000;">
                                <dl>
                                    <dt>Imposto Municipal:</dt>
                                    <dd style="text-align: right;">R$ <span id="IRPJ">R$ ${impostoMunicipal}</span></dd>
                                </dl>
                            </td>
                            <td>
                                <dl>
                                    <dt>PIS:</dt>
                                    <dd style="text-align: right;">R$ <span id="PIS">R$ ${pis}</span></dd>
                                </dl>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            
           
        </table>

       
 
            `;

    // Exibir a nota fiscal na tela
    document.getElementById('notaFiscal').innerHTML = notaFiscalHTML;
    document.getElementById('notaFiscal').style.display = 'block';

}

function downloadPDF() {
    const item = document.querySelector(".Content");

    var opt = {
        margin: 1,
        filename: "myfile.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(item).save();

    setTimeout(function () {
        location.reload();
    }, 1000);
}
function mostraDataAtual() {
    var dataHoraAtual = new Date();

    var dia = String(dataHoraAtual.getDate()).padStart(2, '0');
    var mes = String(dataHoraAtual.getMonth() + 1).padStart(2, '0');
    var ano = dataHoraAtual.getFullYear();

    var dataFormatada = dia + '/' + mes + '/' + ano;

    document.getElementById('dataHora').textContent = dataFormatada;
}

window.onload = function () {
    mostraDataAtual();
}