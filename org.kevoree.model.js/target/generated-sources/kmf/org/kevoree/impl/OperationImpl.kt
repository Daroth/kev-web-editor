package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class OperationImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.Operation { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_parameters?.clear()
returnType = null
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
internal val _parameters : java.util.HashMap<String,org.kevoree.Parameter> = java.util.HashMap<String,org.kevoree.Parameter>()
override var parameters:List<org.kevoree.Parameter>
	  get(){
		  return _parameters.values().toList()
	  }
	 set(parametersP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(parametersP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_parameters(parametersP, true, true)
}
fun internal_parameters(parametersP : List<org.kevoree.Parameter>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_parameters.values()!= parametersP){
_parameters.clear()
for(el in parametersP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_parameters.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_parameters, el),org.kevoree.util.Constants.Ref_parameters)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_parameters, parametersP))
}
}
}


private fun doAddParameters(parametersP : org.kevoree.Parameter) {
val _key_ = (parametersP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_parameters.containsKey(_key_)) {
_parameters.put(_key_,parametersP)
(parametersP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_parameters, parametersP),org.kevoree.util.Constants.Ref_parameters)
}
}

override fun addParameters(parametersP : org.kevoree.Parameter) {
internal_addParameters(parametersP, true, true)
}

override fun addAllParameters(parametersP :List<org.kevoree.Parameter>) {
internal_addAllParameters(parametersP, true, true)
}

private fun internal_addParameters(parametersP : org.kevoree.Parameter, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddParameters(parametersP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_parameters, parametersP))
}
}

private fun internal_addAllParameters(parametersP :List<org.kevoree.Parameter>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in parametersP){
doAddParameters(el)
}
} else {
for(el in parametersP){
doAddParameters(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_parameters, parametersP))
}
}


override fun removeParameters(parametersP : org.kevoree.Parameter) {
internal_removeParameters(parametersP, true, true)
}

var removeAllParametersCurrentlyProcessing : Boolean = false

override fun removeAllParameters() {
internal_removeAllParameters(true, true)
}

private fun internal_removeParameters(parametersP : org.kevoree.Parameter, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_parameters.size() != 0 && _parameters.containsKey((parametersP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_parameters.remove((parametersP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(parametersP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllParametersCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_parameters, parametersP))
}
}
}

private fun internal_removeAllParameters(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllParametersCurrentlyProcessing=true
}
val temp_els = parameters!!
_parameters.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_parameters, temp_els))

removeAllParametersCurrentlyProcessing=false
}
}

override var returnType:org.kevoree.TypedElement?=null
	 set(returnTypeP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_returnType(returnTypeP, true, true)
}
fun internal_returnType(returnTypeP : org.kevoree.TypedElement?, setOpposite : Boolean, fireEvents : Boolean ) {
if($returnType!= returnTypeP){
$returnType = returnTypeP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_returnType, returnTypeP))
}
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_name -> {
this.internal_name((value as? String), fireEvents)
}
org.kevoree.util.Constants.Ref_parameters -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addParameters(value as org.kevoree.Parameter, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllParameters(value as List<org.kevoree.Parameter>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeParameters(value as org.kevoree.Parameter, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllParameters()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_parameters.size() != 0 && _parameters.containsKey(value)) {
val obj = _parameters.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_parameters.remove(value)
_parameters.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_returnType -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_returnType(value as? org.kevoree.TypedElement, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_returnType(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_returnType(value as? org.kevoree.TypedElement, setOpposite, fireEvents)
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
override fun findParametersByID(key : String?) : org.kevoree.Parameter? {
return _parameters.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_parameters -> {
return findParametersByID(idP)}
org.kevoree.util.Constants.Ref_returnType -> {
val objFound = returnType
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
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_parameters, org.kevoree.util.Constants.org_kevoree_Parameter)
                                    for(KMFLoopEntryKey in _parameters.keySet()){
                        internal_visit(visitor,_parameters.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_parameters)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_parameters)
                                    }
                                                                                                                       if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_returnType, org.kevoree.util.Constants.org_kevoree_TypedElement)
                                                    internal_visit(visitor,returnType,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_returnType)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_returnType)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_Operation;
}
override public fun getName() : String? { return name}
override public fun setName(internal_p : String?) { name = internal_p }
override public fun getParameters() : List<org.kevoree.Parameter>{ return parameters}
override public fun setParameters(internal_p : List<org.kevoree.Parameter>){ parameters = internal_p }
override public fun getReturnType() : org.kevoree.TypedElement?{ return returnType}
override public fun setReturnType(internal_p : org.kevoree.TypedElement?){ returnType = internal_p }
}
