package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait Wire : org.kevoree.modeling.api.KMFContainer {
public open var generated_KMF_ID : String?
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getPorts() : List<org.kevoree.PortTypeRef>
public fun setPorts(p : List<org.kevoree.PortTypeRef>)
open var ports : List<org.kevoree.PortTypeRef>
fun addPorts(ports : org.kevoree.PortTypeRef)
fun addAllPorts(ports :List<org.kevoree.PortTypeRef>)
fun removePorts(ports : org.kevoree.PortTypeRef)
fun removeAllPorts()
fun findPortsByID(key : String?) : org.kevoree.PortTypeRef?
}
