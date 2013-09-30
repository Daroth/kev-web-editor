#! /bin/sh

echo "Kevoree Web Editor is installing"

# clean & install maven projects (compile library & stuff with KMF & Kotlin)
mvn clean
mvn install

echo "Maven install: success"

# move compiled .js files to kev-web-editor folder
cp org.kevoree.model.js/target/js/kevoree.js org.kevoree.tools.editor.web/public/js/lib
cp org.kevoree.model.js/target/js/org.kevoree.model.js.merged.js org.kevoree.tools.editor.web/public/js/lib/kotlin
mv org.kevoree.tools.editor.web/public/js/lib/kotlin/org.kevoree.model.js.merged.js org.kevoree.tools.editor.web/public/js/lib/kotlin/kotlin-merged.js

echo "Javascript libraries (kevoree.js & kotlin.js) moved to Web app folder: success"

# export a JAVA_HOME environment variable to wrap Java in Node

echo -n "Give a valid Java JDK path (most of the time /usr/lib/jvm/le_version_u_use): "
read java_home
export JAVA_HOME=$java_home
cd org.kevoree.tools.editor.web
npm install

echo "Kevoree Web Editor installed successfully :)"
echo "(exec 'npm start' to launch app on default port 3000)"

exit 0