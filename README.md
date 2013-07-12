KevWebEditor
==============

Kevoree Web Editor using NodeJS (server-side) and some cool JS libs client-side (KineticJS)

## 1. Get started
        git clone git@github.com:maxleiko/kev-web-editor.git
        cd kev-web-editor
        export JAVA_HOME=path/to/your/jdk
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
    <td>corelib</td>
    <td>javase, android, sky, ...</td>
    <td>Loads the specified core library on start-up</td>
  </tr>
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
    <td><strong>Deps</strong>: 'protocol'<br/>Open from node (you have to specify open param AND protocol param in URL)</td>
  </tr>
  <tr>
    <td>protocol</td>
    <td>ws, http, tcp</td>
    <td><strong>Deps</strong>: 'open'<br/>Open from node (you have to specify open param AND protocol param in URL)</td>
    </tr>
</table>

So an usage could be something like that:

http://kevoree.org/editor?corelib=all&zoom=1.5&menu=hide
