package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait ExtraFonctionalProperty : org.kevoree.modeling.api.KMFContainer {
public open var generated_KMF_ID : String?
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getPortTypes() : List<org.kevoree.PortTypeRef>
public fun setPortTypes(p : List<org.kevoree.PortTypeRef>)
open var portTypes : List<org.kevoree.PortTypeRef>
fun addPortTypes(portTypes : org.kevoree.PortTypeRef)
fun addAllPortTypes(portTypes :List<org.kevoree.PortTypeRef>)
fun removePortTypes(portTypes : org.kevoree.PortTypeRef)
fun removeAllPortTypes()
fun findPortTypesByID(key : String?) : org.kevoree.PortTypeRef?
}
