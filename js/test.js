  var nodes = [
    {id: 1, group: "service", label: "Servicio Activable Movil Voz"},
    {id: 2, group: "service", label: "Servicio Activable Movil Datos"},
    {id: 3, group: "service", label: "Servicio Activable Movil Mensajería"},
    {id: 4, group: "networkElement", label: "User Account Huawei UDB GSM", service:"1"},
    {id: 5, group: "networkElement", label: "User Account Tekelec",service:"1"},
    {id: 6, group: "networkElement", label: "User Account SVA Tiaxa",service:"1"},
    {id: 7, group: "networkElement", label: "User Account Huawei SDP",service:"1"},
    {id: 8, group: "networkElement", label: "User Account Gemalto OTA",service:"1"},
    {id: 9, group: "networkElement", label: "User Account Call Me Now ZTE",service:"1"},
    {id: 10, group: "networkElement", label: "User Account Huawei UDB GSM",service:"2"},
    {id: 11, group: "networkElement", label: "User Account Sandvine DPI La Victoria",service:"2"},
    {id: 12, group: "networkElement", label: "User Account Sandvine DPI San Isidro",service:"2"},
    {id: 13, group: "networkElement", label: "User Account Huawei Wap",service:"2"},
    {id: 14, group: "networkElement", label: "User Account Sandvine DPI Trujillo",service:"2"},
    {id: 15, group: "networkElement", label: "User Account Sandvine DPI Arequipa",service:"2"},
    {id: 16, group: "networkElement", label: "User Account Huawei PCRF",service:"2"},
    {id: 17, group: "networkElement", label: "User Account Huawei UDB GSM",service:"3"},
    {id: 18, group: "networkElement", label: "User Account USSD",service:"3"},
    {id: 19, group: "flow", label: "HUAWEI-GSM-ALTA"},
    {id: 20, group: "flow", label: "HUAWEI-GSM-SERVSUPL-BASIC"},
    {id: 21, group: "flow", label: "HUAWEI-GSM-SERVSUPL-ADIC"},
    {id: 22, group: "flow", label: "HUAWEI-GSM-FIJACION-CALLMENOW"},
    {id: 23, group: "flow", label: "HUAWEI-GSM-PREACTIVACION-ROAMING-VOZ"},
    {id: 24, group: "flow", label: "TEKELEC-ALTA"},
    {id: 25, group: "flow", label: "SVA-TIAXA-ALTA-SERVICIOS"},
    {id: 26, group: "flow", label: "HUAWEI-SDP-ALTA"},
    {id: 27, group: "flow", label: "OTA-GEMALTO-ALTA-ABONADO"},
    {id: 28, group: "flow", label: "CALL-ME-NOW-ZTE-ALTA-ABONADO"},
    {id: 29, group: "flow", label: "HUAWEI-GSM-FIJACION-APN-BASE"},
    {id: 30, group: "flow", label: "HUAWEI-GSM-PREFIJACION-ROAMING-DATOS"},
    {id: 31, group: "flow", label: "HUAWEI-GSM-FIJACION-ROAMING-DATOS"},
    {id: 32, group: "flow", label: "SANDVINE-LA-VICTORIA-ALTA-ABONADO"},
    {id: 33, group: "flow", label: "SANDVINE-SAN-ISIDRO-ALTA-ABONADO"},
    {id: 34, group: "flow", label: "HUAWEI-WAP-ALTA-ABONADO"},
    {id: 35, group: "flow", label: "HUAWEI-WAP-ALTA-SERVICIO"},
    {id: 36, group: "flow", label: "SANDVINE-TRUJILLO-ALTA-ABONADO"},
    {id: 37, group: "flow", label: "SANDVINE-AREQUIPA-ALTA-ABONADO"},
    {id: 38, group: "flow", label: "HUAWEI-PCRF-ALTA"},
    {id: 39, group: "flow", label: "HUAWEI-PCRF-REGULAR-ROAMING-DATOS"},
    {id: 40, group: "flow", label: "HUAWEI-GSM-FIJACION-SMS"},
    {id: 41, group: "flow", label: "HUAWEI-GSM-PREACTIVACION-ROAMING-MENSAJE"},
    {id: 42, group: "flow", label: "USSD-ALTA-SERVICIO"},
  ];
  var edges = [
    {from: 1, to: 4},
    {from: 1, to: 5},
    {from: 1, to: 6},
    {from: 1, to: 7},
    {from: 1, to: 8},
    {from: 1, to: 9},
    {from: 2, to: 10}, 
    {from: 2, to: 11}, 
    {from: 2, to: 12}, 
    {from: 2, to: 13}, 
    {from: 2, to: 14}, 
    {from: 2, to: 15}, 
    {from: 2, to: 16},
    {from: 3, to: 17},
    {from: 3, to: 18},

    {from: 4, to: 19},
    {from: 4, to: 20},
    {from: 4, to: 21},
    {from: 4, to: 22},
    {from: 4, to: 23},
    {from: 5, to: 24},
    {from: 6, to: 25},
    {from: 7, to: 26},
    {from: 8, to: 27},
    {from: 9, to: 28},
    {from: 10, to: 29},
    {from: 10, to: 30},
    {from: 10, to: 31},
    {from: 11, to: 32},
    {from: 12, to: 33},
    {from: 13, to: 34},
    {from: 13, to: 35},
    {from: 14, to: 36},
    {from: 15, to: 37},
    {from: 16, to: 38},
    {from: 16, to: 39},
    {from: 17, to: 40},
    {from: 17, to: 41},
    {from: 18, to: 42},
  ];

var buttonClose = document.getElementById('btn-close')
var buttonSearch = document.getElementById('search-btn')
var popUp = document.getElementById('fixed')
var detalle = document.getElementById('detalle')

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

buttonClose.addEventListener('click', function() {
  popUp.style.display = "none"
})
// Submit search method
buttonSearch.addEventListener('click', function(e) {
  e.preventDefault()
  setTimeout(detalle.style.display = "inline", 100000) 
  
})

dragElement(popUp);


  // create a network
var container = document.getElementById('mynetwork');
var innerWidth = window.innerWidth
var innerHeight = window.innerHeight

var data = {nodes: nodes, edges: edges };
var options = {
    height: '100%',
    width: '100%',
    physics: {stabilization: true, enabled: false, "barnesHut": {"springLength": 100, "springConstant": 0.04}},
    nodes : {
      shape: 'dot',
      size: 15
    },
    layout: {
        hierarchical: {
            direction: "LR",
            sortMethod: "directed",
            nodeSpacing: 100,
            treeSpacing: 10,
            levelSeparation: 250,
            parentCentralization: false,
            edgeMinimization: true,
        }
    },
    edges: {
      smooth: true,
      arrows: {to : true }
    },
    groups: {
      networkElement: {
        image: "assets/images/server.svg",
        shape: "image",
        size: 25
      },
      service: {
        image:"assets/images/cloud.svg",
        shape:"image",
        size: 25
      },
      flow: {
        shape: "dot"
      }
    },

};
var network = new vis.Network(container, data, options);
//////////////////////////////////////////
///// constantes
const minMembers = 3 // minimo numero de miembros para un cluster
const numServices = [1,2,3]  // cantidad de servicios de la orden

//////////////////////////////////////////
///// Utilidades
//
//
//*** Funcion mapea posicion de los nodos
//*** al array nodes utilizado
//*** Usar previo a cada cambio de la pantalla
function getNodesWithPosition(nodes) {
  var nodePositions = network.getPositions()
  nodes.forEach(function(node) {
    for(var property in nodePositions){
      if(node.id == property){
        node.x = nodePositions[property].x
        node.y = nodePositions[property].y
      }
    }
  })
  return nodes
}
//*** Funcion construye array de grupos
//*** conectados a un mismo nodo origen
//*** cada elemento contiene array con node id
//*** de los nodos conectados a un mismo node
function buildGroups(nodes){
  let groups = []
  nodes = (getNodesWithPosition(nodes))
  nodes.forEach(function(node){
    let childs = network.getConnectedNodes(node.id,"to")
    if(childs.length != 0 && childs.length > minMembers){
      groups.push(childs)
    }
  })
  return groups
}

//////////////////////////////////////////
///// Funcion Agrupa nodos en Clusters
///// la condicion es el tipo de servicio
///// del nodo
function clusterByGroup(){
  for(var i = 0; i < numServices.length; i++){
    var clusterOptionsByData = {
        joinCondition:function(nodeOptions) {
          //console.log(nodeOptions)
          return nodeOptions.service == numServices[i];
        },
        clusterNodeProperties: {id:'ER' + i , borderWidth:3, shape:'database'}
    };
    network.cluster(clusterOptionsByData);
    console.log(network.getNodesInCluster('ER' + i))
  }
}

//////////////////////////////////////////
///// Funcion de animación Burbuja
var currentRadius = 0; 
var animateRadius = true // habilita / desabilita animacion
var updateFrameVar = setInterval(function() { updateFrameTimer(); }, 60);

function updateFrameTimer() {
      if (animateRadius) {
          network.redraw();
          currentRadius += 0.05;
    }
}

//*** Funcion valida si nodo es un cluster
//*** si es cluster lo desagrupa
network.on("selectNode", function(params) {
    if (params.nodes.length == 1) {
        if (network.isCluster(params.nodes[0]) == true) {
            network.openCluster(params.nodes[0]);
        }
    }
});

//////////////////////////////////////////
///// Manejo de eventos en Network Canvas

//*** Funcion aplica efecto burbuja a nodos
network.on("beforeDrawing", function(ctx) {
    nodes = (getNodesWithPosition(nodes))
    nodes.forEach(function(node, idx) {
      if(!(network.clustering.findNode(node.id).length > 1)){
        if(animateRadius){
          var colorCircle = 'rgba(0, 255, 0, 0.8)';
          var colorBorder = 'rgba(0, 255, 0, 0.2)';
          ctx.strokeStyle = colorBorder;
          ctx.fillStyle = colorCircle;
          var radius = Math.abs(50 * Math.sin(currentRadius + idx / 50.0));
          ctx.circle(node.x, node.y, radius);
          ctx.fill();
          ctx.stroke();
        }
      }
    })
});

//*** Funcion abre popup al hacer click en nodo
network.on("click", function (params) {
  // Check if you clicked on a node; if so, display the title (if any) in a popup
  console.log('Clicked!')
  var nodeId = params.nodes[0]

  if(nodeId){
    //Si se hizo click sobre un nodo
    //Get info to Display, not implemented for now

    //Get canvas x,y position
    // var canvasX = window.innerWidth
    // var canvasY = window.innerHeight
    // console.log(canvasX)
    // console.log(canvasY)

    //Get node x,y position

    var x = params.pointer.DOM.x
    var y = params.pointer.DOM.y
    console.log(params.pointer.DOM.x)
    console.log(params.pointer.DOM.y)

    //Fill info to the popUp div ## Not implemented yet

    //Display popUp div
    
    // var div = document.createElement('div');
    // div.setAttribute('id', 'popUp');
    // div.style.backgroundColor = "blue";
    // div.style.position = "relative";
    // div.style.left = "200px";
    // div.style.top = "200px";
    // div.style.height = "100px";
    // div.style.width = "100px";
    // div.style.display = "inline";
    // console.log(x)
    // console.log(y)

    //document.getElementsByTagName('body')[0].appendChild(div);
    
    var div = document.getElementById('fixed')
    div.style.left = x + 'px'
    div.style.top = y + 'px'
    div.style.display = "inline"
    
    // container.appendChild(div);
  } else {
    //Si no era un nodo (espacio vacio)
    //se deja de mostrar el div popup
    var div = document.getElementById('fixed')
    div.style.display = "none"
  }

  // network.interactionHandler._checkShowPopup(params.pointer.DOM);

});
    if(nodeId > 3){
        var tbody = document.getElementById('appendHere');
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var td = document.createElement('td');
        var textNode = document.createTextNode("flowsArray.nombre");
        td.appendChild(textNode);
        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr);
        for(var i = 0; i < 3; i++){
            var tr = document.createElement('tr');
            var textNode = document.createTextNode("flowsArray.nombre");
            tr.appendChild(textNode);
        }
        div.appendChild(table);
        document.getElementsByTagName('body')[0].appendChild(div);
        div.style.position = 'absolute';
        div.style.left = x + 'px'
        div.style.top = y + 'px'
        div.style.display = "inline"
    }