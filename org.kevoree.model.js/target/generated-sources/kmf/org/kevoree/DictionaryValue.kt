package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait DictionaryValue : org.kevoree.modeling.api.KMFContainer {
public open var value : String?
public open var generated_KMF_ID : String?
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getValue() : String?
public fun setValue(p : String?)
public fun getAttribute() : org.kevoree.DictionaryAttribute?
public fun setAttribute(p : org.kevoree.DictionaryAttribute?)
public fun getTargetNode() : org.kevoree.ContainerNode?
public fun setTargetNode(p : org.kevoree.ContainerNode?)
open var attribute : org.kevoree.DictionaryAttribute?
open var targetNode : org.kevoree.ContainerNode?
}
