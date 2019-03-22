import vis from './js/custom_vis'
import { data, options } from './js/vis_config'
import { nodes, edges, table } from './js/static_data'


// create a network
var container = document.getElementById('mynetwork');

// initialize your network!
var network = new vis.Network(container, data, options);

// functions to animate:
var currentRadius = 0; 
var animateRadius = true // can disable or enable animation
var updateFrameVar = setInterval(function() { 
  updateFrameTimer(); 
}, 60);
var updateFrameVar = setInterval(function() {
  updateTraficSample();
}, 8000);

function updateTraficSample() {
  var traffic = []
  data.edges.forEach(edge => {
    traffic.push({edge: edge.id, trafficSize: 5});
    network.animateTraffic(traffic);
  })
}

function updateFrameTimer() {
    if (animateRadius) {
        network.redraw();
        currentRadius += 0.05;
    }
}


network.on("beforeDrawing", function(ctx) {
    if (animateRadius) {
        var inode;
        var nodePosition = network.getPositions();
        var arrayLength = nodes.length;
        for (inode = 0; inode < arrayLength; inode++) {
            var colorCircle = 'rgba(150, 180, 100, 0.8)';
            var colorBorder = 'rgba(150, 180, 100, 0.2)';
            ctx.strokeStyle = colorCircle;
            ctx.fillStyle = colorBorder;
            var radius = Math.abs(50 * Math.sin(currentRadius + inode / 50.0));
            ctx.circle(nodePosition[nodes[inode].id].x, nodePosition[nodes[inode].id].y, radius);
            ctx.fill();
            ctx.stroke();
        }
    };

});



// Intercept the click event
network.on("click", function (params) {
  // Check if you clicked on a node; if so, display the title (if any) in a popup
  console.log('Clicked!')
  console.log(params.nodes[0])
  var nodeId = params.nodes[0]
  /*
  if(nodeId){
    //Get info to Display, not implemented for now

    //Get canvas x,y position
    var canvasX = $('#mynetwork').position().left
    var canvasY = $('#mynetwork').position().top

    //Get node x,y position

    var x = params.pointer.DOM.x + canvasX
    var y = params.pointer.DOM.y + canvasY

    //Fill info to the popUp div ## Not implemented yet

    //Display popUp div
    
    var div = document.createElement('div');
    div.setAttribute('id', 'popUp');
    div.style.backgroundColor = "blue";
    div.style.position = "relative";
    div.style.left = "200";
    div.style.top = "200";
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.display = "inline-block";
    console.log(x)
    console.log(y)

    //document.getElementsByTagName('body')[0].appendChild(div);
    
    var popUp = document.getElementById('popUp')
    console.log(popUp)
    popUp.style.left = x
    popUp.style.top = y
    popUp.style.display = "block"
    console.log(popUp)
    console.log(x)
    console.log(y)
    
    container.appendChild(div);
  }
  */
  network.interactionHandler._checkShowPopup(params.pointer.DOM);

});

/*
fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => console.log(json))
*/
/*
var edges = []
var services = []
var flows = []
var networkElements = []

nodes.forEach(function(node) {
  //console.log(node.item_id);
  if(node.group == "service"){
    node.x = "100"
    services.push(node)
  } else if(node.group == "networkElement") {
    networkElements.push(node)
  } else if(node.group == "flow") {
    flows.push(node)
  }
})

networkElements.forEach(function(networkElement) {
  let id = networkElement.item_id
  if(Array.isArray(id)){
    id.forEach((id) => {
      let edge = {
      from: id,
      to: networkElement.id
      }
      edges.push(edge)
    })
  } else {
    let edge = {
      from: id,
      to: networkElement.id
    }
    edges.push(edge)
  }
})
console.log(edges)

flows.forEach(function(flow) {
  let edge = {
    from: flow.item_id,
    to: flow.id
  }
  edges.push(edge)
})


var edges = new vis.DataSet(edges)

// create an array with edges
/*
var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);
*/