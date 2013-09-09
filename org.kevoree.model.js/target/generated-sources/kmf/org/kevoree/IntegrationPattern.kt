package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait IntegrationPattern : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement {
public fun getExtraFonctionalProperties() : List<org.kevoree.ExtraFonctionalProperty>
public fun setExtraFonctionalProperties(p : List<org.kevoree.ExtraFonctionalProperty>)
public fun getPortTypes() : List<org.kevoree.PortTypeRef>
public fun setPortTypes(p : List<org.kevoree.PortTypeRef>)
open var extraFonctionalProperties : List<org.kevoree.ExtraFonctionalProperty>
fun addExtraFonctionalProperties(extraFonctionalProperties : org.kevoree.ExtraFonctionalProperty)
fun addAllExtraFonctionalProperties(extraFonctionalProperties :List<org.kevoree.ExtraFonctionalProperty>)
fun removeExtraFonctionalProperties(extraFonctionalProperties : org.kevoree.ExtraFonctionalProperty)
fun removeAllExtraFonctionalProperties()
fun findExtraFonctionalPropertiesByID(key : String?) : org.kevoree.ExtraFonctionalProperty?
open var portTypes : List<org.kevoree.PortTypeRef>
fun addPortTypes(portTypes : org.kevoree.PortTypeRef)
fun addAllPortTypes(portTypes :List<org.kevoree.PortTypeRef>)
fun removePortTypes(portTypes : org.kevoree.PortTypeRef)
fun removeAllPortTypes()
fun findPortTypesByID(key : String?) : org.kevoree.PortTypeRef?
}
