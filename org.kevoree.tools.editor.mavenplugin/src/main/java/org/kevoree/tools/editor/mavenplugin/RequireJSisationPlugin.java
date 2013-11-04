package org.kevoree.tools.editor.mavenplugin;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.project.MavenProject;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * @author <a href="mailto:maxime.tricoire@inria.fr">Maxime Tricoire</a>
 * @version $Id$
 * @execution install
 * @goal wrap
 */
public class RequireJSisationPlugin extends AbstractMojo {

    /**
     * The maven project.
     *
     * @parameter expression="${project}"
     * @required
     * @readonly
     */
    private MavenProject project;

    /**
     * Input JS file name to wrap with requireJS
     *
     * @parameter
     * @required
     */
    private String kevoreeInput;

    /**
     * Kotlin JS merged file path
     *
     * @parameter
     * @required
     */
    private String[] kotlinInputs;

    /**
     * @parameter default-value="${basedir}/target/js/"
     * @required
     */
    private String outputDir;

    /**
     * @parameter default-value="kevoree.js"
     * @required
     */
    private String kevOutput;

    /**
     * @parameter default-value="kotlin.js"
     * @required
     */
    private String kotOutput;


    @Override
    public void execute() throws MojoExecutionException {
        try {
            // wrap kevoree.js
            PrintWriter kevoreeJS = new PrintWriter(outputDir+"/"+kevOutput);
            kevoreeJS.print("define(\n\t['kotlin/" + kotOutput.substring(0, kotOutput.lastIndexOf('.')) + "'],\n\tfunction (Kotlin) {\n");
            kevoreeJS.println(readFile(kevoreeInput, StandardCharsets.UTF_8));
            kevoreeJS.print("\t\treturn Kotlin.modules['"+project.getArtifactId()+"'];\n\t}\n);");
            kevoreeJS.close();

        } catch (Exception e) {
            throw new MojoExecutionException(e.getMessage(), e);
        }

        try {
            // wrap kotlin.js
            String[] kotlinFiles = new String[kotlinInputs.length];
            for (int i=0; i < kotlinInputs.length; i++) {
                kotlinFiles[i] = readFile(kotlinInputs[i], StandardCharsets.UTF_8);
            }

            PrintWriter kotlinJS = new PrintWriter(outputDir+"/"+kotOutput);
            for (String kotlinContent : kotlinFiles) kotlinJS.println(kotlinContent);
            kotlinJS.print("\ndefine(function () { return Kotlin; });");
            kotlinJS.close();

        } catch (Exception e) {
            throw new MojoExecutionException(e.getMessage(), e);
        }
    }

    private static String readFile(String path, Charset encoding) throws IOException {
        byte[] encoded = Files.readAllBytes(Paths.get(path));
        return encoding.decode(ByteBuffer.wrap(encoded)).toString();
    }
}
