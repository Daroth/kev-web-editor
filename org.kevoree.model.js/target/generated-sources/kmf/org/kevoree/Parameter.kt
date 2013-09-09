package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait Parameter : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement {
public open var order : Int?
public fun getOrder() : Int?
public fun setOrder(p : Int?)
public fun getType() : org.kevoree.TypedElement?
public fun setType(p : org.kevoree.TypedElement?)
open var `type` : org.kevoree.TypedElement?
}
