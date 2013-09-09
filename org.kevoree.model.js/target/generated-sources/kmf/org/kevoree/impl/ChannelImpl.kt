package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class ChannelImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.Channel { 
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
_bindings?.clear()
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

internal val _bindings : java.util.HashMap<String,org.kevoree.MBinding> = java.util.HashMap<String,org.kevoree.MBinding>()
override var bindings:List<org.kevoree.MBinding>
	  get(){
		  return _bindings.values().toList()
	  }
	 set(bindingsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(bindingsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_bindings(bindingsP, true, true)
}
fun internal_bindings(bindingsP : List<org.kevoree.MBinding>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_bindings.values()!= bindingsP){
this.internal_removeAllBindings(true, false)
for(el in bindingsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_bindings.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_hub, this, false, fireEvents)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_bindings, bindingsP))
}
}
}


private fun doAddBindings(bindingsP : org.kevoree.MBinding) {
val _key_ = (bindingsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_bindings.containsKey(_key_)) {
_bindings.put(_key_,bindingsP)
}
}

override fun addBindings(bindingsP : org.kevoree.MBinding) {
internal_addBindings(bindingsP, true, true)
}

override fun addAllBindings(bindingsP :List<org.kevoree.MBinding>) {
internal_addAllBindings(bindingsP, true, true)
}

private fun internal_addBindings(bindingsP : org.kevoree.MBinding, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddBindings(bindingsP)
if(setOpposite){
(bindingsP as org.kevoree.MBinding).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_hub, this, false, fireEvents)
}
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_bindings, bindingsP))
}
}

private fun internal_addAllBindings(bindingsP :List<org.kevoree.MBinding>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in bindingsP){
doAddBindings(el)
(el as org.kevoree.container.KMFContainerImpl).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_hub, this, false, fireEvents)
}
} else {
for(el in bindingsP){
doAddBindings(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_bindings, bindingsP))
}
}


override fun removeBindings(bindingsP : org.kevoree.MBinding) {
internal_removeBindings(bindingsP, true, true)
}

override fun removeAllBindings() {
internal_removeAllBindings(true, true)
}

private fun internal_removeBindings(bindingsP : org.kevoree.MBinding, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_bindings.size() != 0 && _bindings.containsKey((bindingsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_bindings.remove((bindingsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_bindings, bindingsP))
}
if(setOpposite){
(bindingsP as org.kevoree.MBinding).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_hub, null, false, fireEvents)
}
}
}

private fun internal_removeAllBindings(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = bindings!!
if(setOpposite){
for(el in temp_els!!){
(el as org.kevoree.container.KMFContainerImpl).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_hub, null, false, fireEvents)
}
}
_bindings.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_bindings, temp_els))
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
org.kevoree.util.Constants.Ref_bindings -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addBindings(value as org.kevoree.MBinding, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllBindings(value as List<org.kevoree.MBinding>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeBindings(value as org.kevoree.MBinding, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.internal_removeAllBindings(setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_bindings.size() != 0 && _bindings.containsKey(value)) {
val obj = _bindings.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_bindings.remove(value)
_bindings.put(objNewKey,obj)
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
override fun findBindingsByID(key : String?) : org.kevoree.MBinding? {
return _bindings.get(key)
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
org.kevoree.util.Constants.Ref_bindings -> {
return findBindingsByID(idP)}
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
                                                                                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_bindings, org.kevoree.util.Constants.org_kevoree_MBinding)
                                                    for(KMFLoopEntryKey in _bindings.keySet()){
                                internal_visit(visitor,_bindings.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_bindings)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_bindings)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
            visitor.visit(started,org.kevoree.util.Constants.Att_started,this)
            visitor.visit(metaData,org.kevoree.util.Constants.Att_metaData,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_Channel;
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
override public fun getBindings() : List<org.kevoree.MBinding>{ return bindings}
override public fun setBindings(internal_p : List<org.kevoree.MBinding>){ bindings = internal_p }
}
