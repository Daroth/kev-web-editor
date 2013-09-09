package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait ContainerRoot : org.kevoree.modeling.api.KMFContainer {
public open var generated_KMF_ID : String?
public fun getGenerated_KMF_ID() : String?
public fun setGenerated_KMF_ID(p : String?)
public fun getNodes() : List<org.kevoree.ContainerNode>
public fun setNodes(p : List<org.kevoree.ContainerNode>)
public fun getTypeDefinitions() : List<org.kevoree.TypeDefinition>
public fun setTypeDefinitions(p : List<org.kevoree.TypeDefinition>)
public fun getRepositories() : List<org.kevoree.Repository>
public fun setRepositories(p : List<org.kevoree.Repository>)
public fun getDataTypes() : List<org.kevoree.TypedElement>
public fun setDataTypes(p : List<org.kevoree.TypedElement>)
public fun getLibraries() : List<org.kevoree.TypeLibrary>
public fun setLibraries(p : List<org.kevoree.TypeLibrary>)
public fun getHubs() : List<org.kevoree.Channel>
public fun setHubs(p : List<org.kevoree.Channel>)
public fun getMBindings() : List<org.kevoree.MBinding>
public fun setMBindings(p : List<org.kevoree.MBinding>)
public fun getDeployUnits() : List<org.kevoree.DeployUnit>
public fun setDeployUnits(p : List<org.kevoree.DeployUnit>)
public fun getNodeNetworks() : List<org.kevoree.NodeNetwork>
public fun setNodeNetworks(p : List<org.kevoree.NodeNetwork>)
public fun getGroups() : List<org.kevoree.Group>
public fun setGroups(p : List<org.kevoree.Group>)
public fun getAdaptationPrimitiveTypes() : List<org.kevoree.AdaptationPrimitiveType>
public fun setAdaptationPrimitiveTypes(p : List<org.kevoree.AdaptationPrimitiveType>)
open var nodes : List<org.kevoree.ContainerNode>
fun addNodes(nodes : org.kevoree.ContainerNode)
fun addAllNodes(nodes :List<org.kevoree.ContainerNode>)
fun removeNodes(nodes : org.kevoree.ContainerNode)
fun removeAllNodes()
fun findNodesByID(key : String?) : org.kevoree.ContainerNode?
open var typeDefinitions : List<org.kevoree.TypeDefinition>
fun addTypeDefinitions(typeDefinitions : org.kevoree.TypeDefinition)
fun addAllTypeDefinitions(typeDefinitions :List<org.kevoree.TypeDefinition>)
fun removeTypeDefinitions(typeDefinitions : org.kevoree.TypeDefinition)
fun removeAllTypeDefinitions()
fun findTypeDefinitionsByID(key : String?) : org.kevoree.TypeDefinition?
open var repositories : List<org.kevoree.Repository>
fun addRepositories(repositories : org.kevoree.Repository)
fun addAllRepositories(repositories :List<org.kevoree.Repository>)
fun removeRepositories(repositories : org.kevoree.Repository)
fun removeAllRepositories()
fun findRepositoriesByID(key : String?) : org.kevoree.Repository?
open var dataTypes : List<org.kevoree.TypedElement>
fun addDataTypes(dataTypes : org.kevoree.TypedElement)
fun addAllDataTypes(dataTypes :List<org.kevoree.TypedElement>)
fun removeDataTypes(dataTypes : org.kevoree.TypedElement)
fun removeAllDataTypes()
fun findDataTypesByID(key : String?) : org.kevoree.TypedElement?
open var libraries : List<org.kevoree.TypeLibrary>
fun addLibraries(libraries : org.kevoree.TypeLibrary)
fun addAllLibraries(libraries :List<org.kevoree.TypeLibrary>)
fun removeLibraries(libraries : org.kevoree.TypeLibrary)
fun removeAllLibraries()
fun findLibrariesByID(key : String?) : org.kevoree.TypeLibrary?
open var hubs : List<org.kevoree.Channel>
fun addHubs(hubs : org.kevoree.Channel)
fun addAllHubs(hubs :List<org.kevoree.Channel>)
fun removeHubs(hubs : org.kevoree.Channel)
fun removeAllHubs()
fun findHubsByID(key : String?) : org.kevoree.Channel?
open var mBindings : List<org.kevoree.MBinding>
fun addMBindings(mBindings : org.kevoree.MBinding)
fun addAllMBindings(mBindings :List<org.kevoree.MBinding>)
fun removeMBindings(mBindings : org.kevoree.MBinding)
fun removeAllMBindings()
fun findMBindingsByID(key : String?) : org.kevoree.MBinding?
open var deployUnits : List<org.kevoree.DeployUnit>
fun addDeployUnits(deployUnits : org.kevoree.DeployUnit)
fun addAllDeployUnits(deployUnits :List<org.kevoree.DeployUnit>)
fun removeDeployUnits(deployUnits : org.kevoree.DeployUnit)
fun removeAllDeployUnits()
fun findDeployUnitsByID(key : String?) : org.kevoree.DeployUnit?
open var nodeNetworks : List<org.kevoree.NodeNetwork>
fun addNodeNetworks(nodeNetworks : org.kevoree.NodeNetwork)
fun addAllNodeNetworks(nodeNetworks :List<org.kevoree.NodeNetwork>)
fun removeNodeNetworks(nodeNetworks : org.kevoree.NodeNetwork)
fun removeAllNodeNetworks()
fun findNodeNetworksByID(key : String?) : org.kevoree.NodeNetwork?
open var groups : List<org.kevoree.Group>
fun addGroups(groups : org.kevoree.Group)
fun addAllGroups(groups :List<org.kevoree.Group>)
fun removeGroups(groups : org.kevoree.Group)
fun removeAllGroups()
fun findGroupsByID(key : String?) : org.kevoree.Group?
open var adaptationPrimitiveTypes : List<org.kevoree.AdaptationPrimitiveType>
fun addAdaptationPrimitiveTypes(adaptationPrimitiveTypes : org.kevoree.AdaptationPrimitiveType)
fun addAllAdaptationPrimitiveTypes(adaptationPrimitiveTypes :List<org.kevoree.AdaptationPrimitiveType>)
fun removeAdaptationPrimitiveTypes(adaptationPrimitiveTypes : org.kevoree.AdaptationPrimitiveType)
fun removeAllAdaptationPrimitiveTypes()
fun findAdaptationPrimitiveTypesByID(key : String?) : org.kevoree.AdaptationPrimitiveType?
}
