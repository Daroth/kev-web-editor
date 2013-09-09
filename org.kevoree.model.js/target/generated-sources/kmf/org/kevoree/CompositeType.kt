package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait CompositeType : org.kevoree.modeling.api.KMFContainer , org.kevoree.ComponentType {
public fun getChilds() : List<org.kevoree.ComponentType>
public fun setChilds(p : List<org.kevoree.ComponentType>)
public fun getWires() : List<org.kevoree.Wire>
public fun setWires(p : List<org.kevoree.Wire>)
open var childs : List<org.kevoree.ComponentType>
fun addChilds(childs : org.kevoree.ComponentType)
fun addAllChilds(childs :List<org.kevoree.ComponentType>)
fun removeChilds(childs : org.kevoree.ComponentType)
fun removeAllChilds()
fun findChildsByID(key : String?) : org.kevoree.ComponentType?
open var wires : List<org.kevoree.Wire>
fun addWires(wires : org.kevoree.Wire)
fun addAllWires(wires :List<org.kevoree.Wire>)
fun removeWires(wires : org.kevoree.Wire)
fun removeAllWires()
fun findWiresByID(key : String?) : org.kevoree.Wire?
}
