package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait TypeLibrary : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement {
public fun getSubTypes() : List<org.kevoree.TypeDefinition>
public fun setSubTypes(p : List<org.kevoree.TypeDefinition>)
open var subTypes : List<org.kevoree.TypeDefinition>
fun addSubTypes(subTypes : org.kevoree.TypeDefinition)
fun addAllSubTypes(subTypes :List<org.kevoree.TypeDefinition>)
fun removeSubTypes(subTypes : org.kevoree.TypeDefinition)
fun removeAllSubTypes()
fun findSubTypesByID(key : String?) : org.kevoree.TypeDefinition?
}
