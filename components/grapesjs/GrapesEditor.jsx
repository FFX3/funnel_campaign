import React, {Component} from 'react'
import grapesjs from 'grapesjs'

const js = `grapesjs.init({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: '#gjs',
  // Get the content for the canvas directly from the element
  fromElement: true,
  // Size of the editor
  height: '300px',
  width: 'auto',
  // Disable the storage manager for the moment
  storageManager: false,
  // Avoid any default panel
  panels: { defaults: [] },
});`

  

class GrapesEditor extends Component {

  componentDidMount(){
    grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      fromElement: true,
      // Size of the editor
      height: '300px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      panels: { defaults: [] },
    })
  }

  render() {
    return (
      <div>
        <div id="gjs" ><h1>hello world</h1></div>
      </div>
    )
  }
}

export default GrapesEditor