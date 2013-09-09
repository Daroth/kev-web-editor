package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait Channel : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement , org.kevoree.Instance {
public fun getBindings() : List<org.kevoree.MBinding>
public fun setBindings(p : List<org.kevoree.MBinding>)
open var bindings : List<org.kevoree.MBinding>
fun addBindings(bindings : org.kevoree.MBinding)
fun addAllBindings(bindings :List<org.kevoree.MBinding>)
fun removeBindings(bindings : org.kevoree.MBinding)
fun removeAllBindings()
fun findBindingsByID(key : String?) : org.kevoree.MBinding?
}
