package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait Group : org.kevoree.modeling.api.KMFContainer , org.kevoree.Instance {
public fun getSubNodes() : List<org.kevoree.ContainerNode>
public fun setSubNodes(p : List<org.kevoree.ContainerNode>)
open var subNodes : List<org.kevoree.ContainerNode>
fun addSubNodes(subNodes : org.kevoree.ContainerNode)
fun addAllSubNodes(subNodes :List<org.kevoree.ContainerNode>)
fun removeSubNodes(subNodes : org.kevoree.ContainerNode)
fun removeAllSubNodes()
fun findSubNodesByID(key : String?) : org.kevoree.ContainerNode?
}
