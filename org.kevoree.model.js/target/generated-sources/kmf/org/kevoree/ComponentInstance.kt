package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait ComponentInstance : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement , org.kevoree.Instance {
public fun getProvided() : List<org.kevoree.Port>
public fun setProvided(p : List<org.kevoree.Port>)
public fun getRequired() : List<org.kevoree.Port>
public fun setRequired(p : List<org.kevoree.Port>)
public fun getNamespace() : org.kevoree.Namespace?
public fun setNamespace(p : org.kevoree.Namespace?)
open var provided : List<org.kevoree.Port>
fun addProvided(provided : org.kevoree.Port)
fun addAllProvided(provided :List<org.kevoree.Port>)
fun removeProvided(provided : org.kevoree.Port)
fun removeAllProvided()
fun findProvidedByID(key : String?) : org.kevoree.Port?
open var required : List<org.kevoree.Port>
fun addRequired(required : org.kevoree.Port)
fun addAllRequired(required :List<org.kevoree.Port>)
fun removeRequired(required : org.kevoree.Port)
fun removeAllRequired()
fun findRequiredByID(key : String?) : org.kevoree.Port?
open var namespace : org.kevoree.Namespace?
}
