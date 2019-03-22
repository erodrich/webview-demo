// Simple data
export const table = `<table class="table table-sm" style="width: 50px;">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Comando Enviado</th>
      <th scope="col">Fecha Envio</th>
      <th scope="col">Fecha Respuesta</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>MOD ROUTECATEGORY:IMSI="716060823705632" ,PROV=FALSE;</td>
      <td>2018-10-25 09:26:50.355</td>
      <td>2018-10-25 09:26:50.455</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>MOD EXEXROUTECATEGORY:IMSI="716060823705632" ,EXEXROUTECATEGORY=420 ,PROV=TRUE;</td>
      <td>2018-10-25 09:26:50.458</td>
      <td>2018-10-25 09:26:50.551</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>MOD PRERES:ISDN="51978994245" ,CLIP=TRUE ,CLIPOVERRIDE=FALSE ,CLIR=TRUE ,CLIRMODE=TEMPALLOWED;</td>
      <td>2018-10-25 09:26:50.555</td>
      <td>2018-10-25 09:26:50.647</td>
    </tr>
  </tbody>
</table>`;
export const nodes = [
  {id: 1, group: "service", label: "Servicio Activable Movil Voz"},
  {id: 2, group: "service", label: "Servicio Activable Movil Datos"},
  {id: 3, group: "service", label: "Servicio Activable Movil Mensajería"},
  {id: 4, group: "networkElement", label: "User Account Huawei UDB GSM"},
  {id: 5, group: "networkElement", label: "User Account Tekelec"},
  {id: 6, group: "networkElement", label: "User Account SVA Tiaxa"},
  {id: 10, group: "networkElement", label: "User Account Huawei UDB GSM"},
  {id: 11, group: "networkElement", label: "User Account Sandvine DPI La Victoria"},
  {id: 12, group: "networkElement", label: "User Account Sandvine DPI San Isidro"},
  {id: 17, group: "networkElement", label: "User Account Huawei UDB GSM"},
  {id: 18, group: "networkElement", label: "User Account USSD"},
  {id: 19, group: "flow", label: "HUAWEI-GSM-ALTA", title: table},
  {id: 20, group: "flow", label: "HUAWEI-GSM-SERVSUPL-BASIC", title: table},
  {id: 21, group: "flow", label: "HUAWEI-GSM-SERVSUPL-ADIC", title: table},
  {id: 22, group: "flow", label: "HUAWEI-GSM-FIJACION-CALLMENOW", title: table},
  {id: 23, group: "flow", label: "HUAWEI-GSM-PREACTIVACION-ROAMING-VOZ", title: table},
  {id: 24, group: "flow", label: "TEKELEC-ALTA", title: table},
  {id: 25, group: "flow", label: "SVA-TIAXA-ALTA-SERVICIOS", title: table},
  {id: 29, group: "flow", label: "HUAWEI-GSM-FIJACION-APN-BASE", title: table},
  {id: 30, group: "flow", label: "HUAWEI-GSM-PREFIJACION-ROAMING-DATOS", title: table},
  {id: 31, group: "flow", label: "HUAWEI-GSM-FIJACION-ROAMING-DATOS", title: table},
  {id: 32, group: "flow", label: "SANDVINE-LA-VICTORIA-ALTA-ABONADO", title: table},
  {id: 33, group: "flow", label: "SANDVINE-SAN-ISIDRO-ALTA-ABONADO", title: table},
  {id: 40, group: "flow", label: "HUAWEI-GSM-FIJACION-SMS", title: table},
  {id: 41, group: "flow", label: "HUAWEI-GSM-PREACTIVACION-ROAMING-MENSAJE", title: table},
  {id: 42, group: "flow", label: "USSD-ALTA-SERVICIO", title: table},
];
export const edges = [
  {from: 1, to: 4},
  {from: 1, to: 5},
  {from: 1, to: 6},
  {from: 2, to: 10}, 
  {from: 2, to: 11}, 
  {from: 2, to: 12},
  {from: 3, to: 17},
  {from: 3, to: 18},
  {from: 4, to: 19},
  {from: 4, to: 20},
  {from: 4, to: 21},
  {from: 4, to: 22},
  {from: 4, to: 23},
  {from: 5, to: 24},
  {from: 6, to: 25},
  {from: 10, to: 29},
  {from: 10, to: 30},
  {from: 10, to: 31},
  {from: 11, to: 32},
  {from: 12, to: 33},
  {from: 17, to: 40},
  {from: 17, to: 41},
  {from: 18, to: 42},
];