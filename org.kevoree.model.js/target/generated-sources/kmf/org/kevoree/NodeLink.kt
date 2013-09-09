package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait NodeLink : org.kevoree.modeling.api.KMFContainer {
public open var networkType : String?
public open var estimatedRate : Int?
public open var lastCheck : String?
public open var zoneID : String?
public open var generated_KMF_ID : String?
public fun getEstimatedRate() : Int?
public fun setEstimatedRate(p : Int?)
public fun getNetworkType() : String?
public fun setNetworkType(p : String?)
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getLastCheck() : String?
public fun setLastCheck(p : String?)
public fun getZoneID() : String?
public fun setZoneID(p : String?)
public fun getNetworkProperties() : List<org.kevoree.NetworkProperty>
public fun setNetworkProperties(p : List<org.kevoree.NetworkProperty>)
open var networkProperties : List<org.kevoree.NetworkProperty>
fun addNetworkProperties(networkProperties : org.kevoree.NetworkProperty)
fun addAllNetworkProperties(networkProperties :List<org.kevoree.NetworkProperty>)
fun removeNetworkProperties(networkProperties : org.kevoree.NetworkProperty)
fun removeAllNetworkProperties()
fun findNetworkPropertiesByID(key : String?) : org.kevoree.NetworkProperty?
}
