package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class TypeLibraryImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.TypeLibrary { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_subTypes?.clear()
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
internal val _subTypes : java.util.HashMap<String,org.kevoree.TypeDefinition> = java.util.HashMap<String,org.kevoree.TypeDefinition>()
override var subTypes:List<org.kevoree.TypeDefinition>
	  get(){
		  return _subTypes.values().toList()
	  }
	 set(subTypesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(subTypesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_subTypes(subTypesP, true, true)
}
fun internal_subTypes(subTypesP : List<org.kevoree.TypeDefinition>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_subTypes.values()!= subTypesP){
_subTypes.clear()
for(el in subTypesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_subTypes.put(elKey!!,el)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_subTypes, subTypesP))
}
}
}


private fun doAddSubTypes(subTypesP : org.kevoree.TypeDefinition) {
val _key_ = (subTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_subTypes.containsKey(_key_)) {
_subTypes.put(_key_,subTypesP)
}
}

override fun addSubTypes(subTypesP : org.kevoree.TypeDefinition) {
internal_addSubTypes(subTypesP, true, true)
}

override fun addAllSubTypes(subTypesP :List<org.kevoree.TypeDefinition>) {
internal_addAllSubTypes(subTypesP, true, true)
}

private fun internal_addSubTypes(subTypesP : org.kevoree.TypeDefinition, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddSubTypes(subTypesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_subTypes, subTypesP))
}
}

private fun internal_addAllSubTypes(subTypesP :List<org.kevoree.TypeDefinition>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in subTypesP){
doAddSubTypes(el)
}
} else {
for(el in subTypesP){
doAddSubTypes(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_subTypes, subTypesP))
}
}


override fun removeSubTypes(subTypesP : org.kevoree.TypeDefinition) {
internal_removeSubTypes(subTypesP, true, true)
}

override fun removeAllSubTypes() {
internal_removeAllSubTypes(true, true)
}

private fun internal_removeSubTypes(subTypesP : org.kevoree.TypeDefinition, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_subTypes.size() != 0 && _subTypes.containsKey((subTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_subTypes.remove((subTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_subTypes, subTypesP))
}
}
}

private fun internal_removeAllSubTypes(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = subTypes!!
_subTypes.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_subTypes, temp_els))
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_name -> {
this.internal_name((value as? String), fireEvents)
}
org.kevoree.util.Constants.Ref_subTypes -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addSubTypes(value as org.kevoree.TypeDefinition, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllSubTypes(value as List<org.kevoree.TypeDefinition>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeSubTypes(value as org.kevoree.TypeDefinition, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllSubTypes()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_subTypes.size() != 0 && _subTypes.containsKey(value)) {
val obj = _subTypes.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_subTypes.remove(value)
_subTypes.put(objNewKey,obj)
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
override fun findSubTypesByID(key : String?) : org.kevoree.TypeDefinition? {
return _subTypes.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_subTypes -> {
return findSubTypesByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                                                                           if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_subTypes, org.kevoree.util.Constants.org_kevoree_TypeDefinition)
                                                    for(KMFLoopEntryKey in _subTypes.keySet()){
                                internal_visit(visitor,_subTypes.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_subTypes)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_subTypes)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_TypeLibrary;
}
override public fun getName() : String? { return name}
override public fun setName(internal_p : String?) { name = internal_p }
override public fun getSubTypes() : List<org.kevoree.TypeDefinition>{ return subTypes}
override public fun setSubTypes(internal_p : List<org.kevoree.TypeDefinition>){ subTypes = internal_p }
}
