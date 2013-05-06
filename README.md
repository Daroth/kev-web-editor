KevWebEditor
==============

Kevoree Web Editor using NodeJS (server-side) and some cool JS libs client-side (KineticJS)

## 1. Get started
        git clone git@github.com:maxleiko/kev-web-editor.git
        cd kev-web-editor
        npm install
        node app.js

## 2. Features
**Kevoree Web Editor** allows you to load core libraries directly by giving the name of the 'environment' in a **corelib** parameter in the URL

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
</table>
