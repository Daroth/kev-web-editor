package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait Namespace : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement {
public fun getChilds() : List<org.kevoree.Namespace>
public fun setChilds(p : List<org.kevoree.Namespace>)
public fun getParent() : org.kevoree.Namespace?
public fun setParent(p : org.kevoree.Namespace?)
open var childs : List<org.kevoree.Namespace>
fun addChilds(childs : org.kevoree.Namespace)
fun addAllChilds(childs :List<org.kevoree.Namespace>)
fun removeChilds(childs : org.kevoree.Namespace)
fun removeAllChilds()
fun findChildsByID(key : String?) : org.kevoree.Namespace?
open var parent : org.kevoree.Namespace?
}
