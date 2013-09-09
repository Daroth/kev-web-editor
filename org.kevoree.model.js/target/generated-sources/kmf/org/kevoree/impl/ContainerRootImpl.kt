package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class ContainerRootImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.ContainerRoot { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_nodes?.clear()
_typeDefinitions?.clear()
_repositories?.clear()
_dataTypes?.clear()
_libraries?.clear()
_hubs?.clear()
_mBindings?.clear()
_deployUnits?.clear()
_nodeNetworks?.clear()
_groups?.clear()
_adaptationPrimitiveTypes?.clear()
}
public override var generated_KMF_ID : String? = ""+Math.random() + java.util.Date().getTime()
	 set(iP : String?){
internal_generated_KMF_ID(iP, true)
	}//end of setter

	private fun internal_generated_KMF_ID(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != generated_KMF_ID){
val oldPath = path()
val oldId = internalGetKey()
val previousParent = eContainer();
val previousRefNameInParent = getRefInParent();
$generated_KMF_ID = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_generated_KMF_ID, generated_KMF_ID))
}
if(previousParent!=null){
previousParent.reflexiveMutator(org.kevoree.modeling.api.util.ActionType.RENEW_INDEX, previousRefNameInParent!!, oldId,false,false);
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.RENEW_INDEX, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Att_generated_KMF_ID, path()))
}
	}
	}//end of setter
internal val _nodes : java.util.HashMap<String,org.kevoree.ContainerNode> = java.util.HashMap<String,org.kevoree.ContainerNode>()
override var nodes:List<org.kevoree.ContainerNode>
	  get(){
		  return _nodes.values().toList()
	  }
	 set(nodesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(nodesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_nodes(nodesP, true, true)
}
fun internal_nodes(nodesP : List<org.kevoree.ContainerNode>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_nodes.values()!= nodesP){
_nodes.clear()
for(el in nodesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_nodes.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_nodes, el),org.kevoree.util.Constants.Ref_nodes)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_nodes, nodesP))
}
}
}


private fun doAddNodes(nodesP : org.kevoree.ContainerNode) {
val _key_ = (nodesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_nodes.containsKey(_key_)) {
_nodes.put(_key_,nodesP)
(nodesP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_nodes, nodesP),org.kevoree.util.Constants.Ref_nodes)
}
}

override fun addNodes(nodesP : org.kevoree.ContainerNode) {
internal_addNodes(nodesP, true, true)
}

override fun addAllNodes(nodesP :List<org.kevoree.ContainerNode>) {
internal_addAllNodes(nodesP, true, true)
}

private fun internal_addNodes(nodesP : org.kevoree.ContainerNode, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddNodes(nodesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_nodes, nodesP))
}
}

private fun internal_addAllNodes(nodesP :List<org.kevoree.ContainerNode>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in nodesP){
doAddNodes(el)
}
} else {
for(el in nodesP){
doAddNodes(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_nodes, nodesP))
}
}


override fun removeNodes(nodesP : org.kevoree.ContainerNode) {
internal_removeNodes(nodesP, true, true)
}

var removeAllNodesCurrentlyProcessing : Boolean = false

override fun removeAllNodes() {
internal_removeAllNodes(true, true)
}

private fun internal_removeNodes(nodesP : org.kevoree.ContainerNode, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_nodes.size() != 0 && _nodes.containsKey((nodesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_nodes.remove((nodesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(nodesP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllNodesCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_nodes, nodesP))
}
}
}

private fun internal_removeAllNodes(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllNodesCurrentlyProcessing=true
}
val temp_els = nodes!!
_nodes.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_nodes, temp_els))

removeAllNodesCurrentlyProcessing=false
}
}

internal val _typeDefinitions : java.util.HashMap<String,org.kevoree.TypeDefinition> = java.util.HashMap<String,org.kevoree.TypeDefinition>()
override var typeDefinitions:List<org.kevoree.TypeDefinition>
	  get(){
		  return _typeDefinitions.values().toList()
	  }
	 set(typeDefinitionsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(typeDefinitionsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_typeDefinitions(typeDefinitionsP, true, true)
}
fun internal_typeDefinitions(typeDefinitionsP : List<org.kevoree.TypeDefinition>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_typeDefinitions.values()!= typeDefinitionsP){
_typeDefinitions.clear()
for(el in typeDefinitionsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_typeDefinitions.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_typeDefinitions, el),org.kevoree.util.Constants.Ref_typeDefinitions)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_typeDefinitions, typeDefinitionsP))
}
}
}


private fun doAddTypeDefinitions(typeDefinitionsP : org.kevoree.TypeDefinition) {
val _key_ = (typeDefinitionsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_typeDefinitions.containsKey(_key_)) {
_typeDefinitions.put(_key_,typeDefinitionsP)
(typeDefinitionsP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_typeDefinitions, typeDefinitionsP),org.kevoree.util.Constants.Ref_typeDefinitions)
}
}

override fun addTypeDefinitions(typeDefinitionsP : org.kevoree.TypeDefinition) {
internal_addTypeDefinitions(typeDefinitionsP, true, true)
}

override fun addAllTypeDefinitions(typeDefinitionsP :List<org.kevoree.TypeDefinition>) {
internal_addAllTypeDefinitions(typeDefinitionsP, true, true)
}

private fun internal_addTypeDefinitions(typeDefinitionsP : org.kevoree.TypeDefinition, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddTypeDefinitions(typeDefinitionsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_typeDefinitions, typeDefinitionsP))
}
}

private fun internal_addAllTypeDefinitions(typeDefinitionsP :List<org.kevoree.TypeDefinition>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in typeDefinitionsP){
doAddTypeDefinitions(el)
}
} else {
for(el in typeDefinitionsP){
doAddTypeDefinitions(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_typeDefinitions, typeDefinitionsP))
}
}


override fun removeTypeDefinitions(typeDefinitionsP : org.kevoree.TypeDefinition) {
internal_removeTypeDefinitions(typeDefinitionsP, true, true)
}

var removeAllTypeDefinitionsCurrentlyProcessing : Boolean = false

override fun removeAllTypeDefinitions() {
internal_removeAllTypeDefinitions(true, true)
}

private fun internal_removeTypeDefinitions(typeDefinitionsP : org.kevoree.TypeDefinition, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_typeDefinitions.size() != 0 && _typeDefinitions.containsKey((typeDefinitionsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_typeDefinitions.remove((typeDefinitionsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(typeDefinitionsP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllTypeDefinitionsCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_typeDefinitions, typeDefinitionsP))
}
}
}

private fun internal_removeAllTypeDefinitions(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllTypeDefinitionsCurrentlyProcessing=true
}
val temp_els = typeDefinitions!!
_typeDefinitions.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_typeDefinitions, temp_els))

removeAllTypeDefinitionsCurrentlyProcessing=false
}
}

internal val _repositories : java.util.HashMap<String,org.kevoree.Repository> = java.util.HashMap<String,org.kevoree.Repository>()
override var repositories:List<org.kevoree.Repository>
	  get(){
		  return _repositories.values().toList()
	  }
	 set(repositoriesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(repositoriesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_repositories(repositoriesP, true, true)
}
fun internal_repositories(repositoriesP : List<org.kevoree.Repository>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_repositories.values()!= repositoriesP){
_repositories.clear()
for(el in repositoriesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_repositories.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_repositories, el),org.kevoree.util.Constants.Ref_repositories)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_repositories, repositoriesP))
}
}
}


private fun doAddRepositories(repositoriesP : org.kevoree.Repository) {
val _key_ = (repositoriesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_repositories.containsKey(_key_)) {
_repositories.put(_key_,repositoriesP)
(repositoriesP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_repositories, repositoriesP),org.kevoree.util.Constants.Ref_repositories)
}
}

override fun addRepositories(repositoriesP : org.kevoree.Repository) {
internal_addRepositories(repositoriesP, true, true)
}

override fun addAllRepositories(repositoriesP :List<org.kevoree.Repository>) {
internal_addAllRepositories(repositoriesP, true, true)
}

private fun internal_addRepositories(repositoriesP : org.kevoree.Repository, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddRepositories(repositoriesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_repositories, repositoriesP))
}
}

private fun internal_addAllRepositories(repositoriesP :List<org.kevoree.Repository>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in repositoriesP){
doAddRepositories(el)
}
} else {
for(el in repositoriesP){
doAddRepositories(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_repositories, repositoriesP))
}
}


override fun removeRepositories(repositoriesP : org.kevoree.Repository) {
internal_removeRepositories(repositoriesP, true, true)
}

var removeAllRepositoriesCurrentlyProcessing : Boolean = false

override fun removeAllRepositories() {
internal_removeAllRepositories(true, true)
}

private fun internal_removeRepositories(repositoriesP : org.kevoree.Repository, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_repositories.size() != 0 && _repositories.containsKey((repositoriesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_repositories.remove((repositoriesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(repositoriesP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllRepositoriesCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_repositories, repositoriesP))
}
}
}

private fun internal_removeAllRepositories(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllRepositoriesCurrentlyProcessing=true
}
val temp_els = repositories!!
_repositories.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_repositories, temp_els))

removeAllRepositoriesCurrentlyProcessing=false
}
}

internal val _dataTypes : java.util.HashMap<String,org.kevoree.TypedElement> = java.util.HashMap<String,org.kevoree.TypedElement>()
override var dataTypes:List<org.kevoree.TypedElement>
	  get(){
		  return _dataTypes.values().toList()
	  }
	 set(dataTypesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(dataTypesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_dataTypes(dataTypesP, true, true)
}
fun internal_dataTypes(dataTypesP : List<org.kevoree.TypedElement>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_dataTypes.values()!= dataTypesP){
_dataTypes.clear()
for(el in dataTypesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_dataTypes.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_dataTypes, el),org.kevoree.util.Constants.Ref_dataTypes)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_dataTypes, dataTypesP))
}
}
}


private fun doAddDataTypes(dataTypesP : org.kevoree.TypedElement) {
val _key_ = (dataTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_dataTypes.containsKey(_key_)) {
_dataTypes.put(_key_,dataTypesP)
(dataTypesP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_dataTypes, dataTypesP),org.kevoree.util.Constants.Ref_dataTypes)
}
}

override fun addDataTypes(dataTypesP : org.kevoree.TypedElement) {
internal_addDataTypes(dataTypesP, true, true)
}

override fun addAllDataTypes(dataTypesP :List<org.kevoree.TypedElement>) {
internal_addAllDataTypes(dataTypesP, true, true)
}

private fun internal_addDataTypes(dataTypesP : org.kevoree.TypedElement, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddDataTypes(dataTypesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_dataTypes, dataTypesP))
}
}

private fun internal_addAllDataTypes(dataTypesP :List<org.kevoree.TypedElement>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in dataTypesP){
doAddDataTypes(el)
}
} else {
for(el in dataTypesP){
doAddDataTypes(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_dataTypes, dataTypesP))
}
}


override fun removeDataTypes(dataTypesP : org.kevoree.TypedElement) {
internal_removeDataTypes(dataTypesP, true, true)
}

var removeAllDataTypesCurrentlyProcessing : Boolean = false

override fun removeAllDataTypes() {
internal_removeAllDataTypes(true, true)
}

private fun internal_removeDataTypes(dataTypesP : org.kevoree.TypedElement, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_dataTypes.size() != 0 && _dataTypes.containsKey((dataTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_dataTypes.remove((dataTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(dataTypesP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllDataTypesCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_dataTypes, dataTypesP))
}
}
}

private fun internal_removeAllDataTypes(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllDataTypesCurrentlyProcessing=true
}
val temp_els = dataTypes!!
_dataTypes.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_dataTypes, temp_els))

removeAllDataTypesCurrentlyProcessing=false
}
}

internal val _libraries : java.util.HashMap<String,org.kevoree.TypeLibrary> = java.util.HashMap<String,org.kevoree.TypeLibrary>()
override var libraries:List<org.kevoree.TypeLibrary>
	  get(){
		  return _libraries.values().toList()
	  }
	 set(librariesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(librariesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_libraries(librariesP, true, true)
}
fun internal_libraries(librariesP : List<org.kevoree.TypeLibrary>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_libraries.values()!= librariesP){
_libraries.clear()
for(el in librariesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_libraries.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_libraries, el),org.kevoree.util.Constants.Ref_libraries)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_libraries, librariesP))
}
}
}


private fun doAddLibraries(librariesP : org.kevoree.TypeLibrary) {
val _key_ = (librariesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_libraries.containsKey(_key_)) {
_libraries.put(_key_,librariesP)
(librariesP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_libraries, librariesP),org.kevoree.util.Constants.Ref_libraries)
}
}

override fun addLibraries(librariesP : org.kevoree.TypeLibrary) {
internal_addLibraries(librariesP, true, true)
}

override fun addAllLibraries(librariesP :List<org.kevoree.TypeLibrary>) {
internal_addAllLibraries(librariesP, true, true)
}

private fun internal_addLibraries(librariesP : org.kevoree.TypeLibrary, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddLibraries(librariesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_libraries, librariesP))
}
}

private fun internal_addAllLibraries(librariesP :List<org.kevoree.TypeLibrary>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in librariesP){
doAddLibraries(el)
}
} else {
for(el in librariesP){
doAddLibraries(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_libraries, librariesP))
}
}


override fun removeLibraries(librariesP : org.kevoree.TypeLibrary) {
internal_removeLibraries(librariesP, true, true)
}

var removeAllLibrariesCurrentlyProcessing : Boolean = false

override fun removeAllLibraries() {
internal_removeAllLibraries(true, true)
}

private fun internal_removeLibraries(librariesP : org.kevoree.TypeLibrary, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_libraries.size() != 0 && _libraries.containsKey((librariesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_libraries.remove((librariesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(librariesP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllLibrariesCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_libraries, librariesP))
}
}
}

private fun internal_removeAllLibraries(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllLibrariesCurrentlyProcessing=true
}
val temp_els = libraries!!
_libraries.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_libraries, temp_els))

removeAllLibrariesCurrentlyProcessing=false
}
}

internal val _hubs : java.util.HashMap<String,org.kevoree.Channel> = java.util.HashMap<String,org.kevoree.Channel>()
override var hubs:List<org.kevoree.Channel>
	  get(){
		  return _hubs.values().toList()
	  }
	 set(hubsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(hubsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_hubs(hubsP, true, true)
}
fun internal_hubs(hubsP : List<org.kevoree.Channel>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_hubs.values()!= hubsP){
_hubs.clear()
for(el in hubsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_hubs.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_hubs, el),org.kevoree.util.Constants.Ref_hubs)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_hubs, hubsP))
}
}
}


private fun doAddHubs(hubsP : org.kevoree.Channel) {
val _key_ = (hubsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_hubs.containsKey(_key_)) {
_hubs.put(_key_,hubsP)
(hubsP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_hubs, hubsP),org.kevoree.util.Constants.Ref_hubs)
}
}

override fun addHubs(hubsP : org.kevoree.Channel) {
internal_addHubs(hubsP, true, true)
}

override fun addAllHubs(hubsP :List<org.kevoree.Channel>) {
internal_addAllHubs(hubsP, true, true)
}

private fun internal_addHubs(hubsP : org.kevoree.Channel, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddHubs(hubsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_hubs, hubsP))
}
}

private fun internal_addAllHubs(hubsP :List<org.kevoree.Channel>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in hubsP){
doAddHubs(el)
}
} else {
for(el in hubsP){
doAddHubs(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_hubs, hubsP))
}
}


override fun removeHubs(hubsP : org.kevoree.Channel) {
internal_removeHubs(hubsP, true, true)
}

var removeAllHubsCurrentlyProcessing : Boolean = false

override fun removeAllHubs() {
internal_removeAllHubs(true, true)
}

private fun internal_removeHubs(hubsP : org.kevoree.Channel, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_hubs.size() != 0 && _hubs.containsKey((hubsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_hubs.remove((hubsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(hubsP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllHubsCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_hubs, hubsP))
}
}
}

private fun internal_removeAllHubs(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllHubsCurrentlyProcessing=true
}
val temp_els = hubs!!
_hubs.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_hubs, temp_els))

removeAllHubsCurrentlyProcessing=false
}
}

internal val _mBindings : java.util.HashMap<String,org.kevoree.MBinding> = java.util.HashMap<String,org.kevoree.MBinding>()
override var mBindings:List<org.kevoree.MBinding>
	  get(){
		  return _mBindings.values().toList()
	  }
	 set(mBindingsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(mBindingsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_mBindings(mBindingsP, true, true)
}
fun internal_mBindings(mBindingsP : List<org.kevoree.MBinding>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_mBindings.values()!= mBindingsP){
_mBindings.clear()
for(el in mBindingsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_mBindings.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_mBindings, el),org.kevoree.util.Constants.Ref_mBindings)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_mBindings, mBindingsP))
}
}
}


private fun doAddMBindings(mBindingsP : org.kevoree.MBinding) {
val _key_ = (mBindingsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_mBindings.containsKey(_key_)) {
_mBindings.put(_key_,mBindingsP)
(mBindingsP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_mBindings, mBindingsP),org.kevoree.util.Constants.Ref_mBindings)
}
}

override fun addMBindings(mBindingsP : org.kevoree.MBinding) {
internal_addMBindings(mBindingsP, true, true)
}

override fun addAllMBindings(mBindingsP :List<org.kevoree.MBinding>) {
internal_addAllMBindings(mBindingsP, true, true)
}

private fun internal_addMBindings(mBindingsP : org.kevoree.MBinding, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddMBindings(mBindingsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_mBindings, mBindingsP))
}
}

private fun internal_addAllMBindings(mBindingsP :List<org.kevoree.MBinding>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in mBindingsP){
doAddMBindings(el)
}
} else {
for(el in mBindingsP){
doAddMBindings(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_mBindings, mBindingsP))
}
}


override fun removeMBindings(mBindingsP : org.kevoree.MBinding) {
internal_removeMBindings(mBindingsP, true, true)
}

var removeAllMBindingsCurrentlyProcessing : Boolean = false

override fun removeAllMBindings() {
internal_removeAllMBindings(true, true)
}

private fun internal_removeMBindings(mBindingsP : org.kevoree.MBinding, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_mBindings.size() != 0 && _mBindings.containsKey((mBindingsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_mBindings.remove((mBindingsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(mBindingsP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllMBindingsCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_mBindings, mBindingsP))
}
}
}

private fun internal_removeAllMBindings(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllMBindingsCurrentlyProcessing=true
}
val temp_els = mBindings!!
_mBindings.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_mBindings, temp_els))

removeAllMBindingsCurrentlyProcessing=false
}
}

internal val _deployUnits : java.util.HashMap<String,org.kevoree.DeployUnit> = java.util.HashMap<String,org.kevoree.DeployUnit>()
override var deployUnits:List<org.kevoree.DeployUnit>
	  get(){
		  return _deployUnits.values().toList()
	  }
	 set(deployUnitsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(deployUnitsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_deployUnits(deployUnitsP, true, true)
}
fun internal_deployUnits(deployUnitsP : List<org.kevoree.DeployUnit>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_deployUnits.values()!= deployUnitsP){
_deployUnits.clear()
for(el in deployUnitsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_deployUnits.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_deployUnits, el),org.kevoree.util.Constants.Ref_deployUnits)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_deployUnits, deployUnitsP))
}
}
}


private fun doAddDeployUnits(deployUnitsP : org.kevoree.DeployUnit) {
val _key_ = (deployUnitsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_deployUnits.containsKey(_key_)) {
_deployUnits.put(_key_,deployUnitsP)
(deployUnitsP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_deployUnits, deployUnitsP),org.kevoree.util.Constants.Ref_deployUnits)
}
}

override fun addDeployUnits(deployUnitsP : org.kevoree.DeployUnit) {
internal_addDeployUnits(deployUnitsP, true, true)
}

override fun addAllDeployUnits(deployUnitsP :List<org.kevoree.DeployUnit>) {
internal_addAllDeployUnits(deployUnitsP, true, true)
}

private fun internal_addDeployUnits(deployUnitsP : org.kevoree.DeployUnit, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddDeployUnits(deployUnitsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_deployUnits, deployUnitsP))
}
}

private fun internal_addAllDeployUnits(deployUnitsP :List<org.kevoree.DeployUnit>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in deployUnitsP){
doAddDeployUnits(el)
}
} else {
for(el in deployUnitsP){
doAddDeployUnits(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_deployUnits, deployUnitsP))
}
}


override fun removeDeployUnits(deployUnitsP : org.kevoree.DeployUnit) {
internal_removeDeployUnits(deployUnitsP, true, true)
}

var removeAllDeployUnitsCurrentlyProcessing : Boolean = false

override fun removeAllDeployUnits() {
internal_removeAllDeployUnits(true, true)
}

private fun internal_removeDeployUnits(deployUnitsP : org.kevoree.DeployUnit, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_deployUnits.size() != 0 && _deployUnits.containsKey((deployUnitsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_deployUnits.remove((deployUnitsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(deployUnitsP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllDeployUnitsCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_deployUnits, deployUnitsP))
}
}
}

private fun internal_removeAllDeployUnits(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllDeployUnitsCurrentlyProcessing=true
}
val temp_els = deployUnits!!
_deployUnits.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_deployUnits, temp_els))

removeAllDeployUnitsCurrentlyProcessing=false
}
}

internal val _nodeNetworks : java.util.HashMap<String,org.kevoree.NodeNetwork> = java.util.HashMap<String,org.kevoree.NodeNetwork>()
override var nodeNetworks:List<org.kevoree.NodeNetwork>
	  get(){
		  return _nodeNetworks.values().toList()
	  }
	 set(nodeNetworksP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(nodeNetworksP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_nodeNetworks(nodeNetworksP, true, true)
}
fun internal_nodeNetworks(nodeNetworksP : List<org.kevoree.NodeNetwork>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_nodeNetworks.values()!= nodeNetworksP){
_nodeNetworks.clear()
for(el in nodeNetworksP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_nodeNetworks.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_nodeNetworks, el),org.kevoree.util.Constants.Ref_nodeNetworks)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_nodeNetworks, nodeNetworksP))
}
}
}


private fun doAddNodeNetworks(nodeNetworksP : org.kevoree.NodeNetwork) {
val _key_ = (nodeNetworksP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_nodeNetworks.containsKey(_key_)) {
_nodeNetworks.put(_key_,nodeNetworksP)
(nodeNetworksP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_nodeNetworks, nodeNetworksP),org.kevoree.util.Constants.Ref_nodeNetworks)
}
}

override fun addNodeNetworks(nodeNetworksP : org.kevoree.NodeNetwork) {
internal_addNodeNetworks(nodeNetworksP, true, true)
}

override fun addAllNodeNetworks(nodeNetworksP :List<org.kevoree.NodeNetwork>) {
internal_addAllNodeNetworks(nodeNetworksP, true, true)
}

private fun internal_addNodeNetworks(nodeNetworksP : org.kevoree.NodeNetwork, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddNodeNetworks(nodeNetworksP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_nodeNetworks, nodeNetworksP))
}
}

private fun internal_addAllNodeNetworks(nodeNetworksP :List<org.kevoree.NodeNetwork>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in nodeNetworksP){
doAddNodeNetworks(el)
}
} else {
for(el in nodeNetworksP){
doAddNodeNetworks(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_nodeNetworks, nodeNetworksP))
}
}


override fun removeNodeNetworks(nodeNetworksP : org.kevoree.NodeNetwork) {
internal_removeNodeNetworks(nodeNetworksP, true, true)
}

var removeAllNodeNetworksCurrentlyProcessing : Boolean = false

override fun removeAllNodeNetworks() {
internal_removeAllNodeNetworks(true, true)
}

private fun internal_removeNodeNetworks(nodeNetworksP : org.kevoree.NodeNetwork, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_nodeNetworks.size() != 0 && _nodeNetworks.containsKey((nodeNetworksP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_nodeNetworks.remove((nodeNetworksP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(nodeNetworksP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllNodeNetworksCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_nodeNetworks, nodeNetworksP))
}
}
}

private fun internal_removeAllNodeNetworks(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllNodeNetworksCurrentlyProcessing=true
}
val temp_els = nodeNetworks!!
_nodeNetworks.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_nodeNetworks, temp_els))

removeAllNodeNetworksCurrentlyProcessing=false
}
}

internal val _groups : java.util.HashMap<String,org.kevoree.Group> = java.util.HashMap<String,org.kevoree.Group>()
override var groups:List<org.kevoree.Group>
	  get(){
		  return _groups.values().toList()
	  }
	 set(groupsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(groupsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_groups(groupsP, true, true)
}
fun internal_groups(groupsP : List<org.kevoree.Group>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_groups.values()!= groupsP){
_groups.clear()
for(el in groupsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_groups.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_groups, el),org.kevoree.util.Constants.Ref_groups)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_groups, groupsP))
}
}
}


private fun doAddGroups(groupsP : org.kevoree.Group) {
val _key_ = (groupsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_groups.containsKey(_key_)) {
_groups.put(_key_,groupsP)
(groupsP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_groups, groupsP),org.kevoree.util.Constants.Ref_groups)
}
}

override fun addGroups(groupsP : org.kevoree.Group) {
internal_addGroups(groupsP, true, true)
}

override fun addAllGroups(groupsP :List<org.kevoree.Group>) {
internal_addAllGroups(groupsP, true, true)
}

private fun internal_addGroups(groupsP : org.kevoree.Group, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddGroups(groupsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_groups, groupsP))
}
}

private fun internal_addAllGroups(groupsP :List<org.kevoree.Group>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in groupsP){
doAddGroups(el)
}
} else {
for(el in groupsP){
doAddGroups(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_groups, groupsP))
}
}


override fun removeGroups(groupsP : org.kevoree.Group) {
internal_removeGroups(groupsP, true, true)
}

var removeAllGroupsCurrentlyProcessing : Boolean = false

override fun removeAllGroups() {
internal_removeAllGroups(true, true)
}

private fun internal_removeGroups(groupsP : org.kevoree.Group, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_groups.size() != 0 && _groups.containsKey((groupsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_groups.remove((groupsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(groupsP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllGroupsCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_groups, groupsP))
}
}
}

private fun internal_removeAllGroups(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllGroupsCurrentlyProcessing=true
}
val temp_els = groups!!
_groups.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_groups, temp_els))

removeAllGroupsCurrentlyProcessing=false
}
}

internal val _adaptationPrimitiveTypes : java.util.HashMap<String,org.kevoree.AdaptationPrimitiveType> = java.util.HashMap<String,org.kevoree.AdaptationPrimitiveType>()
override var adaptationPrimitiveTypes:List<org.kevoree.AdaptationPrimitiveType>
	  get(){
		  return _adaptationPrimitiveTypes.values().toList()
	  }
	 set(adaptationPrimitiveTypesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(adaptationPrimitiveTypesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_adaptationPrimitiveTypes(adaptationPrimitiveTypesP, true, true)
}
fun internal_adaptationPrimitiveTypes(adaptationPrimitiveTypesP : List<org.kevoree.AdaptationPrimitiveType>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_adaptationPrimitiveTypes.values()!= adaptationPrimitiveTypesP){
_adaptationPrimitiveTypes.clear()
for(el in adaptationPrimitiveTypesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_adaptationPrimitiveTypes.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes, el),org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes, adaptationPrimitiveTypesP))
}
}
}


private fun doAddAdaptationPrimitiveTypes(adaptationPrimitiveTypesP : org.kevoree.AdaptationPrimitiveType) {
val _key_ = (adaptationPrimitiveTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_adaptationPrimitiveTypes.containsKey(_key_)) {
_adaptationPrimitiveTypes.put(_key_,adaptationPrimitiveTypesP)
(adaptationPrimitiveTypesP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes, adaptationPrimitiveTypesP),org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes)
}
}

override fun addAdaptationPrimitiveTypes(adaptationPrimitiveTypesP : org.kevoree.AdaptationPrimitiveType) {
internal_addAdaptationPrimitiveTypes(adaptationPrimitiveTypesP, true, true)
}

override fun addAllAdaptationPrimitiveTypes(adaptationPrimitiveTypesP :List<org.kevoree.AdaptationPrimitiveType>) {
internal_addAllAdaptationPrimitiveTypes(adaptationPrimitiveTypesP, true, true)
}

private fun internal_addAdaptationPrimitiveTypes(adaptationPrimitiveTypesP : org.kevoree.AdaptationPrimitiveType, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddAdaptationPrimitiveTypes(adaptationPrimitiveTypesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes, adaptationPrimitiveTypesP))
}
}

private fun internal_addAllAdaptationPrimitiveTypes(adaptationPrimitiveTypesP :List<org.kevoree.AdaptationPrimitiveType>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in adaptationPrimitiveTypesP){
doAddAdaptationPrimitiveTypes(el)
}
} else {
for(el in adaptationPrimitiveTypesP){
doAddAdaptationPrimitiveTypes(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes, adaptationPrimitiveTypesP))
}
}


override fun removeAdaptationPrimitiveTypes(adaptationPrimitiveTypesP : org.kevoree.AdaptationPrimitiveType) {
internal_removeAdaptationPrimitiveTypes(adaptationPrimitiveTypesP, true, true)
}

var removeAllAdaptationPrimitiveTypesCurrentlyProcessing : Boolean = false

override fun removeAllAdaptationPrimitiveTypes() {
internal_removeAllAdaptationPrimitiveTypes(true, true)
}

private fun internal_removeAdaptationPrimitiveTypes(adaptationPrimitiveTypesP : org.kevoree.AdaptationPrimitiveType, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_adaptationPrimitiveTypes.size() != 0 && _adaptationPrimitiveTypes.containsKey((adaptationPrimitiveTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_adaptationPrimitiveTypes.remove((adaptationPrimitiveTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(adaptationPrimitiveTypesP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllAdaptationPrimitiveTypesCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes, adaptationPrimitiveTypesP))
}
}
}

private fun internal_removeAllAdaptationPrimitiveTypes(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllAdaptationPrimitiveTypesCurrentlyProcessing=true
}
val temp_els = adaptationPrimitiveTypes!!
_adaptationPrimitiveTypes.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes, temp_els))

removeAllAdaptationPrimitiveTypesCurrentlyProcessing=false
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_generated_KMF_ID -> {
this.internal_generated_KMF_ID((value as? String), fireEvents)
}
org.kevoree.util.Constants.Ref_nodes -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addNodes(value as org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllNodes(value as List<org.kevoree.ContainerNode>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeNodes(value as org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllNodes()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_nodes.size() != 0 && _nodes.containsKey(value)) {
val obj = _nodes.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_nodes.remove(value)
_nodes.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_typeDefinitions -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addTypeDefinitions(value as org.kevoree.TypeDefinition, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllTypeDefinitions(value as List<org.kevoree.TypeDefinition>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeTypeDefinitions(value as org.kevoree.TypeDefinition, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllTypeDefinitions()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_typeDefinitions.size() != 0 && _typeDefinitions.containsKey(value)) {
val obj = _typeDefinitions.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_typeDefinitions.remove(value)
_typeDefinitions.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_repositories -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addRepositories(value as org.kevoree.Repository, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllRepositories(value as List<org.kevoree.Repository>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeRepositories(value as org.kevoree.Repository, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllRepositories()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_repositories.size() != 0 && _repositories.containsKey(value)) {
val obj = _repositories.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_repositories.remove(value)
_repositories.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_dataTypes -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addDataTypes(value as org.kevoree.TypedElement, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllDataTypes(value as List<org.kevoree.TypedElement>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeDataTypes(value as org.kevoree.TypedElement, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllDataTypes()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_dataTypes.size() != 0 && _dataTypes.containsKey(value)) {
val obj = _dataTypes.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_dataTypes.remove(value)
_dataTypes.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_libraries -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addLibraries(value as org.kevoree.TypeLibrary, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllLibraries(value as List<org.kevoree.TypeLibrary>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeLibraries(value as org.kevoree.TypeLibrary, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllLibraries()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_libraries.size() != 0 && _libraries.containsKey(value)) {
val obj = _libraries.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_libraries.remove(value)
_libraries.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_hubs -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addHubs(value as org.kevoree.Channel, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllHubs(value as List<org.kevoree.Channel>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeHubs(value as org.kevoree.Channel, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllHubs()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_hubs.size() != 0 && _hubs.containsKey(value)) {
val obj = _hubs.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_hubs.remove(value)
_hubs.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_mBindings -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addMBindings(value as org.kevoree.MBinding, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllMBindings(value as List<org.kevoree.MBinding>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeMBindings(value as org.kevoree.MBinding, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllMBindings()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_mBindings.size() != 0 && _mBindings.containsKey(value)) {
val obj = _mBindings.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_mBindings.remove(value)
_mBindings.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_deployUnits -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addDeployUnits(value as org.kevoree.DeployUnit, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllDeployUnits(value as List<org.kevoree.DeployUnit>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeDeployUnits(value as org.kevoree.DeployUnit, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllDeployUnits()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_deployUnits.size() != 0 && _deployUnits.containsKey(value)) {
val obj = _deployUnits.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_deployUnits.remove(value)
_deployUnits.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_nodeNetworks -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addNodeNetworks(value as org.kevoree.NodeNetwork, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllNodeNetworks(value as List<org.kevoree.NodeNetwork>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeNodeNetworks(value as org.kevoree.NodeNetwork, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllNodeNetworks()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_nodeNetworks.size() != 0 && _nodeNetworks.containsKey(value)) {
val obj = _nodeNetworks.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_nodeNetworks.remove(value)
_nodeNetworks.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_groups -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addGroups(value as org.kevoree.Group, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllGroups(value as List<org.kevoree.Group>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeGroups(value as org.kevoree.Group, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllGroups()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_groups.size() != 0 && _groups.containsKey(value)) {
val obj = _groups.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_groups.remove(value)
_groups.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addAdaptationPrimitiveTypes(value as org.kevoree.AdaptationPrimitiveType, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllAdaptationPrimitiveTypes(value as List<org.kevoree.AdaptationPrimitiveType>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeAdaptationPrimitiveTypes(value as org.kevoree.AdaptationPrimitiveType, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllAdaptationPrimitiveTypes()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_adaptationPrimitiveTypes.size() != 0 && _adaptationPrimitiveTypes.containsKey(value)) {
val obj = _adaptationPrimitiveTypes.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_adaptationPrimitiveTypes.remove(value)
_adaptationPrimitiveTypes.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
    else -> { throw Exception("Can reflexively "+mutationType+" for "+refName + " on "+ this) }
}
}
override fun internalGetKey() : String? {
return  generated_KMF_ID
}
override fun findNodesByID(key : String?) : org.kevoree.ContainerNode? {
return _nodes.get(key)
}
override fun findTypeDefinitionsByID(key : String?) : org.kevoree.TypeDefinition? {
return _typeDefinitions.get(key)
}
override fun findRepositoriesByID(key : String?) : org.kevoree.Repository? {
return _repositories.get(key)
}
override fun findDataTypesByID(key : String?) : org.kevoree.TypedElement? {
return _dataTypes.get(key)
}
override fun findLibrariesByID(key : String?) : org.kevoree.TypeLibrary? {
return _libraries.get(key)
}
override fun findHubsByID(key : String?) : org.kevoree.Channel? {
return _hubs.get(key)
}
override fun findMBindingsByID(key : String?) : org.kevoree.MBinding? {
return _mBindings.get(key)
}
override fun findDeployUnitsByID(key : String?) : org.kevoree.DeployUnit? {
return _deployUnits.get(key)
}
override fun findNodeNetworksByID(key : String?) : org.kevoree.NodeNetwork? {
return _nodeNetworks.get(key)
}
override fun findGroupsByID(key : String?) : org.kevoree.Group? {
return _groups.get(key)
}
override fun findAdaptationPrimitiveTypesByID(key : String?) : org.kevoree.AdaptationPrimitiveType? {
return _adaptationPrimitiveTypes.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_nodes -> {
return findNodesByID(idP)}
org.kevoree.util.Constants.Ref_typeDefinitions -> {
return findTypeDefinitionsByID(idP)}
org.kevoree.util.Constants.Ref_repositories -> {
return findRepositoriesByID(idP)}
org.kevoree.util.Constants.Ref_dataTypes -> {
return findDataTypesByID(idP)}
org.kevoree.util.Constants.Ref_libraries -> {
return findLibrariesByID(idP)}
org.kevoree.util.Constants.Ref_hubs -> {
return findHubsByID(idP)}
org.kevoree.util.Constants.Ref_mBindings -> {
return findMBindingsByID(idP)}
org.kevoree.util.Constants.Ref_deployUnits -> {
return findDeployUnitsByID(idP)}
org.kevoree.util.Constants.Ref_nodeNetworks -> {
return findNodeNetworksByID(idP)}
org.kevoree.util.Constants.Ref_groups -> {
return findGroupsByID(idP)}
org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes -> {
return findAdaptationPrimitiveTypesByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_nodes, org.kevoree.util.Constants.org_kevoree_ContainerNode)
                                    for(KMFLoopEntryKey in _nodes.keySet()){
                        internal_visit(visitor,_nodes.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_nodes)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_nodes)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_typeDefinitions, org.kevoree.util.Constants.org_kevoree_TypeDefinition)
                                    for(KMFLoopEntryKey in _typeDefinitions.keySet()){
                        internal_visit(visitor,_typeDefinitions.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_typeDefinitions)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_typeDefinitions)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_repositories, org.kevoree.util.Constants.org_kevoree_Repository)
                                    for(KMFLoopEntryKey in _repositories.keySet()){
                        internal_visit(visitor,_repositories.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_repositories)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_repositories)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_dataTypes, org.kevoree.util.Constants.org_kevoree_TypedElement)
                                    for(KMFLoopEntryKey in _dataTypes.keySet()){
                        internal_visit(visitor,_dataTypes.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_dataTypes)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_dataTypes)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_libraries, org.kevoree.util.Constants.org_kevoree_TypeLibrary)
                                    for(KMFLoopEntryKey in _libraries.keySet()){
                        internal_visit(visitor,_libraries.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_libraries)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_libraries)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_hubs, org.kevoree.util.Constants.org_kevoree_Channel)
                                    for(KMFLoopEntryKey in _hubs.keySet()){
                        internal_visit(visitor,_hubs.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_hubs)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_hubs)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_mBindings, org.kevoree.util.Constants.org_kevoree_MBinding)
                                    for(KMFLoopEntryKey in _mBindings.keySet()){
                        internal_visit(visitor,_mBindings.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_mBindings)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_mBindings)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_deployUnits, org.kevoree.util.Constants.org_kevoree_DeployUnit)
                                    for(KMFLoopEntryKey in _deployUnits.keySet()){
                        internal_visit(visitor,_deployUnits.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_deployUnits)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_deployUnits)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_nodeNetworks, org.kevoree.util.Constants.org_kevoree_NodeNetwork)
                                    for(KMFLoopEntryKey in _nodeNetworks.keySet()){
                        internal_visit(visitor,_nodeNetworks.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_nodeNetworks)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_nodeNetworks)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_groups, org.kevoree.util.Constants.org_kevoree_Group)
                                    for(KMFLoopEntryKey in _groups.keySet()){
                        internal_visit(visitor,_groups.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_groups)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_groups)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes, org.kevoree.util.Constants.org_kevoree_AdaptationPrimitiveType)
                                    for(KMFLoopEntryKey in _adaptationPrimitiveTypes.keySet()){
                        internal_visit(visitor,_adaptationPrimitiveTypes.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_adaptationPrimitiveTypes)
                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                              visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(generated_KMF_ID,org.kevoree.util.Constants.Att_generated_KMF_ID,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_ContainerRoot;
}
override public fun getGenerated_KMF_ID() : String? { return generated_KMF_ID}
override public fun setGenerated_KMF_ID(internal_p : String?) { generated_KMF_ID = internal_p }
override public fun getNodes() : List<org.kevoree.ContainerNode>{ return nodes}
override public fun setNodes(internal_p : List<org.kevoree.ContainerNode>){ nodes = internal_p }
override public fun getTypeDefinitions() : List<org.kevoree.TypeDefinition>{ return typeDefinitions}
override public fun setTypeDefinitions(internal_p : List<org.kevoree.TypeDefinition>){ typeDefinitions = internal_p }
override public fun getRepositories() : List<org.kevoree.Repository>{ return repositories}
override public fun setRepositories(internal_p : List<org.kevoree.Repository>){ repositories = internal_p }
override public fun getDataTypes() : List<org.kevoree.TypedElement>{ return dataTypes}
override public fun setDataTypes(internal_p : List<org.kevoree.TypedElement>){ dataTypes = internal_p }
override public fun getLibraries() : List<org.kevoree.TypeLibrary>{ return libraries}
override public fun setLibraries(internal_p : List<org.kevoree.TypeLibrary>){ libraries = internal_p }
override public fun getHubs() : List<org.kevoree.Channel>{ return hubs}
override public fun setHubs(internal_p : List<org.kevoree.Channel>){ hubs = internal_p }
override public fun getMBindings() : List<org.kevoree.MBinding>{ return mBindings}
override public fun setMBindings(internal_p : List<org.kevoree.MBinding>){ mBindings = internal_p }
override public fun getDeployUnits() : List<org.kevoree.DeployUnit>{ return deployUnits}
override public fun setDeployUnits(internal_p : List<org.kevoree.DeployUnit>){ deployUnits = internal_p }
override public fun getNodeNetworks() : List<org.kevoree.NodeNetwork>{ return nodeNetworks}
override public fun setNodeNetworks(internal_p : List<org.kevoree.NodeNetwork>){ nodeNetworks = internal_p }
override public fun getGroups() : List<org.kevoree.Group>{ return groups}
override public fun setGroups(internal_p : List<org.kevoree.Group>){ groups = internal_p }
override public fun getAdaptationPrimitiveTypes() : List<org.kevoree.AdaptationPrimitiveType>{ return adaptationPrimitiveTypes}
override public fun setAdaptationPrimitiveTypes(internal_p : List<org.kevoree.AdaptationPrimitiveType>){ adaptationPrimitiveTypes = internal_p }
}
