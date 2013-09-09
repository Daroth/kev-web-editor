package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class NodeTypeImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.NodeType { 
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
_managedPrimitiveTypes?.clear()
_managedPrimitiveTypeRefs?.clear()
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

internal val _managedPrimitiveTypes : java.util.HashMap<String,org.kevoree.AdaptationPrimitiveType> = java.util.HashMap<String,org.kevoree.AdaptationPrimitiveType>()
override var managedPrimitiveTypes:List<org.kevoree.AdaptationPrimitiveType>
	  get(){
		  return _managedPrimitiveTypes.values().toList()
	  }
	 set(managedPrimitiveTypesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(managedPrimitiveTypesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_managedPrimitiveTypes(managedPrimitiveTypesP, true, true)
}
fun internal_managedPrimitiveTypes(managedPrimitiveTypesP : List<org.kevoree.AdaptationPrimitiveType>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_managedPrimitiveTypes.values()!= managedPrimitiveTypesP){
_managedPrimitiveTypes.clear()
for(el in managedPrimitiveTypesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_managedPrimitiveTypes.put(elKey!!,el)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_managedPrimitiveTypes, managedPrimitiveTypesP))
}
}
}


private fun doAddManagedPrimitiveTypes(managedPrimitiveTypesP : org.kevoree.AdaptationPrimitiveType) {
val _key_ = (managedPrimitiveTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_managedPrimitiveTypes.containsKey(_key_)) {
_managedPrimitiveTypes.put(_key_,managedPrimitiveTypesP)
}
}

override fun addManagedPrimitiveTypes(managedPrimitiveTypesP : org.kevoree.AdaptationPrimitiveType) {
internal_addManagedPrimitiveTypes(managedPrimitiveTypesP, true, true)
}

override fun addAllManagedPrimitiveTypes(managedPrimitiveTypesP :List<org.kevoree.AdaptationPrimitiveType>) {
internal_addAllManagedPrimitiveTypes(managedPrimitiveTypesP, true, true)
}

private fun internal_addManagedPrimitiveTypes(managedPrimitiveTypesP : org.kevoree.AdaptationPrimitiveType, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddManagedPrimitiveTypes(managedPrimitiveTypesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_managedPrimitiveTypes, managedPrimitiveTypesP))
}
}

private fun internal_addAllManagedPrimitiveTypes(managedPrimitiveTypesP :List<org.kevoree.AdaptationPrimitiveType>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in managedPrimitiveTypesP){
doAddManagedPrimitiveTypes(el)
}
} else {
for(el in managedPrimitiveTypesP){
doAddManagedPrimitiveTypes(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_managedPrimitiveTypes, managedPrimitiveTypesP))
}
}


override fun removeManagedPrimitiveTypes(managedPrimitiveTypesP : org.kevoree.AdaptationPrimitiveType) {
internal_removeManagedPrimitiveTypes(managedPrimitiveTypesP, true, true)
}

override fun removeAllManagedPrimitiveTypes() {
internal_removeAllManagedPrimitiveTypes(true, true)
}

private fun internal_removeManagedPrimitiveTypes(managedPrimitiveTypesP : org.kevoree.AdaptationPrimitiveType, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_managedPrimitiveTypes.size() != 0 && _managedPrimitiveTypes.containsKey((managedPrimitiveTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_managedPrimitiveTypes.remove((managedPrimitiveTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_managedPrimitiveTypes, managedPrimitiveTypesP))
}
}
}

private fun internal_removeAllManagedPrimitiveTypes(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = managedPrimitiveTypes!!
_managedPrimitiveTypes.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_managedPrimitiveTypes, temp_els))
}
}

internal val _managedPrimitiveTypeRefs : java.util.HashMap<String,org.kevoree.AdaptationPrimitiveTypeRef> = java.util.HashMap<String,org.kevoree.AdaptationPrimitiveTypeRef>()
override var managedPrimitiveTypeRefs:List<org.kevoree.AdaptationPrimitiveTypeRef>
	  get(){
		  return _managedPrimitiveTypeRefs.values().toList()
	  }
	 set(managedPrimitiveTypeRefsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(managedPrimitiveTypeRefsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_managedPrimitiveTypeRefs(managedPrimitiveTypeRefsP, true, true)
}
fun internal_managedPrimitiveTypeRefs(managedPrimitiveTypeRefsP : List<org.kevoree.AdaptationPrimitiveTypeRef>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_managedPrimitiveTypeRefs.values()!= managedPrimitiveTypeRefsP){
_managedPrimitiveTypeRefs.clear()
for(el in managedPrimitiveTypeRefsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_managedPrimitiveTypeRefs.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs, el),org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs, managedPrimitiveTypeRefsP))
}
}
}


private fun doAddManagedPrimitiveTypeRefs(managedPrimitiveTypeRefsP : org.kevoree.AdaptationPrimitiveTypeRef) {
val _key_ = (managedPrimitiveTypeRefsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_managedPrimitiveTypeRefs.containsKey(_key_)) {
_managedPrimitiveTypeRefs.put(_key_,managedPrimitiveTypeRefsP)
(managedPrimitiveTypeRefsP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs, managedPrimitiveTypeRefsP),org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs)
}
}

override fun addManagedPrimitiveTypeRefs(managedPrimitiveTypeRefsP : org.kevoree.AdaptationPrimitiveTypeRef) {
internal_addManagedPrimitiveTypeRefs(managedPrimitiveTypeRefsP, true, true)
}

override fun addAllManagedPrimitiveTypeRefs(managedPrimitiveTypeRefsP :List<org.kevoree.AdaptationPrimitiveTypeRef>) {
internal_addAllManagedPrimitiveTypeRefs(managedPrimitiveTypeRefsP, true, true)
}

private fun internal_addManagedPrimitiveTypeRefs(managedPrimitiveTypeRefsP : org.kevoree.AdaptationPrimitiveTypeRef, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddManagedPrimitiveTypeRefs(managedPrimitiveTypeRefsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs, managedPrimitiveTypeRefsP))
}
}

private fun internal_addAllManagedPrimitiveTypeRefs(managedPrimitiveTypeRefsP :List<org.kevoree.AdaptationPrimitiveTypeRef>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in managedPrimitiveTypeRefsP){
doAddManagedPrimitiveTypeRefs(el)
}
} else {
for(el in managedPrimitiveTypeRefsP){
doAddManagedPrimitiveTypeRefs(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs, managedPrimitiveTypeRefsP))
}
}


override fun removeManagedPrimitiveTypeRefs(managedPrimitiveTypeRefsP : org.kevoree.AdaptationPrimitiveTypeRef) {
internal_removeManagedPrimitiveTypeRefs(managedPrimitiveTypeRefsP, true, true)
}

var removeAllManagedPrimitiveTypeRefsCurrentlyProcessing : Boolean = false

override fun removeAllManagedPrimitiveTypeRefs() {
internal_removeAllManagedPrimitiveTypeRefs(true, true)
}

private fun internal_removeManagedPrimitiveTypeRefs(managedPrimitiveTypeRefsP : org.kevoree.AdaptationPrimitiveTypeRef, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_managedPrimitiveTypeRefs.size() != 0 && _managedPrimitiveTypeRefs.containsKey((managedPrimitiveTypeRefsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_managedPrimitiveTypeRefs.remove((managedPrimitiveTypeRefsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(managedPrimitiveTypeRefsP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllManagedPrimitiveTypeRefsCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs, managedPrimitiveTypeRefsP))
}
}
}

private fun internal_removeAllManagedPrimitiveTypeRefs(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllManagedPrimitiveTypeRefsCurrentlyProcessing=true
}
val temp_els = managedPrimitiveTypeRefs!!
_managedPrimitiveTypeRefs.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs, temp_els))

removeAllManagedPrimitiveTypeRefsCurrentlyProcessing=false
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
org.kevoree.util.Constants.Ref_managedPrimitiveTypes -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addManagedPrimitiveTypes(value as org.kevoree.AdaptationPrimitiveType, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllManagedPrimitiveTypes(value as List<org.kevoree.AdaptationPrimitiveType>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeManagedPrimitiveTypes(value as org.kevoree.AdaptationPrimitiveType, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllManagedPrimitiveTypes()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_managedPrimitiveTypes.size() != 0 && _managedPrimitiveTypes.containsKey(value)) {
val obj = _managedPrimitiveTypes.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_managedPrimitiveTypes.remove(value)
_managedPrimitiveTypes.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addManagedPrimitiveTypeRefs(value as org.kevoree.AdaptationPrimitiveTypeRef, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllManagedPrimitiveTypeRefs(value as List<org.kevoree.AdaptationPrimitiveTypeRef>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeManagedPrimitiveTypeRefs(value as org.kevoree.AdaptationPrimitiveTypeRef, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllManagedPrimitiveTypeRefs()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_managedPrimitiveTypeRefs.size() != 0 && _managedPrimitiveTypeRefs.containsKey(value)) {
val obj = _managedPrimitiveTypeRefs.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_managedPrimitiveTypeRefs.remove(value)
_managedPrimitiveTypeRefs.put(objNewKey,obj)
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
override fun findManagedPrimitiveTypesByID(key : String?) : org.kevoree.AdaptationPrimitiveType? {
return _managedPrimitiveTypes.get(key)
}
override fun findManagedPrimitiveTypeRefsByID(key : String?) : org.kevoree.AdaptationPrimitiveTypeRef? {
return _managedPrimitiveTypeRefs.get(key)
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
org.kevoree.util.Constants.Ref_managedPrimitiveTypes -> {
return findManagedPrimitiveTypesByID(idP)}
org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs -> {
return findManagedPrimitiveTypeRefsByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_dictionaryType, org.kevoree.util.Constants.org_kevoree_DictionaryType)
                                    internal_visit(visitor,dictionaryType,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_dictionaryType)
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_dictionaryType)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs, org.kevoree.util.Constants.org_kevoree_AdaptationPrimitiveTypeRef)
                                    for(KMFLoopEntryKey in _managedPrimitiveTypeRefs.keySet()){
                        internal_visit(visitor,_managedPrimitiveTypeRefs.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_managedPrimitiveTypeRefs)
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
                                                                                                        visitor.beginVisitRef(org.kevoree.util.Constants.Ref_managedPrimitiveTypes, org.kevoree.util.Constants.org_kevoree_AdaptationPrimitiveType)
                                                    for(KMFLoopEntryKey in _managedPrimitiveTypes.keySet()){
                                internal_visit(visitor,_managedPrimitiveTypes.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_managedPrimitiveTypes)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_managedPrimitiveTypes)
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
return org.kevoree.util.Constants.org_kevoree_NodeType;
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
override public fun getManagedPrimitiveTypes() : List<org.kevoree.AdaptationPrimitiveType>{ return managedPrimitiveTypes}
override public fun setManagedPrimitiveTypes(internal_p : List<org.kevoree.AdaptationPrimitiveType>){ managedPrimitiveTypes = internal_p }
override public fun getManagedPrimitiveTypeRefs() : List<org.kevoree.AdaptationPrimitiveTypeRef>{ return managedPrimitiveTypeRefs}
override public fun setManagedPrimitiveTypeRefs(internal_p : List<org.kevoree.AdaptationPrimitiveTypeRef>){ managedPrimitiveTypeRefs = internal_p }
}
