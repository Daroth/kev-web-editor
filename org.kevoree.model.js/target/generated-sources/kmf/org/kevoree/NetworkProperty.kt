package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait NetworkProperty : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement {
public open var value : String?
public open var lastCheck : String?
public fun getValue() : String?
public fun setValue(p : String?)
public fun getLastCheck() : String?
public fun setLastCheck(p : String?)
}
