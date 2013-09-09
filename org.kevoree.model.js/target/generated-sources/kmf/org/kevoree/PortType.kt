package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait PortType : org.kevoree.modeling.api.KMFContainer , org.kevoree.TypeDefinition {
public open var synchrone : Boolean?
public fun getSynchrone() : Boolean?
public fun setSynchrone(p : Boolean?)
}
