package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait PortTypeRef : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement {
public open var optional : Boolean?
public open var noDependency : Boolean?
public fun getNoDependency() : Boolean?
public fun setNoDependency(p : Boolean?)
public fun getOptional() : Boolean?
public fun setOptional(p : Boolean?)
public fun getRef() : org.kevoree.PortType?
public fun setRef(p : org.kevoree.PortType?)
public fun getMappings() : List<org.kevoree.PortTypeMapping>
public fun setMappings(p : List<org.kevoree.PortTypeMapping>)
open var ref : org.kevoree.PortType?
open var mappings : List<org.kevoree.PortTypeMapping>
fun addMappings(mappings : org.kevoree.PortTypeMapping)
fun addAllMappings(mappings :List<org.kevoree.PortTypeMapping>)
fun removeMappings(mappings : org.kevoree.PortTypeMapping)
fun removeAllMappings()
fun findMappingsByID(key : String?) : org.kevoree.PortTypeMapping?
}
