package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait DictionaryType : org.kevoree.modeling.api.KMFContainer {
public open var generated_KMF_ID : String?
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getAttributes() : List<org.kevoree.DictionaryAttribute>
public fun setAttributes(p : List<org.kevoree.DictionaryAttribute>)
public fun getDefaultValues() : List<org.kevoree.DictionaryValue>
public fun setDefaultValues(p : List<org.kevoree.DictionaryValue>)
open var attributes : List<org.kevoree.DictionaryAttribute>
fun addAttributes(attributes : org.kevoree.DictionaryAttribute)
fun addAllAttributes(attributes :List<org.kevoree.DictionaryAttribute>)
fun removeAttributes(attributes : org.kevoree.DictionaryAttribute)
fun removeAllAttributes()
fun findAttributesByID(key : String?) : org.kevoree.DictionaryAttribute?
open var defaultValues : List<org.kevoree.DictionaryValue>
fun addDefaultValues(defaultValues : org.kevoree.DictionaryValue)
fun addAllDefaultValues(defaultValues :List<org.kevoree.DictionaryValue>)
fun removeDefaultValues(defaultValues : org.kevoree.DictionaryValue)
fun removeAllDefaultValues()
fun findDefaultValuesByID(key : String?) : org.kevoree.DictionaryValue?
}
