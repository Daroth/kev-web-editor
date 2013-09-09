package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait ServicePortType : org.kevoree.modeling.api.KMFContainer , org.kevoree.PortType {
public open var interface : String?
public fun getInterface() : String?
public fun setInterface(p : String?)
public fun getOperations() : List<org.kevoree.Operation>
public fun setOperations(p : List<org.kevoree.Operation>)
open var operations : List<org.kevoree.Operation>
fun addOperations(operations : org.kevoree.Operation)
fun addAllOperations(operations :List<org.kevoree.Operation>)
fun removeOperations(operations : org.kevoree.Operation)
fun removeAllOperations()
fun findOperationsByID(key : String?) : org.kevoree.Operation?
}
