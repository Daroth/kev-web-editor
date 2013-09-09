package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class ComponentInstanceImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.ComponentInstance { 
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
_provided?.clear()
_required?.clear()
namespace = null
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

internal val _provided : java.util.HashMap<String,org.kevoree.Port> = java.util.HashMap<String,org.kevoree.Port>()
override var provided:List<org.kevoree.Port>
	  get(){
		  return _provided.values().toList()
	  }
	 set(providedP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(providedP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_provided(providedP, true, true)
}
fun internal_provided(providedP : List<org.kevoree.Port>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_provided.values()!= providedP){
_provided.clear()
for(el in providedP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_provided.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_provided, el),org.kevoree.util.Constants.Ref_provided)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_provided, providedP))
}
}
}


private fun doAddProvided(providedP : org.kevoree.Port) {
val _key_ = (providedP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_provided.containsKey(_key_)) {
_provided.put(_key_,providedP)
(providedP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_provided, providedP),org.kevoree.util.Constants.Ref_provided)
}
}

override fun addProvided(providedP : org.kevoree.Port) {
internal_addProvided(providedP, true, true)
}

override fun addAllProvided(providedP :List<org.kevoree.Port>) {
internal_addAllProvided(providedP, true, true)
}

private fun internal_addProvided(providedP : org.kevoree.Port, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddProvided(providedP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_provided, providedP))
}
}

private fun internal_addAllProvided(providedP :List<org.kevoree.Port>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in providedP){
doAddProvided(el)
}
} else {
for(el in providedP){
doAddProvided(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_provided, providedP))
}
}


override fun removeProvided(providedP : org.kevoree.Port) {
internal_removeProvided(providedP, true, true)
}

var removeAllProvidedCurrentlyProcessing : Boolean = false

override fun removeAllProvided() {
internal_removeAllProvided(true, true)
}

private fun internal_removeProvided(providedP : org.kevoree.Port, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_provided.size() != 0 && _provided.containsKey((providedP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_provided.remove((providedP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(providedP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllProvidedCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_provided, providedP))
}
}
}

private fun internal_removeAllProvided(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllProvidedCurrentlyProcessing=true
}
val temp_els = provided!!
_provided.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_provided, temp_els))

removeAllProvidedCurrentlyProcessing=false
}
}

internal val _required : java.util.HashMap<String,org.kevoree.Port> = java.util.HashMap<String,org.kevoree.Port>()
override var required:List<org.kevoree.Port>
	  get(){
		  return _required.values().toList()
	  }
	 set(requiredP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(requiredP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_required(requiredP, true, true)
}
fun internal_required(requiredP : List<org.kevoree.Port>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_required.values()!= requiredP){
_required.clear()
for(el in requiredP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_required.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_required, el),org.kevoree.util.Constants.Ref_required)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_required, requiredP))
}
}
}


private fun doAddRequired(requiredP : org.kevoree.Port) {
val _key_ = (requiredP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_required.containsKey(_key_)) {
_required.put(_key_,requiredP)
(requiredP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_required, requiredP),org.kevoree.util.Constants.Ref_required)
}
}

override fun addRequired(requiredP : org.kevoree.Port) {
internal_addRequired(requiredP, true, true)
}

override fun addAllRequired(requiredP :List<org.kevoree.Port>) {
internal_addAllRequired(requiredP, true, true)
}

private fun internal_addRequired(requiredP : org.kevoree.Port, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddRequired(requiredP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_required, requiredP))
}
}

private fun internal_addAllRequired(requiredP :List<org.kevoree.Port>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in requiredP){
doAddRequired(el)
}
} else {
for(el in requiredP){
doAddRequired(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_required, requiredP))
}
}


override fun removeRequired(requiredP : org.kevoree.Port) {
internal_removeRequired(requiredP, true, true)
}

var removeAllRequiredCurrentlyProcessing : Boolean = false

override fun removeAllRequired() {
internal_removeAllRequired(true, true)
}

private fun internal_removeRequired(requiredP : org.kevoree.Port, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_required.size() != 0 && _required.containsKey((requiredP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_required.remove((requiredP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(requiredP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllRequiredCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_required, requiredP))
}
}
}

private fun internal_removeAllRequired(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllRequiredCurrentlyProcessing=true
}
val temp_els = required!!
_required.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_required, temp_els))

removeAllRequiredCurrentlyProcessing=false
}
}

override var namespace:org.kevoree.Namespace?=null
	 set(namespaceP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_namespace(namespaceP, true, true)
}
fun internal_namespace(namespaceP : org.kevoree.Namespace?, setOpposite : Boolean, fireEvents : Boolean ) {
if($namespace!= namespaceP){
$namespace = namespaceP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_namespace, namespaceP))
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
org.kevoree.util.Constants.Ref_provided -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addProvided(value as org.kevoree.Port, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllProvided(value as List<org.kevoree.Port>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeProvided(value as org.kevoree.Port, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllProvided()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_provided.size() != 0 && _provided.containsKey(value)) {
val obj = _provided.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_provided.remove(value)
_provided.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_required -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addRequired(value as org.kevoree.Port, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllRequired(value as List<org.kevoree.Port>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeRequired(value as org.kevoree.Port, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllRequired()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_required.size() != 0 && _required.containsKey(value)) {
val obj = _required.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_required.remove(value)
_required.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_namespace -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_namespace(value as? org.kevoree.Namespace, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_namespace(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_namespace(value as? org.kevoree.Namespace, setOpposite, fireEvents)
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
override fun findProvidedByID(key : String?) : org.kevoree.Port? {
return _provided.get(key)
}
override fun findRequiredByID(key : String?) : org.kevoree.Port? {
return _required.get(key)
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
org.kevoree.util.Constants.Ref_provided -> {
return findProvidedByID(idP)}
org.kevoree.util.Constants.Ref_required -> {
return findRequiredByID(idP)}
org.kevoree.util.Constants.Ref_namespace -> {
val objFound = namespace
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
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_provided, org.kevoree.util.Constants.org_kevoree_Port)
                                    for(KMFLoopEntryKey in _provided.keySet()){
                        internal_visit(visitor,_provided.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_provided)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_provided)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_required, org.kevoree.util.Constants.org_kevoree_Port)
                                    for(KMFLoopEntryKey in _required.keySet()){
                        internal_visit(visitor,_required.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_required)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_required)
                                    }
                                                                                   if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_typeDefinition, org.kevoree.util.Constants.org_kevoree_TypeDefinition)
                                                    internal_visit(visitor,typeDefinition,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_typeDefinition)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_typeDefinition)
                                                                                                                                                                                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_namespace, org.kevoree.util.Constants.org_kevoree_Namespace)
                                                    internal_visit(visitor,namespace,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_namespace)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_namespace)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
            visitor.visit(started,org.kevoree.util.Constants.Att_started,this)
            visitor.visit(metaData,org.kevoree.util.Constants.Att_metaData,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_ComponentInstance;
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
override public fun getProvided() : List<org.kevoree.Port>{ return provided}
override public fun setProvided(internal_p : List<org.kevoree.Port>){ provided = internal_p }
override public fun getRequired() : List<org.kevoree.Port>{ return required}
override public fun setRequired(internal_p : List<org.kevoree.Port>){ required = internal_p }
override public fun getNamespace() : org.kevoree.Namespace?{ return namespace}
override public fun setNamespace(internal_p : org.kevoree.Namespace?){ namespace = internal_p }
}
