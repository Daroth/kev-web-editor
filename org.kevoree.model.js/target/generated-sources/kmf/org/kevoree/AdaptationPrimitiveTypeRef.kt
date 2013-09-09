package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait AdaptationPrimitiveTypeRef : org.kevoree.modeling.api.KMFContainer {
public open var maxTime : String?
public open var generated_KMF_ID : String?
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getMaxTime() : String?
public fun setMaxTime(p : String?)
public fun getRef() : org.kevoree.AdaptationPrimitiveType?
public fun setRef(p : org.kevoree.AdaptationPrimitiveType?)
open var ref : org.kevoree.AdaptationPrimitiveType?
}
