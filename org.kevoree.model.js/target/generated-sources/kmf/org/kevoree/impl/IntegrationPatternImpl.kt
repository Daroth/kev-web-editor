package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class IntegrationPatternImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.IntegrationPattern { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_extraFonctionalProperties?.clear()
_portTypes?.clear()
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
internal val _extraFonctionalProperties : java.util.HashMap<String,org.kevoree.ExtraFonctionalProperty> = java.util.HashMap<String,org.kevoree.ExtraFonctionalProperty>()
override var extraFonctionalProperties:List<org.kevoree.ExtraFonctionalProperty>
	  get(){
		  return _extraFonctionalProperties.values().toList()
	  }
	 set(extraFonctionalPropertiesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(extraFonctionalPropertiesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_extraFonctionalProperties(extraFonctionalPropertiesP, true, true)
}
fun internal_extraFonctionalProperties(extraFonctionalPropertiesP : List<org.kevoree.ExtraFonctionalProperty>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_extraFonctionalProperties.values()!= extraFonctionalPropertiesP){
_extraFonctionalProperties.clear()
for(el in extraFonctionalPropertiesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_extraFonctionalProperties.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_extraFonctionalProperties, el),org.kevoree.util.Constants.Ref_extraFonctionalProperties)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_extraFonctionalProperties, extraFonctionalPropertiesP))
}
}
}


private fun doAddExtraFonctionalProperties(extraFonctionalPropertiesP : org.kevoree.ExtraFonctionalProperty) {
val _key_ = (extraFonctionalPropertiesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_extraFonctionalProperties.containsKey(_key_)) {
_extraFonctionalProperties.put(_key_,extraFonctionalPropertiesP)
(extraFonctionalPropertiesP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_extraFonctionalProperties, extraFonctionalPropertiesP),org.kevoree.util.Constants.Ref_extraFonctionalProperties)
}
}

override fun addExtraFonctionalProperties(extraFonctionalPropertiesP : org.kevoree.ExtraFonctionalProperty) {
internal_addExtraFonctionalProperties(extraFonctionalPropertiesP, true, true)
}

override fun addAllExtraFonctionalProperties(extraFonctionalPropertiesP :List<org.kevoree.ExtraFonctionalProperty>) {
internal_addAllExtraFonctionalProperties(extraFonctionalPropertiesP, true, true)
}

private fun internal_addExtraFonctionalProperties(extraFonctionalPropertiesP : org.kevoree.ExtraFonctionalProperty, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddExtraFonctionalProperties(extraFonctionalPropertiesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_extraFonctionalProperties, extraFonctionalPropertiesP))
}
}

private fun internal_addAllExtraFonctionalProperties(extraFonctionalPropertiesP :List<org.kevoree.ExtraFonctionalProperty>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in extraFonctionalPropertiesP){
doAddExtraFonctionalProperties(el)
}
} else {
for(el in extraFonctionalPropertiesP){
doAddExtraFonctionalProperties(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_extraFonctionalProperties, extraFonctionalPropertiesP))
}
}


override fun removeExtraFonctionalProperties(extraFonctionalPropertiesP : org.kevoree.ExtraFonctionalProperty) {
internal_removeExtraFonctionalProperties(extraFonctionalPropertiesP, true, true)
}

var removeAllExtraFonctionalPropertiesCurrentlyProcessing : Boolean = false

override fun removeAllExtraFonctionalProperties() {
internal_removeAllExtraFonctionalProperties(true, true)
}

private fun internal_removeExtraFonctionalProperties(extraFonctionalPropertiesP : org.kevoree.ExtraFonctionalProperty, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_extraFonctionalProperties.size() != 0 && _extraFonctionalProperties.containsKey((extraFonctionalPropertiesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_extraFonctionalProperties.remove((extraFonctionalPropertiesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(extraFonctionalPropertiesP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllExtraFonctionalPropertiesCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_extraFonctionalProperties, extraFonctionalPropertiesP))
}
}
}

private fun internal_removeAllExtraFonctionalProperties(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllExtraFonctionalPropertiesCurrentlyProcessing=true
}
val temp_els = extraFonctionalProperties!!
_extraFonctionalProperties.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_extraFonctionalProperties, temp_els))

removeAllExtraFonctionalPropertiesCurrentlyProcessing=false
}
}

internal val _portTypes : java.util.HashMap<String,org.kevoree.PortTypeRef> = java.util.HashMap<String,org.kevoree.PortTypeRef>()
override var portTypes:List<org.kevoree.PortTypeRef>
	  get(){
		  return _portTypes.values().toList()
	  }
	 set(portTypesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(portTypesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_portTypes(portTypesP, true, true)
}
fun internal_portTypes(portTypesP : List<org.kevoree.PortTypeRef>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_portTypes.values()!= portTypesP){
_portTypes.clear()
for(el in portTypesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_portTypes.put(elKey!!,el)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_portTypes, portTypesP))
}
}
}


private fun doAddPortTypes(portTypesP : org.kevoree.PortTypeRef) {
val _key_ = (portTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_portTypes.containsKey(_key_)) {
_portTypes.put(_key_,portTypesP)
}
}

override fun addPortTypes(portTypesP : org.kevoree.PortTypeRef) {
internal_addPortTypes(portTypesP, true, true)
}

override fun addAllPortTypes(portTypesP :List<org.kevoree.PortTypeRef>) {
internal_addAllPortTypes(portTypesP, true, true)
}

private fun internal_addPortTypes(portTypesP : org.kevoree.PortTypeRef, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddPortTypes(portTypesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_portTypes, portTypesP))
}
}

private fun internal_addAllPortTypes(portTypesP :List<org.kevoree.PortTypeRef>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in portTypesP){
doAddPortTypes(el)
}
} else {
for(el in portTypesP){
doAddPortTypes(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_portTypes, portTypesP))
}
}


override fun removePortTypes(portTypesP : org.kevoree.PortTypeRef) {
internal_removePortTypes(portTypesP, true, true)
}

override fun removeAllPortTypes() {
internal_removeAllPortTypes(true, true)
}

private fun internal_removePortTypes(portTypesP : org.kevoree.PortTypeRef, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_portTypes.size() != 0 && _portTypes.containsKey((portTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_portTypes.remove((portTypesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_portTypes, portTypesP))
}
}
}

private fun internal_removeAllPortTypes(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
val temp_els = portTypes!!
_portTypes.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_portTypes, temp_els))
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_name -> {
this.internal_name((value as? String), fireEvents)
}
org.kevoree.util.Constants.Ref_extraFonctionalProperties -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addExtraFonctionalProperties(value as org.kevoree.ExtraFonctionalProperty, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllExtraFonctionalProperties(value as List<org.kevoree.ExtraFonctionalProperty>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeExtraFonctionalProperties(value as org.kevoree.ExtraFonctionalProperty, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllExtraFonctionalProperties()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_extraFonctionalProperties.size() != 0 && _extraFonctionalProperties.containsKey(value)) {
val obj = _extraFonctionalProperties.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_extraFonctionalProperties.remove(value)
_extraFonctionalProperties.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_portTypes -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addPortTypes(value as org.kevoree.PortTypeRef, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllPortTypes(value as List<org.kevoree.PortTypeRef>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removePortTypes(value as org.kevoree.PortTypeRef, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllPortTypes()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_portTypes.size() != 0 && _portTypes.containsKey(value)) {
val obj = _portTypes.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_portTypes.remove(value)
_portTypes.put(objNewKey,obj)
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
override fun findExtraFonctionalPropertiesByID(key : String?) : org.kevoree.ExtraFonctionalProperty? {
return _extraFonctionalProperties.get(key)
}
override fun findPortTypesByID(key : String?) : org.kevoree.PortTypeRef? {
return _portTypes.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_extraFonctionalProperties -> {
return findExtraFonctionalPropertiesByID(idP)}
org.kevoree.util.Constants.Ref_portTypes -> {
return findPortTypesByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_extraFonctionalProperties, org.kevoree.util.Constants.org_kevoree_ExtraFonctionalProperty)
                                    for(KMFLoopEntryKey in _extraFonctionalProperties.keySet()){
                        internal_visit(visitor,_extraFonctionalProperties.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_extraFonctionalProperties)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_extraFonctionalProperties)
                                    }
                                                                                                                       if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_portTypes, org.kevoree.util.Constants.org_kevoree_PortTypeRef)
                                                    for(KMFLoopEntryKey in _portTypes.keySet()){
                                internal_visit(visitor,_portTypes.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_portTypes)
                            }
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_portTypes)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_IntegrationPattern;
}
override public fun getName() : String? { return name}
override public fun setName(internal_p : String?) { name = internal_p }
override public fun getExtraFonctionalProperties() : List<org.kevoree.ExtraFonctionalProperty>{ return extraFonctionalProperties}
override public fun setExtraFonctionalProperties(internal_p : List<org.kevoree.ExtraFonctionalProperty>){ extraFonctionalProperties = internal_p }
override public fun getPortTypes() : List<org.kevoree.PortTypeRef>{ return portTypes}
override public fun setPortTypes(internal_p : List<org.kevoree.PortTypeRef>){ portTypes = internal_p }
}
