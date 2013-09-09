package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class PortTypeRefImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.PortTypeRef { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
ref = null
_mappings?.clear()
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
public override var optional : Boolean? = null
	 set(iP : Boolean?){
internal_optional(iP, true)
	}//end of setter

	private fun internal_optional(iP : Boolean?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != optional){
val oldPath = path()
$optional = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_optional, optional))
}
	}
	}//end of setter
public override var noDependency : Boolean? = null
	 set(iP : Boolean?){
internal_noDependency(iP, true)
	}//end of setter

	private fun internal_noDependency(iP : Boolean?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != noDependency){
val oldPath = path()
$noDependency = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_noDependency, noDependency))
}
	}
	}//end of setter
override var ref:org.kevoree.PortType?=null
	 set(refP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_ref(refP, true, true)
}
fun internal_ref(refP : org.kevoree.PortType?, setOpposite : Boolean, fireEvents : Boolean ) {
if($ref!= refP){
$ref = refP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_ref, refP))
}
}
}

internal val _mappings : java.util.HashMap<String,org.kevoree.PortTypeMapping> = java.util.HashMap<String,org.kevoree.PortTypeMapping>()
override var mappings:List<org.kevoree.PortTypeMapping>
	  get(){
		  return _mappings.values().toList()
	  }
	 set(mappingsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(mappingsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_mappings(mappingsP, true, true)
}
fun internal_mappings(mappingsP : List<org.kevoree.PortTypeMapping>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_mappings.values()!= mappingsP){
_mappings.clear()
for(el in mappingsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_mappings.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_mappings, el),org.kevoree.util.Constants.Ref_mappings)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_mappings, mappingsP))
}
}
}


private fun doAddMappings(mappingsP : org.kevoree.PortTypeMapping) {
val _key_ = (mappingsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_mappings.containsKey(_key_)) {
_mappings.put(_key_,mappingsP)
(mappingsP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_mappings, mappingsP),org.kevoree.util.Constants.Ref_mappings)
}
}

override fun addMappings(mappingsP : org.kevoree.PortTypeMapping) {
internal_addMappings(mappingsP, true, true)
}

override fun addAllMappings(mappingsP :List<org.kevoree.PortTypeMapping>) {
internal_addAllMappings(mappingsP, true, true)
}

private fun internal_addMappings(mappingsP : org.kevoree.PortTypeMapping, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddMappings(mappingsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_mappings, mappingsP))
}
}

private fun internal_addAllMappings(mappingsP :List<org.kevoree.PortTypeMapping>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in mappingsP){
doAddMappings(el)
}
} else {
for(el in mappingsP){
doAddMappings(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_mappings, mappingsP))
}
}


override fun removeMappings(mappingsP : org.kevoree.PortTypeMapping) {
internal_removeMappings(mappingsP, true, true)
}

var removeAllMappingsCurrentlyProcessing : Boolean = false

override fun removeAllMappings() {
internal_removeAllMappings(true, true)
}

private fun internal_removeMappings(mappingsP : org.kevoree.PortTypeMapping, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_mappings.size() != 0 && _mappings.containsKey((mappingsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_mappings.remove((mappingsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(mappingsP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllMappingsCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_mappings, mappingsP))
}
}
}

private fun internal_removeAllMappings(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllMappingsCurrentlyProcessing=true
}
val temp_els = mappings!!
_mappings.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_mappings, temp_els))

removeAllMappingsCurrentlyProcessing=false
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_name -> {
this.internal_name((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_optional -> {
this.internal_optional(("true" == value || true == value), fireEvents)
}
org.kevoree.util.Constants.Att_noDependency -> {
this.internal_noDependency(("true" == value || true == value), fireEvents)
}
org.kevoree.util.Constants.Ref_ref -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_ref(value as? org.kevoree.PortType, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_ref(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_ref(value as? org.kevoree.PortType, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_mappings -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addMappings(value as org.kevoree.PortTypeMapping, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllMappings(value as List<org.kevoree.PortTypeMapping>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeMappings(value as org.kevoree.PortTypeMapping, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllMappings()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_mappings.size() != 0 && _mappings.containsKey(value)) {
val obj = _mappings.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_mappings.remove(value)
_mappings.put(objNewKey,obj)
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
override fun findMappingsByID(key : String?) : org.kevoree.PortTypeMapping? {
return _mappings.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_ref -> {
val objFound = ref
if(objFound!=null && (objFound as org.kevoree.container.KMFContainerImpl).internalGetKey() == idP){
return objFound
}else{return null}
}
org.kevoree.util.Constants.Ref_mappings -> {
return findMappingsByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_mappings, org.kevoree.util.Constants.org_kevoree_PortTypeMapping)
                                    for(KMFLoopEntryKey in _mappings.keySet()){
                        internal_visit(visitor,_mappings.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_mappings)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_mappings)
                                    }
                                                                                   if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_ref, org.kevoree.util.Constants.org_kevoree_PortType)
                                                    internal_visit(visitor,ref,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_ref)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_ref)
                                                                                              }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(noDependency,org.kevoree.util.Constants.Att_noDependency,this)
            visitor.visit(optional,org.kevoree.util.Constants.Att_optional,this)
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_PortTypeRef;
}
override public fun getNoDependency() : Boolean? { return noDependency}
override public fun setNoDependency(internal_p : Boolean?) { noDependency = internal_p }
override public fun getOptional() : Boolean? { return optional}
override public fun setOptional(internal_p : Boolean?) { optional = internal_p }
override public fun getName() : String? { return name}
override public fun setName(internal_p : String?) { name = internal_p }
override public fun getRef() : org.kevoree.PortType?{ return ref}
override public fun setRef(internal_p : org.kevoree.PortType?){ ref = internal_p }
override public fun getMappings() : List<org.kevoree.PortTypeMapping>{ return mappings}
override public fun setMappings(internal_p : List<org.kevoree.PortTypeMapping>){ mappings = internal_p }
}
