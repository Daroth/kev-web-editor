package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait Dictionary : org.kevoree.modeling.api.KMFContainer {
public open var generated_KMF_ID : String?
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getValues() : List<org.kevoree.DictionaryValue>
public fun setValues(p : List<org.kevoree.DictionaryValue>)
open var values : List<org.kevoree.DictionaryValue>
fun addValues(values : org.kevoree.DictionaryValue)
fun addAllValues(values :List<org.kevoree.DictionaryValue>)
fun removeValues(values : org.kevoree.DictionaryValue)
fun removeAllValues()
fun findValuesByID(key : String?) : org.kevoree.DictionaryValue?
}
