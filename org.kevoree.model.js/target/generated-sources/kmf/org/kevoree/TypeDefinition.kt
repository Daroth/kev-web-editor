package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait TypeDefinition : org.kevoree.modeling.api.KMFContainer , org.kevoree.NamedElement {
public open var factoryBean : String?
public open var bean : String?
public open var abstract : Boolean?
public fun getAbstract() : Boolean?
public fun setAbstract(p : Boolean?)
public fun getBean() : String?
public fun setBean(p : String?)
public fun getFactoryBean() : String?
public fun setFactoryBean(p : String?)
public fun getDeployUnits() : List<org.kevoree.DeployUnit>
public fun setDeployUnits(p : List<org.kevoree.DeployUnit>)
public fun getDictionaryType() : org.kevoree.DictionaryType?
public fun setDictionaryType(p : org.kevoree.DictionaryType?)
public fun getSuperTypes() : List<org.kevoree.TypeDefinition>
public fun setSuperTypes(p : List<org.kevoree.TypeDefinition>)
open var deployUnits : List<org.kevoree.DeployUnit>
fun addDeployUnits(deployUnits : org.kevoree.DeployUnit)
fun addAllDeployUnits(deployUnits :List<org.kevoree.DeployUnit>)
fun removeDeployUnits(deployUnits : org.kevoree.DeployUnit)
fun removeAllDeployUnits()
fun findDeployUnitsByID(key : String?) : org.kevoree.DeployUnit?
open var dictionaryType : org.kevoree.DictionaryType?
open var superTypes : List<org.kevoree.TypeDefinition>
fun addSuperTypes(superTypes : org.kevoree.TypeDefinition)
fun addAllSuperTypes(superTypes :List<org.kevoree.TypeDefinition>)
fun removeSuperTypes(superTypes : org.kevoree.TypeDefinition)
fun removeAllSuperTypes()
fun findSuperTypesByID(key : String?) : org.kevoree.TypeDefinition?
}
