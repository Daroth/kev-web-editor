package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait Repository : org.kevoree.modeling.api.KMFContainer {
public open var url : String?
public fun getUrl() : String?
public fun setUrl(p : String?)
public fun getUnits() : List<org.kevoree.DeployUnit>
public fun setUnits(p : List<org.kevoree.DeployUnit>)
open var units : List<org.kevoree.DeployUnit>
fun addUnits(units : org.kevoree.DeployUnit)
fun addAllUnits(units :List<org.kevoree.DeployUnit>)
fun removeUnits(units : org.kevoree.DeployUnit)
fun removeAllUnits()
fun findUnitsByID(key : String?) : org.kevoree.DeployUnit?
}
