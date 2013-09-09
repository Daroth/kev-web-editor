package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait DictionaryAttribute : org.kevoree.modeling.api.KMFContainer , org.kevoree.TypedElement {
public open var optional : Boolean?
public open var state : Boolean?
public open var datatype : String?
public open var fragmentDependant : Boolean?
public fun getFragmentDependant() : Boolean?
public fun setFragmentDependant(p : Boolean?)
public fun getOptional() : Boolean?
public fun setOptional(p : Boolean?)
public fun getState() : Boolean?
public fun setState(p : Boolean?)
public fun getDatatype() : String?
public fun setDatatype(p : String?)
}
