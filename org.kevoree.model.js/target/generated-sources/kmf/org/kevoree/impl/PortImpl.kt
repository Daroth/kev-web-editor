package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class PortImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.Port { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_bindings?.clear()
portTypeRef = null
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
(el as org.kevoree.container.KMFContainerImpl).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_port, this, false, fireEvents)
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
(bindingsP as org.kevoree.MBinding).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_port, this, false, fireEvents)
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
(el as org.kevoree.container.KMFContainerImpl).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_port, this, false, fireEvents)
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
(bindingsP as org.kevoree.MBinding).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_port, null, false, fireEvents)
}
}
}

private fun internal_removeAllBindings(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = bindings!!
if(setOpposite){
for(el in temp_els!!){
(el as org.kevoree.container.KMFContainerImpl).reflexiveMutator(org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.util.Constants.Ref_port, null, false, fireEvents)
}
}
_bindings.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_bindings, temp_els))
}
}

override var portTypeRef:org.kevoree.PortTypeRef?=null
	 set(portTypeRefP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_portTypeRef(portTypeRefP, true, true)
}
fun internal_portTypeRef(portTypeRefP : org.kevoree.PortTypeRef?, setOpposite : Boolean, fireEvents : Boolean ) {
if($portTypeRef!= portTypeRefP){
$portTypeRef = portTypeRefP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_portTypeRef, portTypeRefP))
}
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_generated_KMF_ID -> {
this.internal_generated_KMF_ID((value as? String), fireEvents)
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
org.kevoree.util.Constants.Ref_portTypeRef -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_portTypeRef(value as? org.kevoree.PortTypeRef, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_portTypeRef(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_portTypeRef(value as? org.kevoree.PortTypeRef, setOpposite, fireEvents)
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
return  generated_KMF_ID
}
override fun findBindingsByID(key : String?) : org.kevoree.MBinding? {
return _bindings.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_bindings -> {
return findBindingsByID(idP)}
org.kevoree.util.Constants.Ref_portTypeRef -> {
val objFound = portTypeRef
if(objFound!=null && (objFound as org.kevoree.container.KMFContainerImpl).internalGetKey() == idP){
return objFound
}else{return null}
}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                                                                           if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_bindings, org.kevoree.util.Constants.org_kevoree_MBinding)
                                                    for(KMFLoopEntryKey in _bindings.keySet()){
                                internal_visit(visitor,_bindings.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_bindings)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_bindings)
                                                                                                        visitor.beginVisitRef(org.kevoree.util.Constants.Ref_portTypeRef, org.kevoree.util.Constants.org_kevoree_PortTypeRef)
                                                    internal_visit(visitor,portTypeRef,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_portTypeRef)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_portTypeRef)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(generated_KMF_ID,org.kevoree.util.Constants.Att_generated_KMF_ID,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_Port;
}
override public fun getGenerated_KMF_ID() : String? { return generated_KMF_ID}
override public fun setGenerated_KMF_ID(internal_p : String?) { generated_KMF_ID = internal_p }
override public fun getBindings() : List<org.kevoree.MBinding>{ return bindings}
override public fun setBindings(internal_p : List<org.kevoree.MBinding>){ bindings = internal_p }
override public fun getPortTypeRef() : org.kevoree.PortTypeRef?{ return portTypeRef}
override public fun setPortTypeRef(internal_p : org.kevoree.PortTypeRef?){ portTypeRef = internal_p }
}
