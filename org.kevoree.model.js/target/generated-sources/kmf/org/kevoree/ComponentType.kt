package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait ComponentType : org.kevoree.modeling.api.KMFContainer , org.kevoree.LifeCycleTypeDefinition {
public fun getRequired() : List<org.kevoree.PortTypeRef>
public fun setRequired(p : List<org.kevoree.PortTypeRef>)
public fun getIntegrationPatterns() : List<org.kevoree.IntegrationPattern>
public fun setIntegrationPatterns(p : List<org.kevoree.IntegrationPattern>)
public fun getExtraFonctionalProperties() : org.kevoree.ExtraFonctionalProperty?
public fun setExtraFonctionalProperties(p : org.kevoree.ExtraFonctionalProperty?)
public fun getProvided() : List<org.kevoree.PortTypeRef>
public fun setProvided(p : List<org.kevoree.PortTypeRef>)
open var required : List<org.kevoree.PortTypeRef>
fun addRequired(required : org.kevoree.PortTypeRef)
fun addAllRequired(required :List<org.kevoree.PortTypeRef>)
fun removeRequired(required : org.kevoree.PortTypeRef)
fun removeAllRequired()
fun findRequiredByID(key : String?) : org.kevoree.PortTypeRef?
open var integrationPatterns : List<org.kevoree.IntegrationPattern>
fun addIntegrationPatterns(integrationPatterns : org.kevoree.IntegrationPattern)
fun addAllIntegrationPatterns(integrationPatterns :List<org.kevoree.IntegrationPattern>)
fun removeIntegrationPatterns(integrationPatterns : org.kevoree.IntegrationPattern)
fun removeAllIntegrationPatterns()
fun findIntegrationPatternsByID(key : String?) : org.kevoree.IntegrationPattern?
open var extraFonctionalProperties : org.kevoree.ExtraFonctionalProperty?
open var provided : List<org.kevoree.PortTypeRef>
fun addProvided(provided : org.kevoree.PortTypeRef)
fun addAllProvided(provided :List<org.kevoree.PortTypeRef>)
fun removeProvided(provided : org.kevoree.PortTypeRef)
fun removeAllProvided()
fun findProvidedByID(key : String?) : org.kevoree.PortTypeRef?
}
