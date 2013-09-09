package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait NodeNetwork : org.kevoree.modeling.api.KMFContainer {
public open var generated_KMF_ID : String?
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getLink() : List<org.kevoree.NodeLink>
public fun setLink(p : List<org.kevoree.NodeLink>)
public fun getInitBy() : org.kevoree.ContainerNode?
public fun setInitBy(p : org.kevoree.ContainerNode?)
public fun getTarget() : org.kevoree.ContainerNode?
public fun setTarget(p : org.kevoree.ContainerNode?)
open var link : List<org.kevoree.NodeLink>
fun addLink(link : org.kevoree.NodeLink)
fun addAllLink(link :List<org.kevoree.NodeLink>)
fun removeLink(link : org.kevoree.NodeLink)
fun removeAllLink()
fun findLinkByID(key : String?) : org.kevoree.NodeLink?
open var initBy : org.kevoree.ContainerNode?
open var target : org.kevoree.ContainerNode?
}
