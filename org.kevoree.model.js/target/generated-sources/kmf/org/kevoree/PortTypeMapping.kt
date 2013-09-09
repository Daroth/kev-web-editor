package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait PortTypeMapping : org.kevoree.modeling.api.KMFContainer {
public open var beanMethodName : String?
public open var serviceMethodName : String?
public open var paramTypes : String?
public open var generated_KMF_ID : String?
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getParamTypes() : String?
public fun setParamTypes(p : String?)
public fun getServiceMethodName() : String?
public fun setServiceMethodName(p : String?)
public fun getBeanMethodName() : String?
public fun setBeanMethodName(p : String?)
}
