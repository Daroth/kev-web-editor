package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait MBinding : org.kevoree.modeling.api.KMFContainer {
public open var generated_KMF_ID : String?
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getPort() : org.kevoree.Port?
public fun setPort(p : org.kevoree.Port?)
public fun getHub() : org.kevoree.Channel?
public fun setHub(p : org.kevoree.Channel?)
open var port : org.kevoree.Port?
open var hub : org.kevoree.Channel?
}
