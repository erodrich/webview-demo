import { nodes, edges } from './static_data'
import image_recurso from '../assets/images/server.svg'
import image_servicio from '../assets/images/cloud.svg'

// provide the data in the vis format
export const data = {
    nodes: nodes,
    edges: edges
};
export const options = {
    interaction:{
      tooltipDelay: 3600000      // Set a really big delay - one hour
    },
    physics: {
      stabilization: false, 
      enabled: true, 
      barnesHut: {
        springLength: 100, 
        springConstant: 0.04, 
        avoidOverlap: 1}
      },
    nodes : {
      shape: 'dot',
      size: 15,
    },
    layout: {

      hierarchical: {
          direction: "LR",
          sortMethod: "directed",
      }
    },
    edges: {
      smooth: true,
      arrows: {to : true }
    },
    groups: {
      networkElement: {
        image: image_recurso,
        shape: "image",
        size: 25
      },
      service: {
        image: image_servicio,
        shape: "image",
        size: 25
      },
      flow: {
        shape: "dot"
      }
    },

};