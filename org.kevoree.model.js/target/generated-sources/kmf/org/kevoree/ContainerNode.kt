package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait ContainerNode : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement , org.kevoree.Instance {
public fun getComponents() : List<org.kevoree.ComponentInstance>
public fun setComponents(p : List<org.kevoree.ComponentInstance>)
public fun getHosts() : List<org.kevoree.ContainerNode>
public fun setHosts(p : List<org.kevoree.ContainerNode>)
public fun getHost() : org.kevoree.ContainerNode?
public fun setHost(p : org.kevoree.ContainerNode?)
open var components : List<org.kevoree.ComponentInstance>
fun addComponents(components : org.kevoree.ComponentInstance)
fun addAllComponents(components :List<org.kevoree.ComponentInstance>)
fun removeComponents(components : org.kevoree.ComponentInstance)
fun removeAllComponents()
fun findComponentsByID(key : String?) : org.kevoree.ComponentInstance?
open var hosts : List<org.kevoree.ContainerNode>
fun addHosts(hosts : org.kevoree.ContainerNode)
fun addAllHosts(hosts :List<org.kevoree.ContainerNode>)
fun removeHosts(hosts : org.kevoree.ContainerNode)
fun removeAllHosts()
fun findHostsByID(key : String?) : org.kevoree.ContainerNode?
open var host : org.kevoree.ContainerNode?
}
