package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait DeployUnit : org.kevoree.modeling.api.KMFContainer {
public open var name : String?
public open var groupName : String?
public open var unitName : String?
public open var version : String?
public open var url : String?
public open var hashcode : String?
public open var `type` : String?
public open var generated_KMF_ID : String?
public fun getGroupName() : String?
public fun setGroupName(p : String?)
public fun getUnitName() : String?
public fun setUnitName(p : String?)
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getName() : String?
public fun setName(p : String?)
public fun getHashcode() : String?
public fun setHashcode(p : String?)
public fun getType() : String?
public fun setType(p : String?)
public fun getUrl() : String?
public fun setUrl(p : String?)
public fun getVersion() : String?
public fun setVersion(p : String?)
public fun getRequiredLibs() : List<org.kevoree.DeployUnit>
public fun setRequiredLibs(p : List<org.kevoree.DeployUnit>)
public fun getTargetNodeType() : org.kevoree.NodeType?
public fun setTargetNodeType(p : org.kevoree.NodeType?)
open var requiredLibs : List<org.kevoree.DeployUnit>
fun addRequiredLibs(requiredLibs : org.kevoree.DeployUnit)
fun addAllRequiredLibs(requiredLibs :List<org.kevoree.DeployUnit>)
fun removeRequiredLibs(requiredLibs : org.kevoree.DeployUnit)
fun removeAllRequiredLibs()
fun findRequiredLibsByID(key : String?) : org.kevoree.DeployUnit?
open var targetNodeType : org.kevoree.NodeType?
}
