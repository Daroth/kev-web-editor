package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait LifeCycleTypeDefinition : org.kevoree.modeling.api.KMFContainer , org.kevoree.TypeDefinition {
public open var startMethod : String?
public open var stopMethod : String?
public open var updateMethod : String?
public fun getStopMethod() : String?
public fun setStopMethod(p : String?)
public fun getUpdateMethod() : String?
public fun setUpdateMethod(p : String?)
public fun getStartMethod() : String?
public fun setStartMethod(p : String?)
}
