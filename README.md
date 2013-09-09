KevWebEditor
==============

Kevoree Web Editor is using

*   Server-side
    *  NodeJS
    *  Kevoree Modeling Framework
    *  Express & Jade
    *  node-java (to wrap Java in nodeJS scripts)
*   Client-side
    *  HTML5/CSS3
    *  jQuery & jQuery UI
    *  Bootstrap
    *  KineticJS
    *  behave.js
    *  hammer.js
    *  TinySort
    *  TouchPunch (jQuery UI plugin)

## 1. Get started
        git clone git@github.com:maxleiko/kev-web-editor.git
        cd kev-web-editor
        mvn clean && mvn install
        cp org.kevoree.model.js/target/js/kevoree.js org.kevoree.tools.editor.web/public/js/lib
        cp org.kevoree.model.js/target/js/org.kevoree.model.js.merged.js org.kevoree.tools.editor.web/public/js/lib/kotlin
        mv org.kevoree.tools.editor.web/public/js/lib/kotlin/org.kevoree.model.js.merged.js org.kevoree.tools.editor.web/public/js/lib/kotlin/kotlin-merged.js
        export JAVA_HOME=path/to/your/jdk
        cd org.kevoree.tools.editor.web
        npm install && npm start

![Kevoree Web Editor](http://oi44.tinypic.com/35hijk3.jpg)

## 2. Features
**Kevoree Web Editor** offers a way for users to change the state of the editor on start-up by adding some data to the URL

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Values</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td>menu</td>
    <td>hide, 0, * (anything else shows the menu)</td>
    <td>Hide/Show libraries tree (left menu)</td>
  </tr>
  <tr>
    <td>zoom</td>
    <td>Float value [0..Inf]</td>
    <td>Sets the editor scale (default zoom is 1, range is from 0.1 to Inf)</td>
  </tr>
  <tr>
    <td>listen</td>
    <td>URI (without ws://)</td>
    <td>Initiate the listen process by connecting to the given URI WebSocket server</td>
  </tr>
  <tr>
    <td>open</td>
    <td>URI (without ws://, http://, tcp, ...)</td>
    <td><strong>Deps*</strong>: 'protocol'<br/>Open from node (you have to specify open param AND protocol param in URL)</td>
  </tr>
  <tr>
    <td>protocol</td>
    <td>ws, http, tcp</td>
    <td><strong>Deps*</strong>: 'open'<br/>Open from node (you have to specify open param AND protocol param in URL)</td>
    </tr>
</table>

 Deps* : You __have to__ specify deps parameters in order for them to work properly (for instance: **open** needs **protocol** to work properly)

So an usage could be something like that:

http://localhost:3000/editor?zoom=1.5&menu=hide