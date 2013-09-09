package org.kevoree.tools.editor.mavenplugin;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.project.MavenProject;

import java.io.IOException;
import java.io.RandomAccessFile;

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
    private String input;

    /**
     * Kotlin JS merged file path
     *
     * @parameter
     * @required
     */
    private String kotlinInput;

    /**
     * Generated Kotlin dependence in RequireJS format define(['kotlin/<b>kotlin-merged</b>'], function (Kotlin) {...});
     *
     * @parameter default-value="kotlin-merged"
     * @required
     */
    private String rjsKotlinDep;


    @Override
    public void execute() throws MojoExecutionException {
        try {
            // wrap kevoree.js
            RandomAccessFile kevoreeJS = new RandomAccessFile(input, "rws");
            byte[] rawKevJS = new byte[(int) kevoreeJS.length()];
            kevoreeJS.readFully(rawKevJS);
            kevoreeJS.seek(0);
            kevoreeJS.writeBytes("define(\n\t['kotlin/" + rjsKotlinDep + "'],\n\tfunction (Kotlin) {\n");
            kevoreeJS.write(rawKevJS);
            kevoreeJS.writeBytes("\t\treturn Kotlin.modules['kevoree'];\n\t}\n);");
            kevoreeJS.close();

        } catch (IOException ioe) {
            throw new MojoExecutionException(ioe.getMessage(), ioe);
        }

        try {
            // wrap kotlin.js
            RandomAccessFile kotlinJS = new RandomAccessFile(kotlinInput, "rws");
            byte[] rawKotJS = new byte[(int) kotlinJS.length()];
            kotlinJS.readFully(rawKotJS);
            kotlinJS.seek(0);
            kotlinJS.write(rawKotJS);
            kotlinJS.writeBytes("\ndefine(function () { return Kotlin; });");
            kotlinJS.close();

        } catch (IOException ioe) {
            throw new MojoExecutionException(ioe.getMessage(), ioe);
        }
    }
}
