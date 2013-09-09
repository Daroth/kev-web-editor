package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait MessagePortType : org.kevoree.modeling.api.KMFContainer , org.kevoree.PortType {
public fun getFilters() : List<org.kevoree.TypedElement>
public fun setFilters(p : List<org.kevoree.TypedElement>)
open var filters : List<org.kevoree.TypedElement>
fun addFilters(filters : org.kevoree.TypedElement)
fun addAllFilters(filters :List<org.kevoree.TypedElement>)
fun removeFilters(filters : org.kevoree.TypedElement)
fun removeAllFilters()
fun findFiltersByID(key : String?) : org.kevoree.TypedElement?
}
