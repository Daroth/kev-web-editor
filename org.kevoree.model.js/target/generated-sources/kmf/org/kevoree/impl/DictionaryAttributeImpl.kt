package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class DictionaryAttributeImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.DictionaryAttribute { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_genericTypes?.clear()
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
public override var state : Boolean? = null
	 set(iP : Boolean?){
internal_state(iP, true)
	}//end of setter

	private fun internal_state(iP : Boolean?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != state){
val oldPath = path()
$state = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_state, state))
}
	}
	}//end of setter
public override var datatype : String? = null
	 set(iP : String?){
internal_datatype(iP, true)
	}//end of setter

	private fun internal_datatype(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != datatype){
val oldPath = path()
$datatype = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_datatype, datatype))
}
	}
	}//end of setter
public override var fragmentDependant : Boolean? = null
	 set(iP : Boolean?){
internal_fragmentDependant(iP, true)
	}//end of setter

	private fun internal_fragmentDependant(iP : Boolean?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != fragmentDependant){
val oldPath = path()
$fragmentDependant = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_fragmentDependant, fragmentDependant))
}
	}
	}//end of setter
internal val _genericTypes : java.util.HashMap<String,org.kevoree.TypedElement> = java.util.HashMap<String,org.kevoree.TypedElement>()
override var genericTypes:List<org.kevoree.TypedElement>
	  get(){
		  return _genericTypes.values().toList()
	  }
	 set(genericTypesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(genericTypesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_genericTypes(genericTypesP, true, true)
}
fun internal_genericTypes(genericTypesP : List<org.kevoree.TypedElement>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_genericTypes.values()!= genericTypesP){
_genericTypes.clear()
for(el in genericTypesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_genericTypes.put(elKey!!,el)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_genericTypes, genericTypesP))
}
}
}


private fun doAddGenericTypes(genericTypesP : org.kevoree.TypedElement) {
val _key_ = (genericTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_genericTypes.containsKey(_key_)) {
_genericTypes.put(_key_,genericTypesP)
}
}

override fun addGenericTypes(genericTypesP : org.kevoree.TypedElement) {
internal_addGenericTypes(genericTypesP, true, true)
}

override fun addAllGenericTypes(genericTypesP :List<org.kevoree.TypedElement>) {
internal_addAllGenericTypes(genericTypesP, true, true)
}

private fun internal_addGenericTypes(genericTypesP : org.kevoree.TypedElement, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddGenericTypes(genericTypesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_genericTypes, genericTypesP))
}
}

private fun internal_addAllGenericTypes(genericTypesP :List<org.kevoree.TypedElement>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in genericTypesP){
doAddGenericTypes(el)
}
} else {
for(el in genericTypesP){
doAddGenericTypes(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_genericTypes, genericTypesP))
}
}


override fun removeGenericTypes(genericTypesP : org.kevoree.TypedElement) {
internal_removeGenericTypes(genericTypesP, true, true)
}

override fun removeAllGenericTypes() {
internal_removeAllGenericTypes(true, true)
}

private fun internal_removeGenericTypes(genericTypesP : org.kevoree.TypedElement, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_genericTypes.size() != 0 && _genericTypes.containsKey((genericTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_genericTypes.remove((genericTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_genericTypes, genericTypesP))
}
}
}

private fun internal_removeAllGenericTypes(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = genericTypes!!
_genericTypes.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_genericTypes, temp_els))
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
org.kevoree.util.Constants.Att_state -> {
this.internal_state(("true" == value || true == value), fireEvents)
}
org.kevoree.util.Constants.Att_datatype -> {
this.internal_datatype((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_fragmentDependant -> {
this.internal_fragmentDependant(("true" == value || true == value), fireEvents)
}
org.kevoree.util.Constants.Ref_genericTypes -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addGenericTypes(value as org.kevoree.TypedElement, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllGenericTypes(value as List<org.kevoree.TypedElement>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeGenericTypes(value as org.kevoree.TypedElement, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllGenericTypes()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_genericTypes.size() != 0 && _genericTypes.containsKey(value)) {
val obj = _genericTypes.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_genericTypes.remove(value)
_genericTypes.put(objNewKey,obj)
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
override fun findGenericTypesByID(key : String?) : org.kevoree.TypedElement? {
return _genericTypes.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_genericTypes -> {
return findGenericTypesByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                                                                           if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_genericTypes, org.kevoree.util.Constants.org_kevoree_TypedElement)
                                                    for(KMFLoopEntryKey in _genericTypes.keySet()){
                                internal_visit(visitor,_genericTypes.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_genericTypes)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_genericTypes)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(fragmentDependant,org.kevoree.util.Constants.Att_fragmentDependant,this)
            visitor.visit(optional,org.kevoree.util.Constants.Att_optional,this)
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
            visitor.visit(state,org.kevoree.util.Constants.Att_state,this)
            visitor.visit(datatype,org.kevoree.util.Constants.Att_datatype,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_DictionaryAttribute;
}
override public fun getFragmentDependant() : Boolean? { return fragmentDependant}
override public fun setFragmentDependant(internal_p : Boolean?) { fragmentDependant = internal_p }
override public fun getOptional() : Boolean? { return optional}
override public fun setOptional(internal_p : Boolean?) { optional = internal_p }
override public fun getName() : String? { return name}
override public fun setName(internal_p : String?) { name = internal_p }
override public fun getState() : Boolean? { return state}
override public fun setState(internal_p : Boolean?) { state = internal_p }
override public fun getDatatype() : String? { return datatype}
override public fun setDatatype(internal_p : String?) { datatype = internal_p }
override public fun getGenericTypes() : List<org.kevoree.TypedElement>{ return genericTypes}
override public fun setGenericTypes(internal_p : List<org.kevoree.TypedElement>){ genericTypes = internal_p }
}
