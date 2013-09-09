package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait NamedElement : org.kevoree.modeling.api.KMFContainer {
public open var name : String?
public fun getName() : String?
public fun setName(p : String?)
}
