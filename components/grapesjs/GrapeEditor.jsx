import React, {Component} from 'react'
import ScriptTag from 'react-script-tag'

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

class GrapeEditorWrapper extends Component {
  

  render(){
    return (<div>
      <div id="gjs">
        <h1>Hello World Component!</h1>
      </div>
      <ScriptTag type='text/javascript'>
        alert("im js being executed after the creation of the #gjs element")
      </ScriptTag>
      <ScriptTag src="https://unpkg.com/grapesjs@0.16.45/dist/grapes.min.js"></ScriptTag>
      <ScriptTag type='text/javascript'>
        {js}
      </ScriptTag>
    </div>)
  }
}

export default GrapeEditorWrapper