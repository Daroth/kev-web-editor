package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class NodeLinkImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.NodeLink { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_networkProperties?.clear()
}
public override var networkType : String? = null
	 set(iP : String?){
internal_networkType(iP, true)
	}//end of setter

	private fun internal_networkType(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != networkType){
val oldPath = path()
$networkType = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_networkType, networkType))
}
	}
	}//end of setter
public override var estimatedRate : Int? = null
	 set(iP : Int?){
internal_estimatedRate(iP, true)
	}//end of setter

	private fun internal_estimatedRate(iP : Int?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != estimatedRate){
val oldPath = path()
$estimatedRate = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_estimatedRate, estimatedRate))
}
	}
	}//end of setter
public override var lastCheck : String? = null
	 set(iP : String?){
internal_lastCheck(iP, true)
	}//end of setter

	private fun internal_lastCheck(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != lastCheck){
val oldPath = path()
$lastCheck = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_lastCheck, lastCheck))
}
	}
	}//end of setter
public override var zoneID : String? = null
	 set(iP : String?){
internal_zoneID(iP, true)
	}//end of setter

	private fun internal_zoneID(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != zoneID){
val oldPath = path()
$zoneID = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_zoneID, zoneID))
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
internal val _networkProperties : java.util.HashMap<String,org.kevoree.NetworkProperty> = java.util.HashMap<String,org.kevoree.NetworkProperty>()
override var networkProperties:List<org.kevoree.NetworkProperty>
	  get(){
		  return _networkProperties.values().toList()
	  }
	 set(networkPropertiesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(networkPropertiesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_networkProperties(networkPropertiesP, true, true)
}
fun internal_networkProperties(networkPropertiesP : List<org.kevoree.NetworkProperty>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_networkProperties.values()!= networkPropertiesP){
_networkProperties.clear()
for(el in networkPropertiesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_networkProperties.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_networkProperties, el),org.kevoree.util.Constants.Ref_networkProperties)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_networkProperties, networkPropertiesP))
}
}
}


private fun doAddNetworkProperties(networkPropertiesP : org.kevoree.NetworkProperty) {
val _key_ = (networkPropertiesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_networkProperties.containsKey(_key_)) {
_networkProperties.put(_key_,networkPropertiesP)
(networkPropertiesP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_networkProperties, networkPropertiesP),org.kevoree.util.Constants.Ref_networkProperties)
}
}

override fun addNetworkProperties(networkPropertiesP : org.kevoree.NetworkProperty) {
internal_addNetworkProperties(networkPropertiesP, true, true)
}

override fun addAllNetworkProperties(networkPropertiesP :List<org.kevoree.NetworkProperty>) {
internal_addAllNetworkProperties(networkPropertiesP, true, true)
}

private fun internal_addNetworkProperties(networkPropertiesP : org.kevoree.NetworkProperty, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddNetworkProperties(networkPropertiesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_networkProperties, networkPropertiesP))
}
}

private fun internal_addAllNetworkProperties(networkPropertiesP :List<org.kevoree.NetworkProperty>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in networkPropertiesP){
doAddNetworkProperties(el)
}
} else {
for(el in networkPropertiesP){
doAddNetworkProperties(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_networkProperties, networkPropertiesP))
}
}


override fun removeNetworkProperties(networkPropertiesP : org.kevoree.NetworkProperty) {
internal_removeNetworkProperties(networkPropertiesP, true, true)
}

var removeAllNetworkPropertiesCurrentlyProcessing : Boolean = false

override fun removeAllNetworkProperties() {
internal_removeAllNetworkProperties(true, true)
}

private fun internal_removeNetworkProperties(networkPropertiesP : org.kevoree.NetworkProperty, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_networkProperties.size() != 0 && _networkProperties.containsKey((networkPropertiesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_networkProperties.remove((networkPropertiesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(networkPropertiesP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllNetworkPropertiesCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_networkProperties, networkPropertiesP))
}
}
}

private fun internal_removeAllNetworkProperties(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllNetworkPropertiesCurrentlyProcessing=true
}
val temp_els = networkProperties!!
_networkProperties.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_networkProperties, temp_els))

removeAllNetworkPropertiesCurrentlyProcessing=false
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_networkType -> {
this.internal_networkType((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_estimatedRate -> {
this.internal_estimatedRate((value as? Int), fireEvents)
}
org.kevoree.util.Constants.Att_lastCheck -> {
this.internal_lastCheck((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_zoneID -> {
this.internal_zoneID((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_generated_KMF_ID -> {
this.internal_generated_KMF_ID((value as? String), fireEvents)
}
org.kevoree.util.Constants.Ref_networkProperties -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addNetworkProperties(value as org.kevoree.NetworkProperty, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllNetworkProperties(value as List<org.kevoree.NetworkProperty>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeNetworkProperties(value as org.kevoree.NetworkProperty, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllNetworkProperties()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_networkProperties.size() != 0 && _networkProperties.containsKey(value)) {
val obj = _networkProperties.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_networkProperties.remove(value)
_networkProperties.put(objNewKey,obj)
}
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
override fun findNetworkPropertiesByID(key : String?) : org.kevoree.NetworkProperty? {
return _networkProperties.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_networkProperties -> {
return findNetworkPropertiesByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_networkProperties, org.kevoree.util.Constants.org_kevoree_NetworkProperty)
                                    for(KMFLoopEntryKey in _networkProperties.keySet()){
                        internal_visit(visitor,_networkProperties.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_networkProperties)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_networkProperties)
                                    }
                                                                                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(estimatedRate,org.kevoree.util.Constants.Att_estimatedRate,this)
            visitor.visit(networkType,org.kevoree.util.Constants.Att_networkType,this)
            visitor.visit(generated_KMF_ID,org.kevoree.util.Constants.Att_generated_KMF_ID,this)
            visitor.visit(lastCheck,org.kevoree.util.Constants.Att_lastCheck,this)
            visitor.visit(zoneID,org.kevoree.util.Constants.Att_zoneID,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_NodeLink;
}
override public fun getEstimatedRate() : Int? { return estimatedRate}
override public fun setEstimatedRate(internal_p : Int?) { estimatedRate = internal_p }
override public fun getNetworkType() : String? { return networkType}
override public fun setNetworkType(internal_p : String?) { networkType = internal_p }
override public fun getGenerated_KMF_ID() : String? { return generated_KMF_ID}
override public fun setGenerated_KMF_ID(internal_p : String?) { generated_KMF_ID = internal_p }
override public fun getLastCheck() : String? { return lastCheck}
override public fun setLastCheck(internal_p : String?) { lastCheck = internal_p }
override public fun getZoneID() : String? { return zoneID}
override public fun setZoneID(internal_p : String?) { zoneID = internal_p }
override public fun getNetworkProperties() : List<org.kevoree.NetworkProperty>{ return networkProperties}
override public fun setNetworkProperties(internal_p : List<org.kevoree.NetworkProperty>){ networkProperties = internal_p }
}
