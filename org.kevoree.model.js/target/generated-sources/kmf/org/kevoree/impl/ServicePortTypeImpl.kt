package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class ServicePortTypeImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.ServicePortType { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_deployUnits?.clear()
dictionaryType = null
_superTypes?.clear()
_operations?.clear()
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
public override var factoryBean : String? = null
	 set(iP : String?){
internal_factoryBean(iP, true)
	}//end of setter

	private fun internal_factoryBean(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != factoryBean){
val oldPath = path()
$factoryBean = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_factoryBean, factoryBean))
}
	}
	}//end of setter
public override var bean : String? = null
	 set(iP : String?){
internal_bean(iP, true)
	}//end of setter

	private fun internal_bean(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != bean){
val oldPath = path()
$bean = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_bean, bean))
}
	}
	}//end of setter
public override var abstract : Boolean? = null
	 set(iP : Boolean?){
internal_abstract(iP, true)
	}//end of setter

	private fun internal_abstract(iP : Boolean?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != abstract){
val oldPath = path()
$abstract = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_abstract, abstract))
}
	}
	}//end of setter
public override var synchrone : Boolean? = null
	 set(iP : Boolean?){
internal_synchrone(iP, true)
	}//end of setter

	private fun internal_synchrone(iP : Boolean?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != synchrone){
val oldPath = path()
$synchrone = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_synchrone, synchrone))
}
	}
	}//end of setter
public override var interface : String? = null
	 set(iP : String?){
internal_interface(iP, true)
	}//end of setter

	private fun internal_interface(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != interface){
val oldPath = path()
$interface = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_interface, interface))
}
	}
	}//end of setter
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
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_deployUnits, deployUnitsP))
}
}
}


private fun doAddDeployUnits(deployUnitsP : org.kevoree.DeployUnit) {
val _key_ = (deployUnitsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_deployUnits.containsKey(_key_)) {
_deployUnits.put(_key_,deployUnitsP)
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
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_deployUnits, deployUnitsP))
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
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_deployUnits, deployUnitsP))
}
}


override fun removeDeployUnits(deployUnitsP : org.kevoree.DeployUnit) {
internal_removeDeployUnits(deployUnitsP, true, true)
}

override fun removeAllDeployUnits() {
internal_removeAllDeployUnits(true, true)
}

private fun internal_removeDeployUnits(deployUnitsP : org.kevoree.DeployUnit, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_deployUnits.size == 1&& _deployUnits.containsKey((deployUnitsP as org.kevoree.container.KMFContainerImpl).internalGetKey()) ) {
throw UnsupportedOperationException("The list of deployUnitsP must contain at least 1 element. Can not remove sizeof(deployUnitsP)="+_deployUnits.size)
} else {
_deployUnits.remove((deployUnitsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_deployUnits, deployUnitsP))
}
}
}

private fun internal_removeAllDeployUnits(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = deployUnits!!
_deployUnits.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_deployUnits, temp_els))
}
}

override var dictionaryType:org.kevoree.DictionaryType?=null
	 set(dictionaryTypeP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_dictionaryType(dictionaryTypeP, true, true)
}
fun internal_dictionaryType(dictionaryTypeP : org.kevoree.DictionaryType?, setOpposite : Boolean, fireEvents : Boolean ) {
if($dictionaryType!= dictionaryTypeP){
if($dictionaryType != null){
($dictionaryType!! as org.kevoree.container.KMFContainerImpl ).setEContainer(null, null,null)
}
if(dictionaryTypeP!=null){
(dictionaryTypeP as org.kevoree.container.KMFContainerImpl ).setEContainer(this,null,org.kevoree.util.Constants.Ref_dictionaryType)
}
$dictionaryType = dictionaryTypeP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_dictionaryType, dictionaryTypeP))
}
}
}

internal val _superTypes : java.util.HashMap<String,org.kevoree.TypeDefinition> = java.util.HashMap<String,org.kevoree.TypeDefinition>()
override var superTypes:List<org.kevoree.TypeDefinition>
	  get(){
		  return _superTypes.values().toList()
	  }
	 set(superTypesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(superTypesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_superTypes(superTypesP, true, true)
}
fun internal_superTypes(superTypesP : List<org.kevoree.TypeDefinition>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_superTypes.values()!= superTypesP){
_superTypes.clear()
for(el in superTypesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_superTypes.put(elKey!!,el)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_superTypes, superTypesP))
}
}
}


private fun doAddSuperTypes(superTypesP : org.kevoree.TypeDefinition) {
val _key_ = (superTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_superTypes.containsKey(_key_)) {
_superTypes.put(_key_,superTypesP)
}
}

override fun addSuperTypes(superTypesP : org.kevoree.TypeDefinition) {
internal_addSuperTypes(superTypesP, true, true)
}

override fun addAllSuperTypes(superTypesP :List<org.kevoree.TypeDefinition>) {
internal_addAllSuperTypes(superTypesP, true, true)
}

private fun internal_addSuperTypes(superTypesP : org.kevoree.TypeDefinition, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddSuperTypes(superTypesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_superTypes, superTypesP))
}
}

private fun internal_addAllSuperTypes(superTypesP :List<org.kevoree.TypeDefinition>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in superTypesP){
doAddSuperTypes(el)
}
} else {
for(el in superTypesP){
doAddSuperTypes(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_superTypes, superTypesP))
}
}


override fun removeSuperTypes(superTypesP : org.kevoree.TypeDefinition) {
internal_removeSuperTypes(superTypesP, true, true)
}

override fun removeAllSuperTypes() {
internal_removeAllSuperTypes(true, true)
}

private fun internal_removeSuperTypes(superTypesP : org.kevoree.TypeDefinition, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_superTypes.size() != 0 && _superTypes.containsKey((superTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_superTypes.remove((superTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_superTypes, superTypesP))
}
}
}

private fun internal_removeAllSuperTypes(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = superTypes!!
_superTypes.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_superTypes, temp_els))
}
}

internal val _operations : java.util.HashMap<String,org.kevoree.Operation> = java.util.HashMap<String,org.kevoree.Operation>()
override var operations:List<org.kevoree.Operation>
	  get(){
		  return _operations.values().toList()
	  }
	 set(operationsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(operationsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_operations(operationsP, true, true)
}
fun internal_operations(operationsP : List<org.kevoree.Operation>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_operations.values()!= operationsP){
_operations.clear()
for(el in operationsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_operations.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_operations, el),org.kevoree.util.Constants.Ref_operations)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_operations, operationsP))
}
}
}


private fun doAddOperations(operationsP : org.kevoree.Operation) {
val _key_ = (operationsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_operations.containsKey(_key_)) {
_operations.put(_key_,operationsP)
(operationsP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_operations, operationsP),org.kevoree.util.Constants.Ref_operations)
}
}

override fun addOperations(operationsP : org.kevoree.Operation) {
internal_addOperations(operationsP, true, true)
}

override fun addAllOperations(operationsP :List<org.kevoree.Operation>) {
internal_addAllOperations(operationsP, true, true)
}

private fun internal_addOperations(operationsP : org.kevoree.Operation, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddOperations(operationsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_operations, operationsP))
}
}

private fun internal_addAllOperations(operationsP :List<org.kevoree.Operation>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in operationsP){
doAddOperations(el)
}
} else {
for(el in operationsP){
doAddOperations(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_operations, operationsP))
}
}


override fun removeOperations(operationsP : org.kevoree.Operation) {
internal_removeOperations(operationsP, true, true)
}

var removeAllOperationsCurrentlyProcessing : Boolean = false

override fun removeAllOperations() {
internal_removeAllOperations(true, true)
}

private fun internal_removeOperations(operationsP : org.kevoree.Operation, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_operations.size() != 0 && _operations.containsKey((operationsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_operations.remove((operationsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(operationsP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllOperationsCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_operations, operationsP))
}
}
}

private fun internal_removeAllOperations(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllOperationsCurrentlyProcessing=true
}
val temp_els = operations!!
_operations.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_operations, temp_els))

removeAllOperationsCurrentlyProcessing=false
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_name -> {
this.internal_name((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_factoryBean -> {
this.internal_factoryBean((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_bean -> {
this.internal_bean((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_abstract -> {
this.internal_abstract(("true" == value || true == value), fireEvents)
}
org.kevoree.util.Constants.Att_synchrone -> {
this.internal_synchrone(("true" == value || true == value), fireEvents)
}
org.kevoree.util.Constants.Att_interface -> {
this.internal_interface((value as? String), fireEvents)
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
org.kevoree.util.Constants.Ref_dictionaryType -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_dictionaryType(value as? org.kevoree.DictionaryType, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_dictionaryType(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_dictionaryType(value as? org.kevoree.DictionaryType, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_superTypes -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addSuperTypes(value as org.kevoree.TypeDefinition, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllSuperTypes(value as List<org.kevoree.TypeDefinition>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeSuperTypes(value as org.kevoree.TypeDefinition, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllSuperTypes()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_superTypes.size() != 0 && _superTypes.containsKey(value)) {
val obj = _superTypes.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_superTypes.remove(value)
_superTypes.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_operations -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addOperations(value as org.kevoree.Operation, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllOperations(value as List<org.kevoree.Operation>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeOperations(value as org.kevoree.Operation, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllOperations()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_operations.size() != 0 && _operations.containsKey(value)) {
val obj = _operations.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_operations.remove(value)
_operations.put(objNewKey,obj)
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
override fun findDeployUnitsByID(key : String?) : org.kevoree.DeployUnit? {
return _deployUnits.get(key)
}
override fun findSuperTypesByID(key : String?) : org.kevoree.TypeDefinition? {
return _superTypes.get(key)
}
override fun findOperationsByID(key : String?) : org.kevoree.Operation? {
return _operations.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_deployUnits -> {
return findDeployUnitsByID(idP)}
org.kevoree.util.Constants.Ref_dictionaryType -> {
val objFound = dictionaryType
if(objFound!=null && (objFound as org.kevoree.container.KMFContainerImpl).internalGetKey() == idP){
return objFound
}else{return null}
}
org.kevoree.util.Constants.Ref_superTypes -> {
return findSuperTypesByID(idP)}
org.kevoree.util.Constants.Ref_operations -> {
return findOperationsByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_dictionaryType, org.kevoree.util.Constants.org_kevoree_DictionaryType)
                                    internal_visit(visitor,dictionaryType,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_dictionaryType)
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_dictionaryType)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_operations, org.kevoree.util.Constants.org_kevoree_Operation)
                                    for(KMFLoopEntryKey in _operations.keySet()){
                        internal_visit(visitor,_operations.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_operations)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_operations)
                                    }
                                                                                   if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_deployUnits, org.kevoree.util.Constants.org_kevoree_DeployUnit)
                                                    for(KMFLoopEntryKey in _deployUnits.keySet()){
                                internal_visit(visitor,_deployUnits.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_deployUnits)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_deployUnits)
                                                                                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_superTypes, org.kevoree.util.Constants.org_kevoree_TypeDefinition)
                                                    for(KMFLoopEntryKey in _superTypes.keySet()){
                                internal_visit(visitor,_superTypes.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_superTypes)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_superTypes)
                                                                                              }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(abstract,org.kevoree.util.Constants.Att_abstract,this)
            visitor.visit(synchrone,org.kevoree.util.Constants.Att_synchrone,this)
            visitor.visit(bean,org.kevoree.util.Constants.Att_bean,this)
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
            visitor.visit(factoryBean,org.kevoree.util.Constants.Att_factoryBean,this)
            visitor.visit(interface,org.kevoree.util.Constants.Att_interface,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_ServicePortType;
}
override public fun getAbstract() : Boolean? { return abstract}
override public fun setAbstract(internal_p : Boolean?) { abstract = internal_p }
override public fun getSynchrone() : Boolean? { return synchrone}
override public fun setSynchrone(internal_p : Boolean?) { synchrone = internal_p }
override public fun getBean() : String? { return bean}
override public fun setBean(internal_p : String?) { bean = internal_p }
override public fun getName() : String? { return name}
override public fun setName(internal_p : String?) { name = internal_p }
override public fun getFactoryBean() : String? { return factoryBean}
override public fun setFactoryBean(internal_p : String?) { factoryBean = internal_p }
override public fun getInterface() : String? { return interface}
override public fun setInterface(internal_p : String?) { interface = internal_p }
override public fun getDeployUnits() : List<org.kevoree.DeployUnit>{ return deployUnits}
override public fun setDeployUnits(internal_p : List<org.kevoree.DeployUnit>){ deployUnits = internal_p }
override public fun getDictionaryType() : org.kevoree.DictionaryType?{ return dictionaryType}
override public fun setDictionaryType(internal_p : org.kevoree.DictionaryType?){ dictionaryType = internal_p }
override public fun getSuperTypes() : List<org.kevoree.TypeDefinition>{ return superTypes}
override public fun setSuperTypes(internal_p : List<org.kevoree.TypeDefinition>){ superTypes = internal_p }
override public fun getOperations() : List<org.kevoree.Operation>{ return operations}
override public fun setOperations(internal_p : List<org.kevoree.Operation>){ operations = internal_p }
}
