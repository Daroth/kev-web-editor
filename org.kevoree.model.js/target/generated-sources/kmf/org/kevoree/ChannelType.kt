package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait ChannelType : org.kevoree.modeling.api.KMFContainer , org.kevoree.LifeCycleTypeDefinition {
public open var lowerBindings : Int?
public open var upperBindings : Int?
public open var lowerFragments : Int?
public open var upperFragments : Int?
public fun getUpperFragments() : Int?
public fun setUpperFragments(p : Int?)
public fun getUpperBindings() : Int?
public fun setUpperBindings(p : Int?)
public fun getLowerBindings() : Int?
public fun setLowerBindings(p : Int?)
public fun getLowerFragments() : Int?
public fun setLowerFragments(p : Int?)
}
