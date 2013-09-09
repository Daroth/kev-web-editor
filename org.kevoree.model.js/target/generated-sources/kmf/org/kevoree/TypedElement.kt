package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait TypedElement : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement {
public fun getGenericTypes() : List<org.kevoree.TypedElement>
public fun setGenericTypes(p : List<org.kevoree.TypedElement>)
open var genericTypes : List<org.kevoree.TypedElement>
fun addGenericTypes(genericTypes : org.kevoree.TypedElement)
fun addAllGenericTypes(genericTypes :List<org.kevoree.TypedElement>)
fun removeGenericTypes(genericTypes : org.kevoree.TypedElement)
fun removeAllGenericTypes()
fun findGenericTypesByID(key : String?) : org.kevoree.TypedElement?
}
