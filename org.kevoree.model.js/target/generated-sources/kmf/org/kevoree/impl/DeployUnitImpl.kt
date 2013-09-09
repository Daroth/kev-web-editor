package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class DeployUnitImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.DeployUnit { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_requiredLibs?.clear()
targetNodeType = null
}
public override var name : String? = null
	 set(iP : String?){
internal_name(iP, true)
	}//end of setter

	private fun internal_name(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != name){
val oldPath = path()
$name = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_name, name))
}
	}
	}//end of setter
public override var groupName : String? = null
	 set(iP : String?){
internal_groupName(iP, true)
	}//end of setter

	private fun internal_groupName(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != groupName){
val oldPath = path()
$groupName = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_groupName, groupName))
}
	}
	}//end of setter
public override var unitName : String? = null
	 set(iP : String?){
internal_unitName(iP, true)
	}//end of setter

	private fun internal_unitName(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != unitName){
val oldPath = path()
$unitName = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_unitName, unitName))
}
	}
	}//end of setter
public override var version : String? = null
	 set(iP : String?){
internal_version(iP, true)
	}//end of setter

	private fun internal_version(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != version){
val oldPath = path()
$version = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_version, version))
}
	}
	}//end of setter
public override var url : String? = null
	 set(iP : String?){
internal_url(iP, true)
	}//end of setter

	private fun internal_url(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != url){
val oldPath = path()
$url = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_url, url))
}
	}
	}//end of setter
public override var hashcode : String? = null
	 set(iP : String?){
internal_hashcode(iP, true)
	}//end of setter

	private fun internal_hashcode(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != hashcode){
val oldPath = path()
$hashcode = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_hashcode, hashcode))
}
	}
	}//end of setter
public override var `type` : String? = null
	 set(iP : String?){
internal_type(iP, true)
	}//end of setter

	private fun internal_type(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != `type`){
val oldPath = path()
$`type` = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_type, `type`))
}
	}
	}//end of setter
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
internal val _requiredLibs : java.util.HashMap<String,org.kevoree.DeployUnit> = java.util.HashMap<String,org.kevoree.DeployUnit>()
override var requiredLibs:List<org.kevoree.DeployUnit>
	  get(){
		  return _requiredLibs.values().toList()
	  }
	 set(requiredLibsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(requiredLibsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_requiredLibs(requiredLibsP, true, true)
}
fun internal_requiredLibs(requiredLibsP : List<org.kevoree.DeployUnit>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_requiredLibs.values()!= requiredLibsP){
_requiredLibs.clear()
for(el in requiredLibsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_requiredLibs.put(elKey!!,el)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_requiredLibs, requiredLibsP))
}
}
}


private fun doAddRequiredLibs(requiredLibsP : org.kevoree.DeployUnit) {
val _key_ = (requiredLibsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_requiredLibs.containsKey(_key_)) {
_requiredLibs.put(_key_,requiredLibsP)
}
}

override fun addRequiredLibs(requiredLibsP : org.kevoree.DeployUnit) {
internal_addRequiredLibs(requiredLibsP, true, true)
}

override fun addAllRequiredLibs(requiredLibsP :List<org.kevoree.DeployUnit>) {
internal_addAllRequiredLibs(requiredLibsP, true, true)
}

private fun internal_addRequiredLibs(requiredLibsP : org.kevoree.DeployUnit, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddRequiredLibs(requiredLibsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_requiredLibs, requiredLibsP))
}
}

private fun internal_addAllRequiredLibs(requiredLibsP :List<org.kevoree.DeployUnit>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in requiredLibsP){
doAddRequiredLibs(el)
}
} else {
for(el in requiredLibsP){
doAddRequiredLibs(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_requiredLibs, requiredLibsP))
}
}


override fun removeRequiredLibs(requiredLibsP : org.kevoree.DeployUnit) {
internal_removeRequiredLibs(requiredLibsP, true, true)
}

override fun removeAllRequiredLibs() {
internal_removeAllRequiredLibs(true, true)
}

private fun internal_removeRequiredLibs(requiredLibsP : org.kevoree.DeployUnit, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_requiredLibs.size() != 0 && _requiredLibs.containsKey((requiredLibsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_requiredLibs.remove((requiredLibsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_requiredLibs, requiredLibsP))
}
}
}

private fun internal_removeAllRequiredLibs(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = requiredLibs!!
_requiredLibs.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_requiredLibs, temp_els))
}
}

override var targetNodeType:org.kevoree.NodeType?=null
	 set(targetNodeTypeP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_targetNodeType(targetNodeTypeP, true, true)
}
fun internal_targetNodeType(targetNodeTypeP : org.kevoree.NodeType?, setOpposite : Boolean, fireEvents : Boolean ) {
if($targetNodeType!= targetNodeTypeP){
$targetNodeType = targetNodeTypeP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_targetNodeType, targetNodeTypeP))
}
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_name -> {
this.internal_name((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_groupName -> {
this.internal_groupName((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_unitName -> {
this.internal_unitName((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_version -> {
this.internal_version((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_url -> {
this.internal_url((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_hashcode -> {
this.internal_hashcode((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_type -> {
this.internal_type((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_generated_KMF_ID -> {
this.internal_generated_KMF_ID((value as? String), fireEvents)
}
org.kevoree.util.Constants.Ref_requiredLibs -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addRequiredLibs(value as org.kevoree.DeployUnit, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllRequiredLibs(value as List<org.kevoree.DeployUnit>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeRequiredLibs(value as org.kevoree.DeployUnit, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllRequiredLibs()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_requiredLibs.size() != 0 && _requiredLibs.containsKey(value)) {
val obj = _requiredLibs.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_requiredLibs.remove(value)
_requiredLibs.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_targetNodeType -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_targetNodeType(value as? org.kevoree.NodeType, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_targetNodeType(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_targetNodeType(value as? org.kevoree.NodeType, setOpposite, fireEvents)
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
override fun findRequiredLibsByID(key : String?) : org.kevoree.DeployUnit? {
return _requiredLibs.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_requiredLibs -> {
return findRequiredLibsByID(idP)}
org.kevoree.util.Constants.Ref_targetNodeType -> {
val objFound = targetNodeType
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
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_requiredLibs, org.kevoree.util.Constants.org_kevoree_DeployUnit)
                                                    for(KMFLoopEntryKey in _requiredLibs.keySet()){
                                internal_visit(visitor,_requiredLibs.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_requiredLibs)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_requiredLibs)
                                                                                                        visitor.beginVisitRef(org.kevoree.util.Constants.Ref_targetNodeType, org.kevoree.util.Constants.org_kevoree_NodeType)
                                                    internal_visit(visitor,targetNodeType,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_targetNodeType)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_targetNodeType)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(groupName,org.kevoree.util.Constants.Att_groupName,this)
            visitor.visit(unitName,org.kevoree.util.Constants.Att_unitName,this)
            visitor.visit(generated_KMF_ID,org.kevoree.util.Constants.Att_generated_KMF_ID,this)
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
            visitor.visit(hashcode,org.kevoree.util.Constants.Att_hashcode,this)
            visitor.visit(`type`,org.kevoree.util.Constants.Att_type,this)
            visitor.visit(url,org.kevoree.util.Constants.Att_url,this)
            visitor.visit(version,org.kevoree.util.Constants.Att_version,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_DeployUnit;
}
override public fun getGroupName() : String? { return groupName}
override public fun setGroupName(internal_p : String?) { groupName = internal_p }
override public fun getUnitName() : String? { return unitName}
override public fun setUnitName(internal_p : String?) { unitName = internal_p }
override public fun getGenerated_KMF_ID() : String? { return generated_KMF_ID}
override public fun setGenerated_KMF_ID(internal_p : String?) { generated_KMF_ID = internal_p }
override public fun getName() : String? { return name}
override public fun setName(internal_p : String?) { name = internal_p }
override public fun getHashcode() : String? { return hashcode}
override public fun setHashcode(internal_p : String?) { hashcode = internal_p }
override public fun getType() : String? { return `type`}
override public fun setType(internal_p : String?) { `type` = internal_p }
override public fun getUrl() : String? { return url}
override public fun setUrl(internal_p : String?) { url = internal_p }
override public fun getVersion() : String? { return version}
override public fun setVersion(internal_p : String?) { version = internal_p }
override public fun getRequiredLibs() : List<org.kevoree.DeployUnit>{ return requiredLibs}
override public fun setRequiredLibs(internal_p : List<org.kevoree.DeployUnit>){ requiredLibs = internal_p }
override public fun getTargetNodeType() : org.kevoree.NodeType?{ return targetNodeType}
override public fun setTargetNodeType(internal_p : org.kevoree.NodeType?){ targetNodeType = internal_p }
}
