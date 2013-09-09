package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class GroupImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.Group { 
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
_subNodes?.clear()
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

internal val _subNodes : java.util.HashMap<String,org.kevoree.ContainerNode> = java.util.HashMap<String,org.kevoree.ContainerNode>()
override var subNodes:List<org.kevoree.ContainerNode>
	  get(){
		  return _subNodes.values().toList()
	  }
	 set(subNodesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(subNodesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_subNodes(subNodesP, true, true)
}
fun internal_subNodes(subNodesP : List<org.kevoree.ContainerNode>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_subNodes.values()!= subNodesP){
_subNodes.clear()
for(el in subNodesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_subNodes.put(elKey!!,el)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_subNodes, subNodesP))
}
}
}


private fun doAddSubNodes(subNodesP : org.kevoree.ContainerNode) {
val _key_ = (subNodesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_subNodes.containsKey(_key_)) {
_subNodes.put(_key_,subNodesP)
}
}

override fun addSubNodes(subNodesP : org.kevoree.ContainerNode) {
internal_addSubNodes(subNodesP, true, true)
}

override fun addAllSubNodes(subNodesP :List<org.kevoree.ContainerNode>) {
internal_addAllSubNodes(subNodesP, true, true)
}

private fun internal_addSubNodes(subNodesP : org.kevoree.ContainerNode, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddSubNodes(subNodesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_subNodes, subNodesP))
}
}

private fun internal_addAllSubNodes(subNodesP :List<org.kevoree.ContainerNode>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in subNodesP){
doAddSubNodes(el)
}
} else {
for(el in subNodesP){
doAddSubNodes(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_subNodes, subNodesP))
}
}


override fun removeSubNodes(subNodesP : org.kevoree.ContainerNode) {
internal_removeSubNodes(subNodesP, true, true)
}

override fun removeAllSubNodes() {
internal_removeAllSubNodes(true, true)
}

private fun internal_removeSubNodes(subNodesP : org.kevoree.ContainerNode, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_subNodes.size() != 0 && _subNodes.containsKey((subNodesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_subNodes.remove((subNodesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_subNodes, subNodesP))
}
}
}

private fun internal_removeAllSubNodes(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = subNodes!!
_subNodes.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_subNodes, temp_els))
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
org.kevoree.util.Constants.Ref_subNodes -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addSubNodes(value as org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllSubNodes(value as List<org.kevoree.ContainerNode>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeSubNodes(value as org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllSubNodes()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_subNodes.size() != 0 && _subNodes.containsKey(value)) {
val obj = _subNodes.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_subNodes.remove(value)
_subNodes.put(objNewKey,obj)
}
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
override fun findSubNodesByID(key : String?) : org.kevoree.ContainerNode? {
return _subNodes.get(key)
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
org.kevoree.util.Constants.Ref_subNodes -> {
return findSubNodesByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_dictionary, org.kevoree.util.Constants.org_kevoree_Dictionary)
                                    internal_visit(visitor,dictionary,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_dictionary)
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_dictionary)
                                    }
                                                                                   if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_typeDefinition, org.kevoree.util.Constants.org_kevoree_TypeDefinition)
                                                    internal_visit(visitor,typeDefinition,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_typeDefinition)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_typeDefinition)
                                                                                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_subNodes, org.kevoree.util.Constants.org_kevoree_ContainerNode)
                                                    for(KMFLoopEntryKey in _subNodes.keySet()){
                                internal_visit(visitor,_subNodes.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_subNodes)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_subNodes)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
            visitor.visit(started,org.kevoree.util.Constants.Att_started,this)
            visitor.visit(metaData,org.kevoree.util.Constants.Att_metaData,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_Group;
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
override public fun getSubNodes() : List<org.kevoree.ContainerNode>{ return subNodes}
override public fun setSubNodes(internal_p : List<org.kevoree.ContainerNode>){ subNodes = internal_p }
}
