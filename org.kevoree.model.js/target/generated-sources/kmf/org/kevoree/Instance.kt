package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait Instance : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement {
public open var metaData : String?
public open var started : Boolean?
public fun getStarted() : Boolean?
public fun setStarted(p : Boolean?)
public fun getMetaData() : String?
public fun setMetaData(p : String?)
public fun getTypeDefinition() : org.kevoree.TypeDefinition?
public fun setTypeDefinition(p : org.kevoree.TypeDefinition?)
public fun getDictionary() : org.kevoree.Dictionary?
public fun setDictionary(p : org.kevoree.Dictionary?)
open var typeDefinition : org.kevoree.TypeDefinition?
open var dictionary : org.kevoree.Dictionary?
}
