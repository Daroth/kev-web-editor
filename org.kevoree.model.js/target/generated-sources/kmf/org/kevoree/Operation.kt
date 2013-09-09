package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait Operation : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement {
public fun getParameters() : List<org.kevoree.Parameter>
public fun setParameters(p : List<org.kevoree.Parameter>)
public fun getReturnType() : org.kevoree.TypedElement?
public fun setReturnType(p : org.kevoree.TypedElement?)
open var parameters : List<org.kevoree.Parameter>
fun addParameters(parameters : org.kevoree.Parameter)
fun addAllParameters(parameters :List<org.kevoree.Parameter>)
fun removeParameters(parameters : org.kevoree.Parameter)
fun removeAllParameters()
fun findParametersByID(key : String?) : org.kevoree.Parameter?
open var returnType : org.kevoree.TypedElement?
}
