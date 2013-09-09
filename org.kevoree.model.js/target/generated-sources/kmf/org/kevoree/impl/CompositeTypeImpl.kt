package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class CompositeTypeImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.CompositeType { 
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
_required?.clear()
_integrationPatterns?.clear()
extraFonctionalProperties = null
_provided?.clear()
_childs?.clear()
_wires?.clear()
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
public override var startMethod : String? = null
	 set(iP : String?){
internal_startMethod(iP, true)
	}//end of setter

	private fun internal_startMethod(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != startMethod){
val oldPath = path()
$startMethod = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_startMethod, startMethod))
}
	}
	}//end of setter
public override var stopMethod : String? = null
	 set(iP : String?){
internal_stopMethod(iP, true)
	}//end of setter

	private fun internal_stopMethod(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != stopMethod){
val oldPath = path()
$stopMethod = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_stopMethod, stopMethod))
}
	}
	}//end of setter
public override var updateMethod : String? = null
	 set(iP : String?){
internal_updateMethod(iP, true)
	}//end of setter

	private fun internal_updateMethod(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != updateMethod){
val oldPath = path()
$updateMethod = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_updateMethod, updateMethod))
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

internal val _required : java.util.HashMap<String,org.kevoree.PortTypeRef> = java.util.HashMap<String,org.kevoree.PortTypeRef>()
override var required:List<org.kevoree.PortTypeRef>
	  get(){
		  return _required.values().toList()
	  }
	 set(requiredP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(requiredP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_required(requiredP, true, true)
}
fun internal_required(requiredP : List<org.kevoree.PortTypeRef>, setOpposite : Boolean, fireEvents : Boolean ) {
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


private fun doAddRequired(requiredP : org.kevoree.PortTypeRef) {
val _key_ = (requiredP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_required.containsKey(_key_)) {
_required.put(_key_,requiredP)
(requiredP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_required, requiredP),org.kevoree.util.Constants.Ref_required)
}
}

override fun addRequired(requiredP : org.kevoree.PortTypeRef) {
internal_addRequired(requiredP, true, true)
}

override fun addAllRequired(requiredP :List<org.kevoree.PortTypeRef>) {
internal_addAllRequired(requiredP, true, true)
}

private fun internal_addRequired(requiredP : org.kevoree.PortTypeRef, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddRequired(requiredP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_required, requiredP))
}
}

private fun internal_addAllRequired(requiredP :List<org.kevoree.PortTypeRef>, setOpposite : Boolean, fireEvents : Boolean) {
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


override fun removeRequired(requiredP : org.kevoree.PortTypeRef) {
internal_removeRequired(requiredP, true, true)
}

var removeAllRequiredCurrentlyProcessing : Boolean = false

override fun removeAllRequired() {
internal_removeAllRequired(true, true)
}

private fun internal_removeRequired(requiredP : org.kevoree.PortTypeRef, setOpposite : Boolean, fireEvents : Boolean) {
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

internal val _integrationPatterns : java.util.HashMap<String,org.kevoree.IntegrationPattern> = java.util.HashMap<String,org.kevoree.IntegrationPattern>()
override var integrationPatterns:List<org.kevoree.IntegrationPattern>
	  get(){
		  return _integrationPatterns.values().toList()
	  }
	 set(integrationPatternsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(integrationPatternsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_integrationPatterns(integrationPatternsP, true, true)
}
fun internal_integrationPatterns(integrationPatternsP : List<org.kevoree.IntegrationPattern>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_integrationPatterns.values()!= integrationPatternsP){
_integrationPatterns.clear()
for(el in integrationPatternsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_integrationPatterns.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_integrationPatterns, el),org.kevoree.util.Constants.Ref_integrationPatterns)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_integrationPatterns, integrationPatternsP))
}
}
}


private fun doAddIntegrationPatterns(integrationPatternsP : org.kevoree.IntegrationPattern) {
val _key_ = (integrationPatternsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_integrationPatterns.containsKey(_key_)) {
_integrationPatterns.put(_key_,integrationPatternsP)
(integrationPatternsP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_integrationPatterns, integrationPatternsP),org.kevoree.util.Constants.Ref_integrationPatterns)
}
}

override fun addIntegrationPatterns(integrationPatternsP : org.kevoree.IntegrationPattern) {
internal_addIntegrationPatterns(integrationPatternsP, true, true)
}

override fun addAllIntegrationPatterns(integrationPatternsP :List<org.kevoree.IntegrationPattern>) {
internal_addAllIntegrationPatterns(integrationPatternsP, true, true)
}

private fun internal_addIntegrationPatterns(integrationPatternsP : org.kevoree.IntegrationPattern, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddIntegrationPatterns(integrationPatternsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_integrationPatterns, integrationPatternsP))
}
}

private fun internal_addAllIntegrationPatterns(integrationPatternsP :List<org.kevoree.IntegrationPattern>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in integrationPatternsP){
doAddIntegrationPatterns(el)
}
} else {
for(el in integrationPatternsP){
doAddIntegrationPatterns(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_integrationPatterns, integrationPatternsP))
}
}


override fun removeIntegrationPatterns(integrationPatternsP : org.kevoree.IntegrationPattern) {
internal_removeIntegrationPatterns(integrationPatternsP, true, true)
}

var removeAllIntegrationPatternsCurrentlyProcessing : Boolean = false

override fun removeAllIntegrationPatterns() {
internal_removeAllIntegrationPatterns(true, true)
}

private fun internal_removeIntegrationPatterns(integrationPatternsP : org.kevoree.IntegrationPattern, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_integrationPatterns.size() != 0 && _integrationPatterns.containsKey((integrationPatternsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_integrationPatterns.remove((integrationPatternsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(integrationPatternsP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllIntegrationPatternsCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_integrationPatterns, integrationPatternsP))
}
}
}

private fun internal_removeAllIntegrationPatterns(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllIntegrationPatternsCurrentlyProcessing=true
}
val temp_els = integrationPatterns!!
_integrationPatterns.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_integrationPatterns, temp_els))

removeAllIntegrationPatternsCurrentlyProcessing=false
}
}

override var extraFonctionalProperties:org.kevoree.ExtraFonctionalProperty?=null
	 set(extraFonctionalPropertiesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_extraFonctionalProperties(extraFonctionalPropertiesP, true, true)
}
fun internal_extraFonctionalProperties(extraFonctionalPropertiesP : org.kevoree.ExtraFonctionalProperty?, setOpposite : Boolean, fireEvents : Boolean ) {
if($extraFonctionalProperties!= extraFonctionalPropertiesP){
if($extraFonctionalProperties != null){
($extraFonctionalProperties!! as org.kevoree.container.KMFContainerImpl ).setEContainer(null, null,null)
}
if(extraFonctionalPropertiesP!=null){
(extraFonctionalPropertiesP as org.kevoree.container.KMFContainerImpl ).setEContainer(this,null,org.kevoree.util.Constants.Ref_extraFonctionalProperties)
}
$extraFonctionalProperties = extraFonctionalPropertiesP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_extraFonctionalProperties, extraFonctionalPropertiesP))
}
}
}

internal val _provided : java.util.HashMap<String,org.kevoree.PortTypeRef> = java.util.HashMap<String,org.kevoree.PortTypeRef>()
override var provided:List<org.kevoree.PortTypeRef>
	  get(){
		  return _provided.values().toList()
	  }
	 set(providedP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(providedP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_provided(providedP, true, true)
}
fun internal_provided(providedP : List<org.kevoree.PortTypeRef>, setOpposite : Boolean, fireEvents : Boolean ) {
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


private fun doAddProvided(providedP : org.kevoree.PortTypeRef) {
val _key_ = (providedP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_provided.containsKey(_key_)) {
_provided.put(_key_,providedP)
(providedP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_provided, providedP),org.kevoree.util.Constants.Ref_provided)
}
}

override fun addProvided(providedP : org.kevoree.PortTypeRef) {
internal_addProvided(providedP, true, true)
}

override fun addAllProvided(providedP :List<org.kevoree.PortTypeRef>) {
internal_addAllProvided(providedP, true, true)
}

private fun internal_addProvided(providedP : org.kevoree.PortTypeRef, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddProvided(providedP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_provided, providedP))
}
}

private fun internal_addAllProvided(providedP :List<org.kevoree.PortTypeRef>, setOpposite : Boolean, fireEvents : Boolean) {
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


override fun removeProvided(providedP : org.kevoree.PortTypeRef) {
internal_removeProvided(providedP, true, true)
}

var removeAllProvidedCurrentlyProcessing : Boolean = false

override fun removeAllProvided() {
internal_removeAllProvided(true, true)
}

private fun internal_removeProvided(providedP : org.kevoree.PortTypeRef, setOpposite : Boolean, fireEvents : Boolean) {
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

internal val _childs : java.util.HashMap<String,org.kevoree.ComponentType> = java.util.HashMap<String,org.kevoree.ComponentType>()
override var childs:List<org.kevoree.ComponentType>
	  get(){
		  return _childs.values().toList()
	  }
	 set(childsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(childsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_childs(childsP, true, true)
}
fun internal_childs(childsP : List<org.kevoree.ComponentType>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_childs.values()!= childsP){
_childs.clear()
for(el in childsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_childs.put(elKey!!,el)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_childs, childsP))
}
}
}


private fun doAddChilds(childsP : org.kevoree.ComponentType) {
val _key_ = (childsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_childs.containsKey(_key_)) {
_childs.put(_key_,childsP)
}
}

override fun addChilds(childsP : org.kevoree.ComponentType) {
internal_addChilds(childsP, true, true)
}

override fun addAllChilds(childsP :List<org.kevoree.ComponentType>) {
internal_addAllChilds(childsP, true, true)
}

private fun internal_addChilds(childsP : org.kevoree.ComponentType, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddChilds(childsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_childs, childsP))
}
}

private fun internal_addAllChilds(childsP :List<org.kevoree.ComponentType>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in childsP){
doAddChilds(el)
}
} else {
for(el in childsP){
doAddChilds(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_childs, childsP))
}
}


override fun removeChilds(childsP : org.kevoree.ComponentType) {
internal_removeChilds(childsP, true, true)
}

override fun removeAllChilds() {
internal_removeAllChilds(true, true)
}

private fun internal_removeChilds(childsP : org.kevoree.ComponentType, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_childs.size() != 0 && _childs.containsKey((childsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_childs.remove((childsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_childs, childsP))
}
}
}

private fun internal_removeAllChilds(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = childs!!
_childs.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_childs, temp_els))
}
}

internal val _wires : java.util.HashMap<String,org.kevoree.Wire> = java.util.HashMap<String,org.kevoree.Wire>()
override var wires:List<org.kevoree.Wire>
	  get(){
		  return _wires.values().toList()
	  }
	 set(wiresP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(wiresP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_wires(wiresP, true, true)
}
fun internal_wires(wiresP : List<org.kevoree.Wire>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_wires.values()!= wiresP){
_wires.clear()
for(el in wiresP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_wires.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_wires, el),org.kevoree.util.Constants.Ref_wires)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_wires, wiresP))
}
}
}


private fun doAddWires(wiresP : org.kevoree.Wire) {
val _key_ = (wiresP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_wires.containsKey(_key_)) {
_wires.put(_key_,wiresP)
(wiresP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_wires, wiresP),org.kevoree.util.Constants.Ref_wires)
}
}

override fun addWires(wiresP : org.kevoree.Wire) {
internal_addWires(wiresP, true, true)
}

override fun addAllWires(wiresP :List<org.kevoree.Wire>) {
internal_addAllWires(wiresP, true, true)
}

private fun internal_addWires(wiresP : org.kevoree.Wire, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddWires(wiresP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_wires, wiresP))
}
}

private fun internal_addAllWires(wiresP :List<org.kevoree.Wire>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in wiresP){
doAddWires(el)
}
} else {
for(el in wiresP){
doAddWires(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_wires, wiresP))
}
}


override fun removeWires(wiresP : org.kevoree.Wire) {
internal_removeWires(wiresP, true, true)
}

var removeAllWiresCurrentlyProcessing : Boolean = false

override fun removeAllWires() {
internal_removeAllWires(true, true)
}

private fun internal_removeWires(wiresP : org.kevoree.Wire, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_wires.size() != 0 && _wires.containsKey((wiresP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_wires.remove((wiresP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(wiresP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllWiresCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_wires, wiresP))
}
}
}

private fun internal_removeAllWires(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllWiresCurrentlyProcessing=true
}
val temp_els = wires!!
_wires.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_wires, temp_els))

removeAllWiresCurrentlyProcessing=false
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
org.kevoree.util.Constants.Att_startMethod -> {
this.internal_startMethod((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_stopMethod -> {
this.internal_stopMethod((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_updateMethod -> {
this.internal_updateMethod((value as? String), fireEvents)
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
org.kevoree.util.Constants.Ref_required -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addRequired(value as org.kevoree.PortTypeRef, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllRequired(value as List<org.kevoree.PortTypeRef>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeRequired(value as org.kevoree.PortTypeRef, setOpposite, fireEvents)
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
org.kevoree.util.Constants.Ref_integrationPatterns -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addIntegrationPatterns(value as org.kevoree.IntegrationPattern, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllIntegrationPatterns(value as List<org.kevoree.IntegrationPattern>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeIntegrationPatterns(value as org.kevoree.IntegrationPattern, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllIntegrationPatterns()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_integrationPatterns.size() != 0 && _integrationPatterns.containsKey(value)) {
val obj = _integrationPatterns.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_integrationPatterns.remove(value)
_integrationPatterns.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_extraFonctionalProperties -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_extraFonctionalProperties(value as? org.kevoree.ExtraFonctionalProperty, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_extraFonctionalProperties(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_extraFonctionalProperties(value as? org.kevoree.ExtraFonctionalProperty, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_provided -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addProvided(value as org.kevoree.PortTypeRef, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllProvided(value as List<org.kevoree.PortTypeRef>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeProvided(value as org.kevoree.PortTypeRef, setOpposite, fireEvents)
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
org.kevoree.util.Constants.Ref_childs -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addChilds(value as org.kevoree.ComponentType, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllChilds(value as List<org.kevoree.ComponentType>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeChilds(value as org.kevoree.ComponentType, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllChilds()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_childs.size() != 0 && _childs.containsKey(value)) {
val obj = _childs.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_childs.remove(value)
_childs.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_wires -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addWires(value as org.kevoree.Wire, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllWires(value as List<org.kevoree.Wire>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeWires(value as org.kevoree.Wire, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllWires()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_wires.size() != 0 && _wires.containsKey(value)) {
val obj = _wires.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_wires.remove(value)
_wires.put(objNewKey,obj)
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
override fun findRequiredByID(key : String?) : org.kevoree.PortTypeRef? {
return _required.get(key)
}
override fun findIntegrationPatternsByID(key : String?) : org.kevoree.IntegrationPattern? {
return _integrationPatterns.get(key)
}
override fun findProvidedByID(key : String?) : org.kevoree.PortTypeRef? {
return _provided.get(key)
}
override fun findChildsByID(key : String?) : org.kevoree.ComponentType? {
return _childs.get(key)
}
override fun findWiresByID(key : String?) : org.kevoree.Wire? {
return _wires.get(key)
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
org.kevoree.util.Constants.Ref_required -> {
return findRequiredByID(idP)}
org.kevoree.util.Constants.Ref_integrationPatterns -> {
return findIntegrationPatternsByID(idP)}
org.kevoree.util.Constants.Ref_extraFonctionalProperties -> {
val objFound = extraFonctionalProperties
if(objFound!=null && (objFound as org.kevoree.container.KMFContainerImpl).internalGetKey() == idP){
return objFound
}else{return null}
}
org.kevoree.util.Constants.Ref_provided -> {
return findProvidedByID(idP)}
org.kevoree.util.Constants.Ref_childs -> {
return findChildsByID(idP)}
org.kevoree.util.Constants.Ref_wires -> {
return findWiresByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_dictionaryType, org.kevoree.util.Constants.org_kevoree_DictionaryType)
                                    internal_visit(visitor,dictionaryType,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_dictionaryType)
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_dictionaryType)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_required, org.kevoree.util.Constants.org_kevoree_PortTypeRef)
                                    for(KMFLoopEntryKey in _required.keySet()){
                        internal_visit(visitor,_required.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_required)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_required)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_integrationPatterns, org.kevoree.util.Constants.org_kevoree_IntegrationPattern)
                                    for(KMFLoopEntryKey in _integrationPatterns.keySet()){
                        internal_visit(visitor,_integrationPatterns.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_integrationPatterns)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_integrationPatterns)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_extraFonctionalProperties, org.kevoree.util.Constants.org_kevoree_ExtraFonctionalProperty)
                                    internal_visit(visitor,extraFonctionalProperties,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_extraFonctionalProperties)
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_extraFonctionalProperties)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_provided, org.kevoree.util.Constants.org_kevoree_PortTypeRef)
                                    for(KMFLoopEntryKey in _provided.keySet()){
                        internal_visit(visitor,_provided.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_provided)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_provided)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_wires, org.kevoree.util.Constants.org_kevoree_Wire)
                                    for(KMFLoopEntryKey in _wires.keySet()){
                        internal_visit(visitor,_wires.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_wires)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_wires)
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
                                                                                                                                                                                                                                                        visitor.beginVisitRef(org.kevoree.util.Constants.Ref_childs, org.kevoree.util.Constants.org_kevoree_ComponentType)
                                                    for(KMFLoopEntryKey in _childs.keySet()){
                                internal_visit(visitor,_childs.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_childs)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_childs)
                                                                                              }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(stopMethod,org.kevoree.util.Constants.Att_stopMethod,this)
            visitor.visit(abstract,org.kevoree.util.Constants.Att_abstract,this)
            visitor.visit(bean,org.kevoree.util.Constants.Att_bean,this)
            visitor.visit(updateMethod,org.kevoree.util.Constants.Att_updateMethod,this)
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
            visitor.visit(factoryBean,org.kevoree.util.Constants.Att_factoryBean,this)
            visitor.visit(startMethod,org.kevoree.util.Constants.Att_startMethod,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_CompositeType;
}
override public fun getStopMethod() : String? { return stopMethod}
override public fun setStopMethod(internal_p : String?) { stopMethod = internal_p }
override public fun getAbstract() : Boolean? { return abstract}
override public fun setAbstract(internal_p : Boolean?) { abstract = internal_p }
override public fun getBean() : String? { return bean}
override public fun setBean(internal_p : String?) { bean = internal_p }
override public fun getUpdateMethod() : String? { return updateMethod}
override public fun setUpdateMethod(internal_p : String?) { updateMethod = internal_p }
override public fun getName() : String? { return name}
override public fun setName(internal_p : String?) { name = internal_p }
override public fun getFactoryBean() : String? { return factoryBean}
override public fun setFactoryBean(internal_p : String?) { factoryBean = internal_p }
override public fun getStartMethod() : String? { return startMethod}
override public fun setStartMethod(internal_p : String?) { startMethod = internal_p }
override public fun getDeployUnits() : List<org.kevoree.DeployUnit>{ return deployUnits}
override public fun setDeployUnits(internal_p : List<org.kevoree.DeployUnit>){ deployUnits = internal_p }
override public fun getDictionaryType() : org.kevoree.DictionaryType?{ return dictionaryType}
override public fun setDictionaryType(internal_p : org.kevoree.DictionaryType?){ dictionaryType = internal_p }
override public fun getSuperTypes() : List<org.kevoree.TypeDefinition>{ return superTypes}
override public fun setSuperTypes(internal_p : List<org.kevoree.TypeDefinition>){ superTypes = internal_p }
override public fun getRequired() : List<org.kevoree.PortTypeRef>{ return required}
override public fun setRequired(internal_p : List<org.kevoree.PortTypeRef>){ required = internal_p }
override public fun getIntegrationPatterns() : List<org.kevoree.IntegrationPattern>{ return integrationPatterns}
override public fun setIntegrationPatterns(internal_p : List<org.kevoree.IntegrationPattern>){ integrationPatterns = internal_p }
override public fun getExtraFonctionalProperties() : org.kevoree.ExtraFonctionalProperty?{ return extraFonctionalProperties}
override public fun setExtraFonctionalProperties(internal_p : org.kevoree.ExtraFonctionalProperty?){ extraFonctionalProperties = internal_p }
override public fun getProvided() : List<org.kevoree.PortTypeRef>{ return provided}
override public fun setProvided(internal_p : List<org.kevoree.PortTypeRef>){ provided = internal_p }
override public fun getChilds() : List<org.kevoree.ComponentType>{ return childs}
override public fun setChilds(internal_p : List<org.kevoree.ComponentType>){ childs = internal_p }
override public fun getWires() : List<org.kevoree.Wire>{ return wires}
override public fun setWires(internal_p : List<org.kevoree.Wire>){ wires = internal_p }
}
