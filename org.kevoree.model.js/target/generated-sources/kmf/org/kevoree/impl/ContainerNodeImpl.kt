package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class ContainerNodeImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.ContainerNode { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
typeDefinition = null
dictionary = null
_components?.clear()
_hosts?.clear()
host = null
}
public override var name : String? = null
	 set(iP : String?){
internal_name(iP, true)
	}//end of setter

	private fun internal_name(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != name){
val oldPath = path()
val oldId = internalGetKey()
val previousParent = eContainer();
val previousRefNameInParent = getRefInParent();
$name = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_name, name))
}
if(previousParent!=null){
previousParent.reflexiveMutator(org.kevoree.modeling.api.util.ActionType.RENEW_INDEX, previousRefNameInParent!!, oldId,false,false);
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.RENEW_INDEX, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Att_name, path()))
}
	}
	}//end of setter
public override var metaData : String? = null
	 set(iP : String?){
internal_metaData(iP, true)
	}//end of setter

	private fun internal_metaData(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != metaData){
val oldPath = path()
$metaData = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_metaData, metaData))
}
	}
	}//end of setter
public override var started : Boolean? = true
	 set(iP : Boolean?){
internal_started(iP, true)
	}//end of setter

	private fun internal_started(iP : Boolean?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != started){
val oldPath = path()
$started = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_started, started))
}
	}
	}//end of setter
override var typeDefinition:org.kevoree.TypeDefinition?=null
	 set(typeDefinitionP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_typeDefinition(typeDefinitionP, true, true)
}
fun internal_typeDefinition(typeDefinitionP : org.kevoree.TypeDefinition?, setOpposite : Boolean, fireEvents : Boolean ) {
if($typeDefinition!= typeDefinitionP){
$typeDefinition = typeDefinitionP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_typeDefinition, typeDefinitionP))
}
}
}

override var dictionary:org.kevoree.Dictionary?=null
	 set(dictionaryP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_dictionary(dictionaryP, true, true)
}
fun internal_dictionary(dictionaryP : org.kevoree.Dictionary?, setOpposite : Boolean, fireEvents : Boolean ) {
if($dictionary!= dictionaryP){
if($dictionary != null){
($dictionary!! as org.kevoree.container.KMFContainerImpl ).setEContainer(null, null,null)
}
if(dictionaryP!=null){
(dictionaryP as org.kevoree.container.KMFContainerImpl ).setEContainer(this,null,org.kevoree.util.Constants.Ref_dictionary)
}
$dictionary = dictionaryP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_dictionary, dictionaryP))
}
}
}

internal val _components : java.util.HashMap<String,org.kevoree.ComponentInstance> = java.util.HashMap<String,org.kevoree.ComponentInstance>()
override var components:List<org.kevoree.ComponentInstance>
	  get(){
		  return _components.values().toList()
	  }
	 set(componentsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(componentsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_components(componentsP, true, true)
}
fun internal_components(componentsP : List<org.kevoree.ComponentInstance>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_components.values()!= componentsP){
_components.clear()
for(el in componentsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_components.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_components, el),org.kevoree.util.Constants.Ref_components)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_components, componentsP))
}
}
}


private fun doAddComponents(componentsP : org.kevoree.ComponentInstance) {
val _key_ = (componentsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_components.containsKey(_key_)) {
_components.put(_key_,componentsP)
(componentsP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_components, componentsP),org.kevoree.util.Constants.Ref_components)
}
}

override fun addComponents(componentsP : org.kevoree.ComponentInstance) {
internal_addComponents(componentsP, true, true)
}

override fun addAllComponents(componentsP :List<org.kevoree.ComponentInstance>) {
internal_addAllComponents(componentsP, true, true)
}

private fun internal_addComponents(componentsP : org.kevoree.ComponentInstance, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddComponents(componentsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_components, componentsP))
}
}

private fun internal_addAllComponents(componentsP :List<org.kevoree.ComponentInstance>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in componentsP){
doAddComponents(el)
}
} else {
for(el in componentsP){
doAddComponents(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_components, componentsP))
}
}


override fun removeComponents(componentsP : org.kevoree.ComponentInstance) {
internal_removeComponents(componentsP, true, true)
}

var removeAllComponentsCurrentlyProcessing : Boolean = false

override fun removeAllComponents() {
internal_removeAllComponents(true, true)
}

private fun internal_removeComponents(componentsP : org.kevoree.ComponentInstance, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_components.size() != 0 && _components.containsKey((componentsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_components.remove((componentsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(componentsP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllComponentsCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_components, componentsP))
}
}
}

private fun internal_removeAllComponents(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllComponentsCurrentlyProcessing=true
}
val temp_els = components!!
_components.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_components, temp_els))

removeAllComponentsCurrentlyProcessing=false
}
}

internal val _hosts : java.util.HashMap<String,org.kevoree.ContainerNode> = java.util.HashMap<String,org.kevoree.ContainerNode>()
override var hosts:List<org.kevoree.ContainerNode>
	  get(){
		  return _hosts.values().toList()
	  }
	 set(hostsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(hostsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_hosts(hostsP, true, true)
}
fun internal_hosts(hostsP : List<org.kevoree.ContainerNode>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_hosts.values()!= hostsP){
this.internal_removeAllHosts(true, false)
for(el in hostsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_hosts.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_host, this, false, fireEvents)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_hosts, hostsP))
}
}
}


private fun doAddHosts(hostsP : org.kevoree.ContainerNode) {
val _key_ = (hostsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_hosts.containsKey(_key_)) {
_hosts.put(_key_,hostsP)
}
}

override fun addHosts(hostsP : org.kevoree.ContainerNode) {
internal_addHosts(hostsP, true, true)
}

override fun addAllHosts(hostsP :List<org.kevoree.ContainerNode>) {
internal_addAllHosts(hostsP, true, true)
}

private fun internal_addHosts(hostsP : org.kevoree.ContainerNode, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddHosts(hostsP)
if(setOpposite){
(hostsP as org.kevoree.ContainerNode).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_host, this, false, fireEvents)
}
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_hosts, hostsP))
}
}

private fun internal_addAllHosts(hostsP :List<org.kevoree.ContainerNode>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in hostsP){
doAddHosts(el)
(el as org.kevoree.container.KMFContainerImpl).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_host, this, false, fireEvents)
}
} else {
for(el in hostsP){
doAddHosts(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_hosts, hostsP))
}
}


override fun removeHosts(hostsP : org.kevoree.ContainerNode) {
internal_removeHosts(hostsP, true, true)
}

override fun removeAllHosts() {
internal_removeAllHosts(true, true)
}

private fun internal_removeHosts(hostsP : org.kevoree.ContainerNode, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_hosts.size() != 0 && _hosts.containsKey((hostsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_hosts.remove((hostsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_hosts, hostsP))
}
if(setOpposite){
(hostsP as org.kevoree.ContainerNode).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_host, null, false, fireEvents)
}
}
}

private fun internal_removeAllHosts(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = hosts!!
if(setOpposite){
for(el in temp_els!!){
(el as org.kevoree.container.KMFContainerImpl).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_host, null, false, fireEvents)
}
}
_hosts.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_hosts, temp_els))
}
}

override var host:org.kevoree.ContainerNode?=null
	 set(hostP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_host(hostP, true, true)
}
fun internal_host(hostP : org.kevoree.ContainerNode?, setOpposite : Boolean, fireEvents : Boolean ) {
if($host!= hostP){
if(setOpposite) {
if($host != null) {
$host!!.reflexiveMutator(org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_hosts, this, false, fireEvents)
}
if(hostP!=null) {
hostP.reflexiveMutator(org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.util.Constants.Ref_hosts, this, false, fireEvents)
}
}
$host = hostP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_host, hostP))
}
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_name -> {
this.internal_name((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_metaData -> {
this.internal_metaData((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_started -> {
this.internal_started(("true" == value || true == value), fireEvents)
}
org.kevoree.util.Constants.Ref_typeDefinition -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_typeDefinition(value as? org.kevoree.TypeDefinition, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_typeDefinition(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_typeDefinition(value as? org.kevoree.TypeDefinition, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_dictionary -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_dictionary(value as? org.kevoree.Dictionary, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_dictionary(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_dictionary(value as? org.kevoree.Dictionary, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_components -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addComponents(value as org.kevoree.ComponentInstance, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllComponents(value as List<org.kevoree.ComponentInstance>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeComponents(value as org.kevoree.ComponentInstance, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllComponents()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_components.size() != 0 && _components.containsKey(value)) {
val obj = _components.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_components.remove(value)
_components.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_hosts -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addHosts(value as org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllHosts(value as List<org.kevoree.ContainerNode>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeHosts(value as org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.internal_removeAllHosts(setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_hosts.size() != 0 && _hosts.containsKey(value)) {
val obj = _hosts.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_hosts.remove(value)
_hosts.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_host -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_host(value as? org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_host(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_host(value as? org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
    else -> { throw Exception("Can reflexively "+mutationType+" for "+refName + " on "+ this) }
}
}
override fun internalGetKey() : String? {
return  name
}
override fun findComponentsByID(key : String?) : org.kevoree.ComponentInstance? {
return _components.get(key)
}
override fun findHostsByID(key : String?) : org.kevoree.ContainerNode? {
return _hosts.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_typeDefinition -> {
val objFound = typeDefinition
if(objFound!=null && (objFound as org.kevoree.container.KMFContainerImpl).internalGetKey() == idP){
return objFound
}else{return null}
}
org.kevoree.util.Constants.Ref_dictionary -> {
val objFound = dictionary
if(objFound!=null && (objFound as org.kevoree.container.KMFContainerImpl).internalGetKey() == idP){
return objFound
}else{return null}
}
org.kevoree.util.Constants.Ref_components -> {
return findComponentsByID(idP)}
org.kevoree.util.Constants.Ref_hosts -> {
return findHostsByID(idP)}
org.kevoree.util.Constants.Ref_host -> {
val objFound = host
if(objFound!=null && (objFound as org.kevoree.container.KMFContainerImpl).internalGetKey() == idP){
return objFound
}else{return null}
}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_dictionary, org.kevoree.util.Constants.org_kevoree_Dictionary)
                                    internal_visit(visitor,dictionary,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_dictionary)
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_dictionary)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_components, org.kevoree.util.Constants.org_kevoree_ComponentInstance)
                                    for(KMFLoopEntryKey in _components.keySet()){
                        internal_visit(visitor,_components.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_components)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_components)
                                    }
                                                                                   if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_typeDefinition, org.kevoree.util.Constants.org_kevoree_TypeDefinition)
                                                    internal_visit(visitor,typeDefinition,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_typeDefinition)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_typeDefinition)
                                                                                                                                                                                visitor.beginVisitRef(org.kevoree.util.Constants.Ref_hosts, org.kevoree.util.Constants.org_kevoree_ContainerNode)
                                                    for(KMFLoopEntryKey in _hosts.keySet()){
                                internal_visit(visitor,_hosts.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_hosts)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_hosts)
                                                                                                        visitor.beginVisitRef(org.kevoree.util.Constants.Ref_host, org.kevoree.util.Constants.org_kevoree_ContainerNode)
                                                    internal_visit(visitor,host,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_host)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_host)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
            visitor.visit(started,org.kevoree.util.Constants.Att_started,this)
            visitor.visit(metaData,org.kevoree.util.Constants.Att_metaData,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_ContainerNode;
}
override public fun getName() : String? { return name}
override public fun setName(internal_p : String?) { name = internal_p }
override public fun getStarted() : Boolean? { return started}
override public fun setStarted(internal_p : Boolean?) { started = internal_p }
override public fun getMetaData() : String? { return metaData}
override public fun setMetaData(internal_p : String?) { metaData = internal_p }
override public fun getTypeDefinition() : org.kevoree.TypeDefinition?{ return typeDefinition}
override public fun setTypeDefinition(internal_p : org.kevoree.TypeDefinition?){ typeDefinition = internal_p }
override public fun getDictionary() : org.kevoree.Dictionary?{ return dictionary}
override public fun setDictionary(internal_p : org.kevoree.Dictionary?){ dictionary = internal_p }
override public fun getComponents() : List<org.kevoree.ComponentInstance>{ return components}
override public fun setComponents(internal_p : List<org.kevoree.ComponentInstance>){ components = internal_p }
override public fun getHosts() : List<org.kevoree.ContainerNode>{ return hosts}
override public fun setHosts(internal_p : List<org.kevoree.ContainerNode>){ hosts = internal_p }
override public fun getHost() : org.kevoree.ContainerNode?{ return host}
override public fun setHost(internal_p : org.kevoree.ContainerNode?){ host = internal_p }
}
